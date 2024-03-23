import { Tab } from "@headlessui/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { NPC, npcs } from "../../data/npcs/npcs.ts";
import { sortData } from "../../data/shared.ts";
import useContentStore from "../../hooks/UseContentStore.tsx";
import Card from "../Card.tsx";
import NoMatchCard from "../NoMatchCard.tsx";
import Search from "../Search.tsx";
import SortBar, { Sort, SortOption } from "../SortBar.tsx";
import { NpcCardTitle } from "./NpcCardTitle.tsx";

const sortOptions: SortOption[] = [
  {
    name: "Level",
    field: "level",
  },
  {
    name: "Name",
    field: "name",
  },
];

export default function NpcPanel() {
  const [searchValue, setSearchValue] = useState<string>("");

  const [sort, setSort] = useState<Sort>({
    name: "Level",
    field: "level",
    direction: "asc",
  });

  const selectCard = useContentStore((state) => state.selectCard);
  const selectedCard = useContentStore((state) => state.selectedCard);
  const plotNpc = useContentStore((state) => state.plotNpc);
  const clearMap = useContentStore((state) => state.clearMap);

  const isSelectedNpc = useCallback(
    (npc: NPC) => {
      return !!(
        selectedCard &&
        selectedCard.type === "NPC" &&
        selectedCard.name.toLowerCase() === npc.name.toLowerCase()
      );
    },
    [selectedCard],
  );

  const selectNpc = useCallback(
    (npc: NPC) => {
      selectCard({ type: "NPC", name: npc.name });
      plotNpc(npc);
    },
    [plotNpc, selectCard],
  );

  const deselectNpc = useCallback(() => {
    selectCard();
    clearMap();
  }, [clearMap, selectCard]);

  // Clear the selection if any filters change
  useEffect(() => deselectNpc, [deselectNpc, searchValue]);

  const filteredNpcs = useMemo(() => {
    // Filter npcs
    const filteredNpcs = npcs.filter((npc) => {
      return npc.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    // sort
    if (sort.direction !== "none") {
      filteredNpcs.sort((one, two) => sortData(one, two, sort));
    }
    return filteredNpcs;
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
          {filteredNpcs.length === 0 && <NoMatchCard type="Item" />}
          {filteredNpcs.map((npc) => (
            <Card
              key={npc.name}
              titleContent={<NpcCardTitle npc={npc} />}
              expand={{
                fullContent: <div />,
                full: isSelectedNpc(npc),
                select: () => selectNpc(npc),
                close: () => deselectNpc(),
              }}
            />
          ))}
        </div>
      </div>
    </Tab.Panel>
  );
}
