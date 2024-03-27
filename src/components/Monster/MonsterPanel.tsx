import { useCallback, useEffect, useMemo, useState } from "react";
import Panel from "../../Panel.tsx";
import { Monster, monsters } from "../../data/monsters.ts";
import { sortData } from "../../data/shared.ts";
import useContentStore from "../../hooks/UseContentStore.tsx";
import Card from "../Card.tsx";
import SearchBar from "../SearchBar.tsx";
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
  {
    name: "Credits",
    field: "loot.creditRange[1]",
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
  const selectedCard = useContentStore(
    (state) => state.selectedCard,
  ) as Monster;
  const plotMonster = useContentStore((state) => state.plotMonster);

  const selectMonster = useCallback(
    (monster: Monster) => {
      selectCard(monster);
      plotMonster(monster);
    },
    [plotMonster, selectCard],
  );

  // Clear the selection if any filters change
  useEffect(() => selectCard(undefined), [searchValue, selectCard]);

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

  function hasNext() {
    if (!selectedCard) {
      return false;
    }
    const index = filteredMonsters.indexOf(selectedCard);
    return index < filteredMonsters.length - 1;
  }

  function next() {
    if (!selectedCard) {
      return;
    }
    const index = filteredMonsters.indexOf(selectedCard);
    selectCard(filteredMonsters[index + 1]);
  }

  function hasPrevious() {
    if (!selectedCard) {
      return false;
    }
    const index = filteredMonsters.indexOf(selectedCard);
    return index > 0;
  }

  function previous() {
    if (!selectedCard) {
      return;
    }
    const index = filteredMonsters.indexOf(selectedCard);
    selectCard(filteredMonsters[index - 1]);
  }

  return (
    <Panel
      type="Monsters"
      bars={
        <>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <SortBar options={sortOptions} sort={sort} setSort={setSort} />
        </>
      }
    >
      {filteredMonsters.map((monster) => (
        <Card
          key={monster.name}
          titleContent={<MonsterCardTitle monster={monster} />}
          previewContent={<MonsterCardPreviewContent monster={monster} />}
          expand={{
            fullContent: <MonsterCardContent monster={monster} />,
            full: monster === selectedCard,
            select: () => selectMonster(monster),
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
