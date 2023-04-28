import { Tab } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import getItems, { Race } from "../data/items";
import { maps } from "../data/maps";
import getNpcMap, { Location } from "../data/npcs";
import { Quest } from "../data/quests";
import FiltersPanel from "./FiltersPanel";
import ItemCard from "./Item/ItemCard";
import PlotMap from "./Map/PlotMap";
import QuestPanel from "./Quest/QuestPanel";
import RaceFilterPanel, { Filters } from "./RaceFilterPanel";

const tabs: string[] = ["Items", "Monsters", "NPCs", "Quests"];

const races: Race[] = ["AP", "BL", "HF", "HM"];

type ContentState = {
  selectedTab: number;
  selectedMap: string;
  markers: { location: Location; icon?: string; complete?: boolean }[];
  lines: any;
  selectTab: (tab: number) => void;
  selectMap: (map: string) => void;
  clearMap: () => void;
  plotQuest: (quest: Quest) => void;
  setMarkerComplete: (index: number, complete: boolean) => void;
};

export const useContentStore = create<ContentState>()(
  immer(
    persist(
      (set) => ({
        selectedTab: 0,
        selectedMap: Object.keys(maps)[0],
        markers: [],
        lines: [],
        selectTab: (tab: number) => set(() => ({ selectedTab: tab })),
        selectMap: (map: string) => set(() => ({ selectedMap: map })),
        clearMap: () => set(() => ({ markers: [], lines: [] })),
        plotQuest: (quest: Quest) =>
          set(() => {
            const npcs = getNpcMap();
            const markers = quest.steps.map((step) => ({
              location: npcs[step.npcName].location,
              icon: npcs[step.npcName].icon,
            }));
            return { markers, selectedMap: markers[0].location.map };
          }),
        setMarkerComplete: (index: number, complete: boolean) =>
          set((state) => {
            state.markers[index].complete = complete;
            if (complete) {
              if (state.markers.length > index + 1) {
                state.selectedMap = state.markers[index + 1].location.map;
              } else {
                state.selectedMap = state.markers[index].location.map;
              }
            } else {
              const lastCompletedMarker = state.markers
                .slice()
                .reverse()
                .find((marker) => marker.complete);
              if (lastCompletedMarker) {
                const lastCompletedMarkerIndex =
                  state.markers.indexOf(lastCompletedMarker);
                if (state.markers.length > lastCompletedMarkerIndex + 1) {
                  state.selectedMap =
                    state.markers[lastCompletedMarkerIndex + 1].location.map;
                } else {
                  state.selectedMap =
                    state.markers[lastCompletedMarkerIndex].location.map;
                }
              } else {
                state.selectedMap = state.markers[0].location.map;
              }
            }
          }),
      }),
      { name: "eadb-content-storage" }
    )
  )
);

export default function WebsiteContent() {
  const [searchRef, setSearchRef] = useState<HTMLInputElement | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const initialRacesFilter: any = {};
  races.forEach((race) => (initialRacesFilter[race] = true));
  const [racesFilter, setRacesFilter] =
    useState<Filters<Race>>(initialRacesFilter);

  const selectedTab = useContentStore((state) => state.selectedTab);
  const selectTab = useContentStore((state) => state.selectTab);

  const items = getItems();
  let filteredItems = [...items];
  // filter by search
  if (searchValue.length > 0) {
    filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
  // filter by race
  const toKeepRaces = Object.entries(racesFilter)
    .filter(([race, keep]) => keep)
    .map(([race]) => race);
  filteredItems = filteredItems.filter(
    (item) => !item.race || toKeepRaces.includes(item.race)
  );

  return (
    <div className="flex flex-grow">
      <div className="flex w-[356px] flex-col gap-2 border-r border-neutral-300 p-2">
        <Tab.Group selectedIndex={selectedTab} onChange={selectTab}>
          <Tab.List className="flex justify-between gap-1">
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
            <Tab.Panel className="flex max-w-sm flex-grow flex-col gap-1">
              <div className="flex w-full items-center gap-2 rounded border border-neutral-300 px-2 py-1 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-700 focus-within:ring-2">
                <MagnifyingGlassIcon className="h-4 w-4" />
                <input
                  ref={(ref) => setSearchRef(ref)}
                  placeholder="Search"
                  className="flex-grow focus:outline-none"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                {searchValue.length > 0 && (
                  <button
                    onClick={() => {
                      setSearchValue("");
                      searchRef?.focus();
                    }}
                    className="rounded-xl p-1 hover:bg-neutral-100"
                  >
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                )}
              </div>
              <RaceFilterPanel
                races={races}
                racesFilter={racesFilter}
                setRacesFilter={setRacesFilter}
              />
              <FiltersPanel
                name="Additional Filters"
                filters={["Armor", "Gun", "Sword", "Quest Item"]}
              />
              <hr className="my-2" />
              <div className="flex flex-grow basis-0 flex-col gap-2 overflow-y-scroll">
                {filteredItems.length === 0 && (
                  <div className="rounded-md border-2 border-dotted border-neutral-300 p-6 text-center align-middle text-neutral-400">
                    No Items Match Criteria
                  </div>
                )}
                {filteredItems.map((item) => (
                  <ItemCard key={item.name} item={item} />
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel />
            <Tab.Panel />
            <QuestPanel />
          </Tab.Panels>
        </Tab.Group>
      </div>
      <PlotMap />
    </div>
  );
}
