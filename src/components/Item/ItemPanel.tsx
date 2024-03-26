import intersection from "lodash-es/intersection";
import { Fragment, useEffect, useMemo, useState } from "react";
import Panel from "../../Panel.tsx";
import { Item, Tag, items } from "../../data/items/items";
import { Race, races, sortData } from "../../data/shared";
import useContentStore from "../../hooks/UseContentStore.tsx";
import Card from "../Card.tsx";
import SearchBar from "../SearchBar.tsx";
import SortBar, { Sort, SortOption } from "../SortBar.tsx";
import ItemCardContent from "./ItemCardContent.tsx";
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

const sortOptions: SortOption[] = [
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

  const selectCard = useContentStore((state) => state.selectCard);
  const selectedCard = useContentStore((state) => state.selectedCard) as Item;

  useEffect(() => {
    selectCard(undefined);
  }, [searchValue, racesFilter, tagsFilter, selectCard]);

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
      filteredItems.sort((one, two) => sortData(one, two, sort));
    }
    return filteredItems;
  }, [tagsFilter, racesFilter, searchValue, sort]);

  function hasNext() {
    if (!selectedCard) {
      return false;
    }
    const index = filteredItems.indexOf(selectedCard);
    return index < filteredItems.length - 1;
  }

  function next() {
    if (!selectedCard) {
      return;
    }
    const index = filteredItems.indexOf(selectedCard);
    selectCard(filteredItems[index + 1]);
  }

  function hasPrevious() {
    if (!selectedCard) {
      return false;
    }
    const index = filteredItems.indexOf(selectedCard);
    return index > 0;
  }

  function previous() {
    if (!selectedCard) {
      return;
    }
    const index = filteredItems.indexOf(selectedCard);
    selectCard(filteredItems[index - 1]);
  }

  return (
    <Panel
      type="Items"
      bars={
        <Fragment>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
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
        </Fragment>
      }
    >
      {filteredItems.map((item) => (
        <Card
          key={item.name}
          titleContent={<ItemCardTitle item={item} />}
          previewContent={<ItemCardPreviewContent item={item} />}
          expand={{
            fullContent: <ItemCardContent item={item} />,
            full: item === selectedCard,
            select: () => selectCard(item),
            close: () => selectCard(undefined),
            page: {
              hasNext: hasNext(),
              next: next,
              hasPrevious: hasPrevious(),
              previous: previous,
            },
          }}
        />
      ))}
    </Panel>
  );
}
