import { Popover } from "@headlessui/react";
import { itemMap } from "../../data/items/items.ts";
import { npcMap } from "../../data/npcs/npcs.ts";
import { questMap } from "../../data/quests.ts";
import { DataType, getDataTypeColor } from "../../data/shared";
import ItemCardPreviewContent from "../Item/ItemCardPreviewContent.tsx";
import QuestTooltip from "../Quest/QuestTooltip";

type Props = {
  name: string;
  type: DataType;
};

export default function TextRef(props: Props) {
  const { name, type } = props;

  const color = getDataTypeColor(type);

  let panelContent = (
    <div className="whitespace-nowrap rounded border border-neutral-300 bg-white p-4 font-bold">
      No {type} found
    </div>
  );
  switch (type) {
    case "item": {
      const item = itemMap[name];
      if (item) {
        panelContent = <ItemCardPreviewContent item={item} />;
      }
      break;
    }
    case "mob": {
      break;
    }
    case "npc": {
      const npc = npcMap[name];
      if (npc) {
        // panelContent = <NpcCard npc={npc} />;
      }
      break;
    }
    case "quest": {
      const quest = questMap[name];
      if (quest) {
        panelContent = <QuestTooltip quest={quest} />;
      }
      break;
    }
  }

  return (
    <Popover className="relative inline">
      <Popover.Button className={`font-bold ${color}`}>{name}</Popover.Button>
      <Popover.Panel className="absolute z-[999] mt-2">
        {panelContent}
      </Popover.Panel>
    </Popover>
  );
}
