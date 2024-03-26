import { useCallback, useEffect, useState } from "react";
import Panel from "../../Panel.tsx";
import { Quest, quests } from "../../data/quests.ts";
import useContentStore from "../../hooks/UseContentStore.tsx";
import Card from "../Card.tsx";
import SearchBar from "../SearchBar.tsx";
import QuestCardContent from "./QuestCardContent.tsx";
import { QuestCardTitle } from "./QuestCardTitle.tsx";

export default function QuestPanel() {
  const [searchValue, setSearchValue] = useState<string>("");

  const selectCard = useContentStore((state) => state.selectCard);
  const selectedCard = useContentStore((state) => state.selectedCard) as Quest;
  const plotQuest = useContentStore((state) => state.plotQuest);

  const selectQuest = useCallback(
    (quest: Quest) => {
      selectCard(quest);
      plotQuest(quest);
    },
    [plotQuest, selectCard],
  );

  const deselectQuest = useCallback(() => {
    selectCard(undefined);
  }, [selectCard]);

  // Clear the selection if any filters change
  useEffect(() => deselectQuest, [deselectQuest, searchValue]);

  let filteredQuests = [...quests];

  // filter by search
  if (searchValue.length > 0) {
    filteredQuests = filteredQuests.filter((quest) =>
      quest.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }

  function hasNext() {
    if (!selectedCard) {
      return false;
    }
    const index = filteredQuests.indexOf(selectedCard);
    return index < filteredQuests.length - 1;
  }

  function next() {
    if (!selectedCard) {
      return;
    }
    const index = filteredQuests.indexOf(selectedCard);
    selectCard(filteredQuests[index + 1]);
  }

  function hasPrevious() {
    if (!selectedCard) {
      return false;
    }
    const index = filteredQuests.indexOf(selectedCard);
    return index > 0;
  }

  function previous() {
    if (!selectedCard) {
      return;
    }
    const index = filteredQuests.indexOf(selectedCard);
    selectCard(filteredQuests[index - 1]);
  }

  return (
    <Panel
      type="Quests"
      bars={
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      }
    >
      {filteredQuests.map((quest) => (
        <Card
          key={quest.name}
          titleContent={<QuestCardTitle quest={quest} />}
          expand={{
            fullContent: <QuestCardContent quest={quest} />,
            full: quest === selectedCard,
            select: () => selectQuest(quest),
            close: () => deselectQuest(),
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
