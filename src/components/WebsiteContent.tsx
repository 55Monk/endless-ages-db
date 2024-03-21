import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { MapLocation } from "../data/shared";
import useContentStore from "../hooks/UseContentStore";
import ItemPanel from "./Item/ItemPanel";
import PlotMap from "./Map/PlotMap.tsx";
import MonsterPanel from "./Monster/MonsterPanel";
import NpcPanel from "./Npc/NpcPanel";
import QuestPanel from "./Quest/QuestPanel";
import { tabs } from "./Tabs";

export type Marker = {
  location: MapLocation;
  icon?: string;
  complete?: boolean;
};

export default function WebsiteContent() {
  const selectedTab = useContentStore((state) => state.selectedTab);
  const selectTab = useContentStore((state) => state.selectTab);

  return (
    <div className="flex flex-grow">
      <div className="flex w-[500px] flex-col border-r border-neutral-300">
        <Tab.Group selectedIndex={selectedTab} onChange={selectTab}>
          <Tab.List className="flex justify-between p-2">
            {tabs.map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  `rounded px-4 py-1 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-700 focus:outline-none focus:ring-2 ${
                    selected
                      ? "bg-neutral-800 text-white"
                      : "bg-white text-black hover:bg-neutral-100"
                  }`
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels as={Fragment}>
            <ItemPanel />
            <MonsterPanel />
            <NpcPanel />
            <QuestPanel />
            <Tab.Panel></Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <PlotMap />
    </div>
  );
}
