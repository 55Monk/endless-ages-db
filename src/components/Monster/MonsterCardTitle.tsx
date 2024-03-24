import {
  ExclamationTriangleIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { Monster } from "../../data/monsters.ts";

type Props = {
  monster: Monster;
};

export function MonsterCardTitle(props: Props) {
  const { monster } = props;

  return (
    <div>
      <div className="flex items-center gap-2">
        <strong className="leading-none">{monster.name}</strong>
        {monster.aggro ? (
          <ExclamationTriangleIcon
            className="group h-5 w-5"
            title="Aggressive"
          />
        ) : (
          <FaceSmileIcon className="group h-5 w-5" title="Passive" />
        )}
      </div>
      <div className="text-xs">
        Lv{monster.level} - {monster.race}
      </div>
    </div>
  );
}
