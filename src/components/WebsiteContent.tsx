import { Tab } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import L from "leaflet";
import { Fragment, useState } from "react";
import { ImageOverlay, MapContainer, Marker, Tooltip } from "react-leaflet";
import getItems, { Race } from "../data/items";
import FiltersPanel from "./FiltersPanel";
import ItemCard from "./ItemCard";
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

  const OrbIcon: any = L.Icon.extend({
    options: {
      iconSize: [34, 51],
      iconAnchor: [17, 51],
      popupAnchor: [0, -51],
      tooltipAnchor: [17, -35],
    },
  });

  const icons = {
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
        <Marker icon={icons["plant"]} position={[-6454, 13165]}>
          <Tooltip>Perox Flower</Tooltip>
        </Marker>
        <Marker icon={icons["plant"]} position={[-2229, 13179]}>
          <Tooltip>Sun Flower</Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
}
