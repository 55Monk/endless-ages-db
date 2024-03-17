import { Tab } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import get from "lodash-es/get";
import intersection from "lodash-es/intersection";
import { useState } from "react";
import getItems, { Race, Tag, races } from "../../data/items/items";
import NoMatchCard from "../NoMatchCard";
import AdditionalFiltersItemPanel from "./AdditionalFiltersItemPanel.tsx";
import ItemCard from "./ItemCard";
import ItemRaceFilterPanel, { Filters } from "./ItemRaceFilterPanel";
import ItemSortPanel, { Sort } from "./ItemSortPanel.tsx";

const allPrimaryTags: Tag[] = [
  "ARMOR",
  "ACCESSORY",
  "PILOT",
  "MAGIC",
  "GUN",
  "MELEE",
  "SS",
  "POTION",
  "ALCH",
  "ENG",
  "SMITH",
  "QI",
  "JUNK",
];

const items = getItems();

export default function ItemPanel() {
  const [searchRef, setSearchRef] = useState<HTMLInputElement | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");

  const initialRacesFilter: Partial<Filters<Race>> = {};
  races.forEach((race) => (initialRacesFilter[race] = true));
  const [racesFilter, setRacesFilter] = useState<Filters<Race>>(
    initialRacesFilter as Filters<Race>,
  );
  const [additionalFilters, setAdditionalFilters] =
    useState<Tag[]>(allPrimaryTags);

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

  filteredItems = filteredItems.filter(
    (item) => intersection(item.tags, additionalFilters).length > 0,
  );

  const [sort, setSort] = useState<Sort>({
    name: "Level",
    field: "level",
    direction: "asc",
  });

  // sort
  if (sort.direction !== "none") {
    filteredItems.sort((item1, item2) => {
      const v1 = get(item1, sort.field);
      const v2 = get(item2, sort.field);

      // equal
      if (v1 === v2) {
        return 0;
      }

      // nulls last
      if (v1 === undefined) {
        return 1;
      }
      if (v2 === undefined) {
        return -1;
      }

      // sort normally
      let comp = v1 < v2 ? -1 : 1;
      if (sort.direction === "desc") {
        comp *= -1;
      }
      return comp;
    });
  }

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
        <AdditionalFiltersItemPanel
          additionalFilters={additionalFilters}
          setAdditionalFilters={setAdditionalFilters}
          allPrimaryTags={allPrimaryTags}
        />
        <ItemSortPanel sort={sort} setSort={setSort} />
      </div>
      <hr />
      <div className="flex flex-grow basis-0 flex-col gap-2 overflow-y-scroll bg-neutral-100 p-2">
        {filteredItems.length === 0 && <NoMatchCard type="Item" />}
        {filteredItems.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </Tab.Panel>
  );
}
