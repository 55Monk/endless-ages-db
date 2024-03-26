import {
  AdjustmentsHorizontalIcon,
  BoltIcon,
  ChartBarIcon,
  ClockIcon,
  RocketLaunchIcon,
  ShieldExclamationIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { getElementIcon } from "../../Elements";
import { Item } from "../../data/items/items";
import { elements } from "../../data/shared";
import { Attribute, AttributeRow } from "../CardAttribute";

type Props = { item: Item };

export default function ItemCardPreviewContent(props: Props) {
  const { item } = props;

  return (
    <div className="flex flex-col gap-1">
      {item.requirements && (
        <AttributeRow name="Use Requirements" icon={<ChartBarIcon />}>
          {Object.entries(item.requirements).map(([req, value], index) => (
            <Attribute key={index} qualifiers={req} value={value} />
          ))}
        </AttributeRow>
      )}
      {item.defenses && (
        <AttributeRow name="Resistances Given" icon={<ShieldExclamationIcon />}>
          {elements.map((ele, index) => {
            const v = item.defenses?.[ele] || 0;
            const vString = String(v).padStart(2, "0");
            return (
              <Attribute
                key={index}
                qualifiers={getElementIcon(ele)}
                value={vString}
                faded={v === 0}
              />
            );
          })}
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
          <Attribute
            qualifiers={item.damage.directElement === "HEAL" ? "HPS" : "DPS"}
            value={item.damage.dps}
          />
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
    </div>
  );
}
