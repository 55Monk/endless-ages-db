import { Quest } from "../../data/quests";
import useContentStore from "../../hooks/UseContentStore";
import QuestStepCard from "./QuestStepCard";

type Props = {
  quest: Quest;
};

export default function QuestCard(props: Props) {
  const { quest } = props;

  const selectCard = useContentStore((state) => state.selectCard);
  const selectedCard = useContentStore((state) => state.selectedCard);
  const isSelectedQuest =
    selectedCard &&
    selectedCard.type === "Quest" &&
    selectedCard.name.toLowerCase() === quest.name.toLowerCase();

  // const markers = useMapContentStore((state) => state.markers);
  const plotQuest = useContentStore((state) => state.plotQuest);
  const clearMap = useContentStore((state) => state.clearMap);

  function selectQuest() {
    if (isSelectedQuest) {
      selectCard();
      clearMap();
    } else {
      selectCard({ type: "Quest", name: quest.name });
      plotQuest(quest);
    }
  }

  return (
    <div>
      <div
        className={`overflow-hidden rounded border border-neutral-300 ${
          isSelectedQuest
            ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-700"
            : ""
        }`}
      >
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
    </div>
  );
}
