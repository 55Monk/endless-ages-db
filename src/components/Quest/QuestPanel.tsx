import { Tab } from "@headlessui/react";
import { useCallback, useEffect, useState } from "react";
import { Quest, quests } from "../../data/quests.ts";
import useContentStore from "../../hooks/UseContentStore.tsx";
import Card from "../Card.tsx";
import NoMatchCard from "../NoMatchCard";
import SearchBar from "../SearchBar.tsx";
import QuestCardContent from "./QuestCardContent.tsx";
import { QuestCardTitle } from "./QuestCardTitle.tsx";

export default function QuestPanel() {
  const [searchValue, setSearchValue] = useState<string>("");

  const selectCard = useContentStore((state) => state.selectCard);
  const selectedCard = useContentStore((state) => state.selectedCard);
  const plotQuest = useContentStore((state) => state.plotQuest);

  const isSelectedQuest = useCallback(
    (quest: Quest) => {
      return !!(
        selectedCard &&
        selectedCard.type === "Quest" &&
        selectedCard.name.toLowerCase() === quest.name.toLowerCase()
      );
    },
    [selectedCard],
  );

  const selectQuest = useCallback(
    (quest: Quest) => {
      selectCard({ type: "Quest", name: quest.name });
      plotQuest(quest);
    },
    [plotQuest, selectCard],
  );

  const deselectQuest = useCallback(() => {
    selectCard();
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

  return (
    <Tab.Panel className="flex flex-grow flex-col">
      <div className="flex flex-col gap-1 px-2 pb-2">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <hr />
      <div className="relative flex flex-grow flex-col">
        <div className="flex flex-grow basis-0 flex-col gap-2 overflow-y-scroll bg-neutral-100 p-2">
          {filteredQuests.length === 0 && <NoMatchCard type="Quest" />}
          {filteredQuests.map((quest) => (
            <Card
              key={quest.name}
              titleContent={<QuestCardTitle quest={quest} />}
              expand={{
                fullContent: <QuestCardContent quest={quest} />,
                full: isSelectedQuest(quest),
                select: () => selectQuest(quest),
                close: () => deselectQuest(),
              }}
            />
          ))}
        </div>
      </div>
    </Tab.Panel>
  );
}
