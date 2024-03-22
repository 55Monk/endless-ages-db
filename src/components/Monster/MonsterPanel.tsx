import { Tab } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import get from "lodash-es/get";
import { useMemo, useState } from "react";
import getMonsters, { Monster } from "../../data/monsters.ts";
import Card from "../Card.tsx";
import NoMatchCard from "../NoMatchCard";
import SortPanel, { Option, Sort } from "../SortPanel.tsx";
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
  const [searchRef, setSearchRef] = useState<HTMLInputElement | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [sort, setSort] = useState<Sort>({
    name: "Level",
    field: "level",
    direction: "asc",
  });

  const [selected, setSelected] = useState<Monster>();

  const filteredMonsters = useMemo(() => {
    const filteredMonsters = monsters.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    // sort
    if (sort.direction !== "none") {
      filteredMonsters.sort((item1, item2) => {
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
    return filteredMonsters;
  }, [searchValue, sort]);

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
        <SortPanel options={sortOptions} sort={sort} setSort={setSort} />
      </div>
      <hr />
      <div className="flex flex-grow basis-0 flex-col gap-2 overflow-y-scroll bg-neutral-100 p-2">
        {filteredMonsters.length === 0 && <NoMatchCard type="Monster" />}
        {(selected ? [selected] : filteredMonsters).map((monster) => (
          <Card
            key={monster.name}
            titleContent={<MonsterCardTitle monster={monster} />}
            previewContent={<MonsterCardPreviewContent monster={monster} />}
            expand={{
              fullContent: <MonsterCardPreviewContent monster={monster} />,
              full: !!selected,
              select: () => setSelected(monster),
              close: () => setSelected(undefined),
            }}
          />
        ))}
      </div>
    </Tab.Panel>
  );
}
