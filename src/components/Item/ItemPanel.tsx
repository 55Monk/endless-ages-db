import { Tab } from "@headlessui/react";
import get from "lodash-es/get";
import intersection from "lodash-es/intersection";
import { useMemo, useState } from "react";
import getItems, { Item, Tag } from "../../data/items/items";
import { Race, races } from "../../data/shared";
import Card from "../Card.tsx";
import NoMatchCard from "../NoMatchCard";
import Search from "../Search.tsx";
import SortBar, { Option, Sort } from "../SortBar.tsx";
import ItemCardPreviewContent from "./ItemCardPreviewContent.tsx";
import { ItemCardTitle } from "./ItemCardTitle.tsx";
import ItemRaceFilterBar, { Filters } from "./ItemRaceFilterBar.tsx";
import ItemTagFilterBar from "./ItemTagFilterBar.tsx";

const initialRacesFilter: Partial<Filters<Race>> = {};
races.forEach((race) => (initialRacesFilter[race] = true));

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

const sortOptions: Option[] = [
  {
    name: "Level",
    field: "level",
  },
  {
    name: "Name",
    field: "name",
  },
  {
    name: "Price",
    field: "marketCost",
  },
  {
    name: "DPS",
    field: "damage.dps",
  },
  {
    name: "Strength Requirement",
    field: "requirements.STR",
  },
  {
    name: "Dexterity Requirement",
    field: "requirements.DEX",
  },
  {
    name: "Wisdom Requirement",
    field: "requirements.WIS",
  },
];

const items = getItems();

export default function ItemPanel() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [racesFilter, setRacesFilter] = useState<Filters<Race>>(
    initialRacesFilter as Filters<Race>,
  );
  const [tagsFilter, setTagsFilter] = useState<Tag[]>(allPrimaryTags);
  const [sort, setSort] = useState<Sort>({
    name: "Level",
    field: "level",
    direction: "asc",
  });

  const [selected, setSelected] = useState<Item>();

  const filteredItems = useMemo(() => {
    const toKeepRaces = Object.entries(racesFilter)
      .filter(([, keep]) => keep)
      .map(([race]) => race);

    // Filter items
    const filteredItems = items.filter((item) => {
      const keepRace =
        (!item.race && toKeepRaces.includes("Other")) ||
        toKeepRaces.includes(item.race || "");
      if (!keepRace) {
        return false;
      }
      const keepSearch = item.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      if (!keepSearch) {
        return false;
      }
      return intersection(item.tags, tagsFilter).length > 0;
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
    return filteredItems;
  }, [tagsFilter, racesFilter, searchValue, sort]);

  return (
    <Tab.Panel className="flex flex-grow flex-col">
      <div className="flex flex-col gap-1 px-2 pb-2">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <ItemRaceFilterBar
          racesFilter={racesFilter}
          setRacesFilter={setRacesFilter}
        />
        <ItemTagFilterBar
          additionalFilters={tagsFilter}
          setAdditionalFilters={setTagsFilter}
          allPrimaryTags={allPrimaryTags}
        />
        <SortBar options={sortOptions} sort={sort} setSort={setSort} />
      </div>
      <hr />
      <div className="relative flex flex-grow flex-col">
        <div className="flex flex-grow basis-0 flex-col gap-2 overflow-y-scroll bg-neutral-100 p-2">
          {filteredItems.length === 0 && <NoMatchCard type="Item" />}
          {filteredItems.map((item) => (
            <Card
              key={item.name}
              titleContent={<ItemCardTitle item={item} />}
              previewContent={<ItemCardPreviewContent item={item} />}
              expand={{
                fullContent: <ItemCardPreviewContent item={item} />,
                full: item === selected,
                select: () => setSelected(item),
                close: () => setSelected(undefined),
              }}
            />
          ))}
        </div>
      </div>
    </Tab.Panel>
  );
}
