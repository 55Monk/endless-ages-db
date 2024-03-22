import {
  BoltIcon,
  ClockIcon,
  ShieldExclamationIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { getElementIcon } from "../../Elements";
import { Monster } from "../../data/monsters.ts";
import { elements } from "../../data/shared.ts";
import { Attribute, AttributeRow } from "../CardAttribute.tsx";

type Props = { monster: Monster };

export default function MonsterCardPreviewContent(props: Props) {
  const { monster } = props;

  return (
    <div className="flex flex-col gap-1">
      {monster.defenses && (
        <AttributeRow name="Resistances Given" icon={<ShieldExclamationIcon />}>
          {elements.map((ele, index) => {
            const v = monster.defenses?.[ele] || 0;
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
      {monster.damage && (
        <AttributeRow name="Damage" icon={<BoltIcon />}>
          {monster.damage.directAmount && (
            <Attribute
              qualifiers={getElementIcon(monster.damage.directElement ?? "")}
              value={monster.damage.directAmount}
            />
          )}
          {monster.damage.splashAmount && (
            <Attribute
              qualifiers={
                <span className="flex gap-1">
                  <SparklesIcon className="h-4 w-4" title="Splash" />
                  {getElementIcon(monster.damage.splashElement ?? "")}
                </span>
              }
              value={monster.damage.splashAmount}
            />
          )}
          <Attribute
            qualifiers={<ClockIcon className="h-4 w-4" title="Cooldown" />}
            value={monster.damage.reloadDurationSeconds}
          />
          <Attribute
            qualifiers={monster.damage.directElement === "HEAL" ? "HPS" : "DPS"}
            value={monster.damage.dps}
          />
        </AttributeRow>
      )}
    </div>
  );
}
