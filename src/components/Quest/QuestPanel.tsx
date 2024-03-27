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

  // Clear the selection if any filters change
  useEffect(() => selectCard(undefined), [searchValue, selectCard]);

  let filteredQuests = [...quests];

  // filter by search
  if (searchValue.length > 0) {
    filteredQuests = filteredQuests.filter((quest) =>
      quest.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }

  function hasNext() {
    const index = filteredQuests.indexOf(selectedCard);
    return index < filteredQuests.length - 1;
  }

  function next() {
    const index = filteredQuests.indexOf(selectedCard);
    if (hasNext()) {
      selectQuest(filteredQuests[index + 1]);
    } else {
      selectQuest(filteredQuests[0]);
    }
  }

  function hasPrevious() {
    const index = filteredQuests.indexOf(selectedCard);
    return index > 0;
  }

  function previous() {
    const index = filteredQuests.indexOf(selectedCard);
    if (hasPrevious()) {
      selectQuest(filteredQuests[index - 1]);
    } else {
      selectQuest(filteredQuests[filteredQuests.length - 1]);
    }
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
