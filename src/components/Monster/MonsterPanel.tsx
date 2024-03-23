import { Tab } from "@headlessui/react";
import get from "lodash-es/get";
import { useEffect, useMemo, useState } from "react";
import getMonsters, { Monster } from "../../data/monsters.ts";
import Card from "../Card.tsx";
import NoMatchCard from "../NoMatchCard";
import Search from "../Search.tsx";
import SortBar, { Option, Sort } from "../SortBar.tsx";
import MonsterCardPreviewContent from "./MonsterCardPreviewContent.tsx";
import { MonsterCardTitle } from "./MonsterCardTitle.tsx";

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
    name: "DPS",
    field: "damage.dps",
  },
];

const monsters = getMonsters();

export default function MonsterPanel() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [sort, setSort] = useState<Sort>({
    name: "Level",
    field: "level",
    direction: "asc",
  });

  const [selected, setSelected] = useState<Monster>();

  useEffect(() => {
    setSelected(undefined);
  }, [searchValue]);

  const filteredMonsters = useMemo(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return [monster.name, monster.race]
        .join("|")
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });

    // sort
    if (sort.direction !== "none") {
      filteredMonsters.sort((monster1, monster2) => {
        const v1 = get(monster1, sort.field);
        const v2 = get(monster2, sort.field);

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
                fullContent: <MonsterCardPreviewContent monster={monster} />,
                full: monster === selected,
                select: () => setSelected(monster),
                close: () => setSelected(undefined),
              }}
            />
          ))}
        </div>
      </div>
    </Tab.Panel>
  );
}
