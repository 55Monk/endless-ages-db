import { Tab } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import L, { LatLngExpression } from "leaflet";
import { Fragment, useState } from "react";
import {
  ImageOverlay,
  MapContainer,
  Marker,
  Polyline,
  Tooltip,
} from "react-leaflet";
import getItems, { Race } from "../data/items";
import FiltersPanel from "./FiltersPanel";
import ItemCard from "./ItemCard";
import { Quest, QuestStep } from "./Quest/QuestCard";
import QuestPanel from "./Quest/QuestPanel";
import RaceFilterPanel, { Filters } from "./RaceFilterPanel";

type TabDef = {
  name: string;
};

const tabs: TabDef[] = [
  {
    name: "Items",
  },
  {
    name: "Monsters",
  },
  {
    name: "NPCs",
  },
  {
    name: "Quests",
  },
];

const races: Race[] = ["AP", "BL", "HF", "HM"];

const quests: Record<string, Quest> = {
  "Dominion Egg Quest": {
    name: "Dominion Egg Quest",
    shortDesc: "Rewards strength ring for each race",
    steps: [
      { npcName: "Dominion Gratute Egg", action: "Loot" },
      { npcName: "Dominion Grison Egg", action: "Loot" },
      { npcName: "Dominion Flisk Egg", action: "Loot" },
      { npcName: "Dominion Powlong Egg", action: "Loot" },
      { npcName: "Dominion Ligton Egg", action: "Loot" },
      { npcName: "Dominion Bringing Egg", action: "Loot" },
      { npcName: "Dominion Drout Egg", action: "Loot" },
      { npcName: "Dominion Cripton Egg", action: "Loot" },
      { npcName: "Dominion Briscore Egg", action: "Loot" },
      { npcName: "To Trendor From IIA", action: "Teleport" },
      { npcName: "G'fron", action: "Talk To" },
    ],
  },
};

function getLines(quest: Quest) {
  const lines = [];
  if (quest && quest.steps) {
    let previousLocation;
    for (const step of quest.steps) {
      const npcLocation = npcs[step.npcName]?.location;
      if (npcLocation) {
        if (previousLocation) {
          lines.push([previousLocation, npcLocation]);
        }
        previousLocation = npcLocation;
      }
    }
  }
  return lines;
}

type NPC = {
  location?: LatLngExpression;
  icon?: string;
};

const npcs: Record<string, NPC> = {
  "Dominion Drout Egg": {
    location: [-4, 7157],
    icon: "egg",
  },
  "Dominion Cripton Egg": {
    location: [8090, 7901],
    icon: "egg",
  },
  "Dominion Briscore Egg": {
    location: [16136, 8431],
    icon: "egg",
  },
  "Dominion Gratute Egg": {
    location: [12284, -7931],
    icon: "egg",
  },
  "Dominion Grison Egg": {
    location: [-877, -17704],
    icon: "egg",
  },
  "Dominion Flisk Egg": {
    location: [1866, -9615],
    icon: "egg",
  },
  "Dominion Powlong Egg": {
    location: [-9923, -14856],
    icon: "egg",
  },
  "Dominion Ligton Egg": {
    location: [-21234, -10756],
    icon: "egg",
  },
  "Dominion Briging Egg": {
    location: [-14283, 4671],
    icon: "egg",
  },
  "To Trendor From IIA": {
    location: [12371, -7937],
  },
  "G'fron": {},
};

export default function WebsiteContent() {
  const [searchRef, setSearchRef] = useState<HTMLInputElement | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const initialRacesFilter: any = {};
  races.forEach((race) => (initialRacesFilter[race] = true));
  const [racesFilter, setRacesFilter] =
    useState<Filters<Race>>(initialRacesFilter);

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

  const [selectedQuest, setSelectedQuest] = useState<string>();

  const OrbIcon: any = L.Icon.extend({
    options: {
      iconSize: [34, 51],
      iconAnchor: [17, 51],
      popupAnchor: [0, -51],
      tooltipAnchor: [17, -35],
    },
  });

  const icons: Record<string, any> = {
    orb: new OrbIcon({
      iconUrl: `${process.env.PUBLIC_URL}/assets/icons/orb-marker-icon.png`,
    }),
    ap: new OrbIcon({
      iconUrl: `${process.env.PUBLIC_URL}/assets/icons/ap-marker-icon.png`,
    }),
    bl: new OrbIcon({
      iconUrl: `${process.env.PUBLIC_URL}/assets/icons/bl-marker-icon.png`,
    }),
    hf: new OrbIcon({
      iconUrl: `${process.env.PUBLIC_URL}/assets/icons/hf-marker-icon.png`,
    }),
    hm: new OrbIcon({
      iconUrl: `${process.env.PUBLIC_URL}/assets/icons/hm-marker-icon.png`,
    }),
    qi: new OrbIcon({
      iconUrl: `${process.env.PUBLIC_URL}/assets/icons/qi-marker-icon.png`,
    }),
    egg: new OrbIcon({
      iconUrl: `${process.env.PUBLIC_URL}/assets/icons/egg-marker-icon.png`,
    }),
    plant: new OrbIcon({
      iconUrl: `${process.env.PUBLIC_URL}/assets/icons/plant-marker-icon.png`,
    }),
    mineral: new OrbIcon({
      iconUrl: `${process.env.PUBLIC_URL}/assets/icons/mineral-marker-icon.png`,
    }),
    chest: new OrbIcon({
      iconUrl: `${process.env.PUBLIC_URL}/assets/icons/chest-marker-icon.png`,
    }),
  };

  // @ts-ignore
  // @ts-ignore
  return (
    <div className="flex flex-grow">
      <div className="flex w-[356px] flex-col gap-2 border-r border-neutral-300 p-2">
        <Tab.Group>
          <Tab.List className="flex justify-between gap-1">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  `rounded px-4 py-1 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-700 focus:outline-none focus:ring-2 ${
                    selected
                      ? "bg-neutral-800 text-white"
                      : "bg-white text-black hover:bg-neutral-100"
                  }`
                }
              >
                {tab.name}
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
            <QuestPanel
              quests={Object.values(quests)}
              selectedQuest={selectedQuest}
              setSelectedQuest={setSelectedQuest}
            />
          </Tab.Panels>
        </Tab.Group>
      </div>
      <MapContainer
        className="flex-grow"
        center={[0, 0]}
        zoom={-6}
        minZoom={-6}
        maxZoom={-1}
        scrollWheelZoom={true}
        crs={L.CRS.Simple}
        maxBounds={[
          [-21506, -21852],
          [21694, 21348],
        ]}
      >
        <ImageOverlay
          url={`${process.env.PUBLIC_URL}/assets/maps/mainworld.png`}
          bounds={[
            [-21506, -21852],
            [21694, 21348],
          ]}
        />
        {/*<Marker icon={icons["plant"]} position={[-6454, 13165]}>*/}
        {/*  <Tooltip>Perox Flower</Tooltip>*/}
        {/*</Marker>*/}
        {/*<Marker icon={icons["plant"]} position={[-2229, 13179]}>*/}
        {/*  <Tooltip>Sun Flower</Tooltip>*/}
        {/*</Marker>*/}
        {/*{Object.entries(npcs).map(([name, entry]) => (*/}
        {/*  <Marker icon={icons[entry.icon ?? "orb"]} position={entry.location}>*/}
        {/*    <Tooltip>{name}</Tooltip>*/}
        {/*  </Marker>*/}
        {/*))}*/}
        {selectedQuest &&
          quests[selectedQuest]?.steps.map(
            (step: QuestStep, index) =>
              npcs[step.npcName]?.location && (
                <Marker
                  key={index}
                  icon={icons[npcs[step.npcName].icon ?? "orb"]}
                  position={npcs[step.npcName].location!}
                >
                  <Tooltip>
                    {step.action} {step.npcName}
                  </Tooltip>
                </Marker>
              )
          )}
        {selectedQuest &&
          getLines(quests[selectedQuest]).map((line, index) => (
            <Polyline key={index} positions={line} color="red" />
          ))}
      </MapContainer>
    </div>
  );
}
