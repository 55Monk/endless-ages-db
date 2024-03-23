import { Quest } from "../../data/quests";
import QuestStepCard from "./QuestStepCard";

type Props = {
  quest: Quest;
};

export default function QuestCardContent(props: Props) {
  const { quest } = props;

  return (
    <div className="flex flex-grow basis-0 flex-col gap-3 overflow-y-scroll pr-2">
      <div className="text-sm">{quest.preface}</div>
      {quest.steps.map((step, index) => (
        <QuestStepCard key={index} step={step} index={index} />
      ))}
    </div>
  );
}
