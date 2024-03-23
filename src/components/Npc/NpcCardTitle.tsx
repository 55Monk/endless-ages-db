import { NPC } from "../../data/npcs/npcs.ts";

type Props = {
  npc: NPC;
};

export function NpcCardTitle(props: Props) {
  const { npc } = props;

  return (
    <div className="flex-grow">
      <strong className="leading-none">{npc.name}</strong>
      <div className="text-xs">
        {npc.location.map.toUpperCase()} - {npc.location.description}
      </div>
    </div>
  );
}
