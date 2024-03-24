import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { Monster } from "../../data/monsters.ts";
import { Attribute, AttributeRow } from "../CardAttribute.tsx";
import TextRef from "../Reference/TextRef.tsx";
import MonsterCardPreviewContent from "./MonsterCardPreviewContent.tsx";

type Props = { monster: Monster };

export default function MonsterCardContent(props: Props) {
  const { monster } = props;

  return (
    <>
      <MonsterCardPreviewContent monster={monster} />
      <div className="flex max-h-full flex-col gap-1">
        <AttributeRow name="Health" icon={<HeartIcon />}>
          <Attribute value={monster.health} />
        </AttributeRow>
        <AttributeRow name="XP Rate" icon={<AcademicCapIcon />}>
          <Attribute value={monster.xpRate} />
        </AttributeRow>
        <AttributeRow name="Loot" icon={<ArrowDownTrayIcon />}>
          <Attribute
            qualifiers={
              <CurrencyDollarIcon className="h-4 w-4" title="Credits" />
            }
            value={`${monster.loot.creditRange[0]}-${monster.loot.creditRange[1]}`}
          />
          {monster.loot.drops.map((drop) => {
            return (
              <Attribute
                key={drop.name}
                qualifiers={drop.rate}
                value={<TextRef name={drop.name} type="item" />}
              />
            );
          })}
        </AttributeRow>
      </div>
      <img
        src={`${import.meta.env.BASE_URL}/assets/pictures/${monster.name}.jpg`}
        alt={monster.name}
        title={monster.name}
      />
    </>
  );
}
