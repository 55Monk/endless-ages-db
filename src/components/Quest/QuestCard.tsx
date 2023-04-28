import { Quest } from "../../data/quests";
import { useContentStore } from "../WebsiteContent";
import QuestStepCard from "./QuestStepCard";

type Props = {
  quest: Quest;
  selectedQuest: string | undefined;
  setSelectedQuest: any;
};

export default function QuestCard(props: Props) {
  const { quest, selectedQuest, setSelectedQuest } = props;

  const isSelectedQuest =
    !!selectedQuest && selectedQuest.toLowerCase() === quest.name.toLowerCase();

  // const markers = useMapContentStore((state) => state.markers);
  const plotQuest = useContentStore((state) => state.plotQuest);
  const clearMap = useContentStore((state) => state.clearMap);

  function selectQuest() {
    if (isSelectedQuest) {
      setSelectedQuest();
      clearMap();
    } else {
      setSelectedQuest(quest.name);
      plotQuest(quest);
    }
  }

  return (
    <div className="overflow-hidden rounded border border-neutral-300">
      <div
        className="flex cursor-pointer items-center gap-2 p-1 hover:bg-neutral-100"
        onClick={selectQuest}
      >
        <div className="flex-grow">
          <div className="flex items-center gap-4">
            <strong>{quest.name}</strong>
          </div>
          <div className="text-sm">{quest.shortDesc ?? "&#xfeff;"}</div>
        </div>
      </div>
      {isSelectedQuest && (
        <div className="flex flex-col gap-3 p-2">
          <div className="text-sm">{quest.preface}</div>
          {quest.steps.map((step, index) => (
            <QuestStepCard key={index} step={step} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
