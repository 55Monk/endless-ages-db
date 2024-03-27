import { useCallback, useEffect, useMemo, useState } from "react";
import Panel from "../../Panel.tsx";
import { NPC, npcs } from "../../data/npcs/npcs.ts";
import { sortData } from "../../data/shared.ts";
import useContentStore from "../../hooks/UseContentStore.tsx";
import Card from "../Card.tsx";
import SearchBar from "../SearchBar.tsx";
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
  const selectedCard = useContentStore((state) => state.selectedCard) as NPC;
  const plotNpc = useContentStore((state) => state.plotNpc);

  const selectNpc = useCallback(
    (npc: NPC) => {
      selectCard(npc);
      plotNpc(npc);
    },
    [plotNpc, selectCard],
  );

  // Clear the selection if any filters change
  useEffect(() => selectCard(undefined), [searchValue, selectCard]);

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

  function hasNext() {
    const index = filteredNpcs.indexOf(selectedCard);
    return index < filteredNpcs.length - 1;
  }

  function next() {
    const index = filteredNpcs.indexOf(selectedCard);
    if (hasNext()) {
      selectNpc(filteredNpcs[index + 1]);
    } else {
      selectNpc(filteredNpcs[0]);
    }
  }

  function hasPrevious() {
    const index = filteredNpcs.indexOf(selectedCard);
    return index > 0;
  }

  function previous() {
    const index = filteredNpcs.indexOf(selectedCard);
    if (hasPrevious()) {
      selectNpc(filteredNpcs[index - 1]);
    } else {
      selectNpc(filteredNpcs[filteredNpcs.length - 1]);
    }
  }

  return (
    <Panel
      type="NPCs"
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
      {filteredNpcs.map((npc) => (
        <Card
          key={npc.name}
          titleContent={<NpcCardTitle npc={npc} />}
          expand={{
            fullContent: <div />,
            full: npc === selectedCard,
            select: () => selectNpc(npc),
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
