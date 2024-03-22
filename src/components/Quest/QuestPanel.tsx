import { Tab } from "@headlessui/react";
import { useState } from "react";
import getQuestMap from "../../data/quests";
import NoMatchCard from "../NoMatchCard";
import Search from "../Search.tsx";
import QuestCard from "./QuestCard";

const quests = Object.values(getQuestMap());

export default function QuestPanel() {
  const [searchValue, setSearchValue] = useState<string>("");

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
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <hr />
      <div className="flex flex-grow basis-0 flex-col gap-2 overflow-y-scroll p-2">
        {filteredQuests.length === 0 && <NoMatchCard type="Quest" />}
        {filteredQuests.map((quest) => (
          <QuestCard key={quest.name} quest={quest} />
        ))}
      </div>
    </Tab.Panel>
  );
}
