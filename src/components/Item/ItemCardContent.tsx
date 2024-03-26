import {
  BugAntIcon,
  ShoppingCartIcon,
  TrophyIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { Item } from "../../data/items/items";
import { Attribute, AttributeRow } from "../CardAttribute";
import TextRef from "../Reference/TextRef";
import ItemCardPreviewContent from "./ItemCardPreviewContent.tsx";

type Props = { item: Item };

export default function ItemCardContent(props: Props) {
  const { item } = props;

  return (
    <>
      <ItemCardPreviewContent item={item} />
      <div className="flex flex-col gap-1">
        {item.fromVendor && (
          <AttributeRow name="Purchased from" icon={<ShoppingCartIcon />}>
            <Attribute value={<TextRef name={item.fromVendor} type="npc" />} />
          </AttributeRow>
        )}
        {item.craftedBy && (
          <>
            <div className="flex items-center gap-2">
              <WrenchScrewdriverIcon
                className="group h-5 w-5"
                title="Crafted"
              />
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
            <Attribute
              value={<TextRef name={item.rewardFrom} type="quest" />}
            />
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
      <img
        src={`${import.meta.env.BASE_URL}/assets/pictures/${item.name}.jpg`}
        alt={item.name}
        title={item.name}
      />
    </>
  );
}
