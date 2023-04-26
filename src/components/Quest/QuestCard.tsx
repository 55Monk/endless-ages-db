import { BarsArrowDownIcon } from "@heroicons/react/20/solid";

export type QuestStep = {
  npcName: string;
  action: string;
};

export type Quest = {
  name: string;
  shortDesc: string;
  steps: QuestStep[];
};

type Props = {
  quest: Quest;
  selectedQuest: string | undefined;
  setSelectedQuest: any;
};

export default function QuestCard(props: Props) {
  const { quest, selectedQuest, setSelectedQuest } = props;

  const isSelectedQuest =
    !!selectedQuest && selectedQuest.toLowerCase() === quest.name.toLowerCase();

  return (
    <div className="flex flex-col gap-1 rounded border border-neutral-300 p-1">
      <div className="flex items-center gap-2">
        <div className="flex-grow">
          <div className="flex items-center gap-4">
            <strong className="text-sm leading-none">{quest.name}</strong>
          </div>
          <div className="text-xs">{quest.shortDesc ?? "&#xfeff;"}</div>
        </div>
        <button
          className="rounded-full p-1 hover:bg-neutral-100"
          onClick={() => setSelectedQuest(quest.name)}
        >
          <BarsArrowDownIcon className="h-5 w-5" />
        </button>
      </div>
      {isSelectedQuest &&
        quest.steps.map((step, index) => (
          <div key={index}>
            {step.action} {step.npcName}
          </div>
        ))}
    </div>
  );
}
