import { Tab } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import getItems, { Race, races } from "../../data/items/items";
import FiltersPanel from "../FiltersPanel";
import NoMatchCard from "../NoMatchCard";
import ItemCard from "./ItemCard";
import ItemRaceFilterPanel, { Filters } from "./ItemRaceFilterPanel";

const items = getItems();

export default function ItemPanel() {
  const [searchRef, setSearchRef] = useState<HTMLInputElement | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");

  const initialRacesFilter: Partial<Filters<Race>> = {};
  races.forEach((race) => (initialRacesFilter[race] = true));
  const [racesFilter, setRacesFilter] = useState<Filters<Race>>(
    initialRacesFilter as Filters<Race>,
  );

  let filteredItems = [...items];
  // filter by search
  if (searchValue.length > 0) {
    filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }
  // filter by race
  const toKeepRaces = Object.entries(racesFilter)
    .filter(([, keep]) => keep)
    .map(([race]) => race);
  filteredItems = filteredItems.filter(
    (item) =>
      (!item.race && toKeepRaces.includes("Other")) ||
      toKeepRaces.includes(item.race || ""),
  );

  return (
    <Tab.Panel className="flex flex-grow flex-col">
      <div className="flex flex-col gap-1 px-2 pb-2">
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
        <ItemRaceFilterPanel
          racesFilter={racesFilter}
          setRacesFilter={setRacesFilter}
        />
        <FiltersPanel
          name="Additional Filters"
          filters={["Armor", "Gun", "Sword", "Quest Item"]}
        />
      </div>
      <hr />
      <div className="flex flex-grow basis-0 flex-col gap-2 overflow-y-scroll p-2">
        {filteredItems.length === 0 && <NoMatchCard type="Item" />}
        {filteredItems.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </Tab.Panel>
  );
}
