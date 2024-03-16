import { ClockIcon, SparklesIcon } from "@heroicons/react/16/solid";
import {
  AdjustmentsHorizontalIcon,
  BoltIcon,
  BugAntIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ShieldExclamationIcon,
  ShoppingCartIcon,
  TrophyIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
import { getElementIcon } from "../../Elements";
import { Item, elements, getItemDps } from "../../data/items/items";
import TextRef from "../Reference/TextRef";
import { Attribute, AttributeRow } from "./ItemCardAttribute";
import { ItemCardTitleRow } from "./ItemCardTitleRow";

type Props = { item: Item };

export default function ItemCard(props: Props) {
  const { item } = props;

  return (
    <div className="flex flex-col gap-1 rounded border border-neutral-300 p-1">
      <ItemCardTitleRow item={item} />
      {item.requirements && (
        <AttributeRow name="Use Requirements" icon={<ChartBarIcon />}>
          {Object.entries(item.requirements).map(([req, value], index) => (
            <Attribute key={index} qualifiers={req} value={value} />
          ))}
        </AttributeRow>
      )}
      {item.defenses && (
        <AttributeRow name="Resistances Given" icon={<ShieldExclamationIcon />}>
          {elements.map((ele, index) => (
            <Attribute
              key={index}
              qualifiers={getElementIcon(ele)}
              value={item.defenses?.[ele] || 0}
            />
          ))}
        </AttributeRow>
      )}
      {item.bonuses && (
        <AttributeRow name="Bonuses Given" icon={<AdjustmentsHorizontalIcon />}>
          {Object.entries(item.bonuses).map(([bonus, value], index) => (
            <Attribute key={index} qualifiers={bonus} value={value} />
          ))}
        </AttributeRow>
      )}
      {item.damage && (
        <AttributeRow name="Damage" icon={<BoltIcon />}>
          {item.damage.directAmount && (
            <Attribute
              qualifiers={getElementIcon(item.damage.directElement ?? "")}
              value={item.damage.directAmount}
            />
          )}
          {item.damage.splashAmount && (
            <Attribute
              qualifiers={
                <span className="flex gap-1">
                  <SparklesIcon className="h-4 w-4" title="Splash" />
                  {getElementIcon(item.damage.splashElement ?? "")}
                </span>
              }
              value={item.damage.splashAmount}
            />
          )}
          <Attribute
            qualifiers={<ClockIcon className="h-4 w-4" title="Cooldown" />}
            value={item.damage.reloadDurationSeconds}
          />
          <Attribute qualifiers="DPS" value={getItemDps(item)} />
        </AttributeRow>
      )}
      {item.flightDurationSeconds && (
        <AttributeRow name="Bonuses Given" icon={<RocketLaunchIcon />}>
          <Attribute
            qualifiers={<ClockIcon className="h-4 w-4" title="Cooldown" />}
            value={item.flightDurationSeconds}
          />
        </AttributeRow>
      )}
      {item.fromVendor && (
        <AttributeRow name="Purchased from" icon={<ShoppingCartIcon />}>
          <Attribute value={<TextRef name={item.fromVendor} type="npc" />} />
        </AttributeRow>
      )}
      {item.craftedBy && (
        <>
          <div className="flex items-center gap-2">
            <WrenchScrewdriverIcon className="group h-5 w-5" title="Crafted" />
            <span className="mb-[-1px] text-sm">
              Crafted by{" "}
              <span className="font-bold text-cyan-500">
                {item.craftedBy.skill}
              </span>{" "}
              (level <strong>{item.craftedBy.level}</strong>)
            </span>
          </div>
          {item.craftedBy.ingredients.map((ingredient, index) => (
            <div key={index} className="mb-[-1px] pl-6 text-sm">
              {ingredient.quantity}{" "}
              <TextRef name={ingredient.name} type="item" />
            </div>
          ))}
        </>
      )}
      {item.rewardFrom && (
        <AttributeRow name="Reward From" icon={<TrophyIcon />}>
          <Attribute value={<TextRef name={item.rewardFrom} type="quest" />} />
        </AttributeRow>
      )}
      {item.droppedBy && (
        <AttributeRow name="Dropped By" icon={<BugAntIcon />}>
          <Attribute
            qualifiers={<TextRef name={item.droppedBy.name} type="mob" />}
            value={`${item.droppedBy.rate}%`}
          />
        </AttributeRow>
      )}
    </div>
  );
}
