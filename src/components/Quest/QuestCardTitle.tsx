import { Quest } from "../../data/quests.ts";

type Props = {
  quest: Quest;
};

export function QuestCardTitle(props: Props) {
  const { quest } = props;

  return (
    <div>
      <strong className="leading-none">{quest.name}</strong>
      <div className="text-xs">{quest.shortDesc}</div>
    </div>
  );
}
