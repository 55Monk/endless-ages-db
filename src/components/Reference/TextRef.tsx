import { Popover } from "@headlessui/react";
import { getItemMap } from "../../data/items/items";
import getNpcMap from "../../data/npcs";
import getQuestMap from "../../data/quests";
import { DataType, getDataTypeColor } from "../../data/shared";
import ItemCard from "../Item/ItemCard";
import QuestTooltip from "../Quest/QuestTooltip";

type Props = {
  name: string;
  type: DataType;
};

const itemMap = getItemMap();
const npcMap = getNpcMap();
const questMap = getQuestMap();

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
        panelContent = <ItemCard item={item} />;
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
    <Popover className="inline">
      <Popover.Button className={`font-bold ${color}`}>{name}</Popover.Button>
      <Popover.Panel className="absolute z-[999] mt-2">
        {panelContent}
      </Popover.Panel>
    </Popover>
  );
}
