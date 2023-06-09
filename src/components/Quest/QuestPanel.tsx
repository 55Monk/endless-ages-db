import { Tab } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import getQuestMap from "../../data/quests";
import NoMatchCard from "../NoMatchCard";
import QuestCard from "./QuestCard";

const quests = Object.values(getQuestMap());

export default function QuestPanel() {
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
