import { Tab } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import getQuestMap from "../../data/quests";
import QuestCard from "./QuestCard";

export default function QuestPanel() {
  const [selectedQuest, setSelectedQuest] = useState<string>();

  const quests = Object.values(getQuestMap());

  const [searchRef, setSearchRef] = useState<HTMLInputElement | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");

  let filteredQuests = [...quests];
  // filter by search
  if (searchValue.length > 0) {
    filteredQuests = filteredQuests.filter((quest) =>
      quest.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  return (
    <Tab.Panel className="flex max-w-sm flex-grow flex-col gap-1">
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
      <hr className="my-2" />
      <div className="flex flex-grow basis-0 flex-col gap-2 overflow-y-scroll">
        {filteredQuests.length === 0 && (
          <div className="rounded-md border-2 border-dotted border-neutral-300 p-6 text-center align-middle text-neutral-400">
            No Quests Match Criteria
          </div>
        )}
        {filteredQuests.map((quest) => (
          <QuestCard
            key={quest.name}
            quest={quest}
            selectedQuest={selectedQuest}
            setSelectedQuest={setSelectedQuest}
          />
        ))}
      </div>
    </Tab.Panel>
  );
}
