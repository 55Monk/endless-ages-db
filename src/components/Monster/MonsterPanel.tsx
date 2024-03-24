import { Tab } from "@headlessui/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Monster, monsters } from "../../data/monsters.ts";
import { sortData } from "../../data/shared.ts";
import useContentStore from "../../hooks/UseContentStore.tsx";
import Card from "../Card.tsx";
import NoMatchCard from "../NoMatchCard";
import Search from "../Search.tsx";
import SortBar, { Sort, SortOption } from "../SortBar.tsx";
import MonsterCardContent from "./MonsterCardContent.tsx";
import MonsterCardPreviewContent from "./MonsterCardPreviewContent.tsx";
import { MonsterCardTitle } from "./MonsterCardTitle.tsx";

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
    name: "DPS",
    field: "damage.dps",
  },
];

export default function MonsterPanel() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [sort, setSort] = useState<Sort>({
    name: "Level",
    field: "level",
    direction: "asc",
  });

  const selectCard = useContentStore((state) => state.selectCard);
  const selectedCard = useContentStore((state) => state.selectedCard);
  const plotMonster = useContentStore((state) => state.plotMonster);

  const isSelectedMonster = useCallback(
    (monster: Monster) => {
      return !!(
        selectedCard &&
        selectedCard.type === "Monster" &&
        selectedCard.name.toLowerCase() === monster.name.toLowerCase()
      );
    },
    [selectedCard],
  );

  const selectMonster = useCallback(
    (monster: Monster) => {
      selectCard({ type: "Monster", name: monster.name });
      plotMonster(monster);
    },
    [plotMonster, selectCard],
  );

  const deselect = useCallback(() => {
    selectCard();
  }, [selectCard]);

  // Clear the selection if any filters change
  useEffect(() => deselect, [deselect, searchValue]);

  const filteredMonsters = useMemo(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return [monster.name, monster.race]
        .join("|")
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });

    // sort
    if (sort.direction !== "none") {
      filteredMonsters.sort((one, two) => sortData(one, two, sort));
    }
    return filteredMonsters;
  }, [searchValue, sort]);

  return (
    <Tab.Panel className="flex flex-grow flex-col">
      <div className="flex flex-col gap-1 px-2 pb-2">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <SortBar options={sortOptions} sort={sort} setSort={setSort} />
      </div>
      <hr />
      <div className="relative flex flex-grow flex-col">
        <div className="flex flex-grow basis-0 flex-col gap-2 overflow-y-scroll bg-neutral-100 p-2">
          {filteredMonsters.length === 0 && <NoMatchCard type="Monster" />}
          {filteredMonsters.map((monster) => (
            <Card
              key={monster.name}
              titleContent={<MonsterCardTitle monster={monster} />}
              previewContent={<MonsterCardPreviewContent monster={monster} />}
              expand={{
                fullContent: <MonsterCardContent monster={monster} />,
                full: isSelectedMonster(monster),
                select: () => selectMonster(monster),
                close: deselect,
              }}
            />
          ))}
        </div>
      </div>
    </Tab.Panel>
  );
}
