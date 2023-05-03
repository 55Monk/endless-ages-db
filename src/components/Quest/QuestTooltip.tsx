import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { Quest } from "../../data/quests";

import useContentStore from "../../hooks/UseContentStore";

type Props = {
  quest: Quest;
};

export default function QuestTooltip(props: Props) {
  const { quest } = props;

  const selectTab = useContentStore((state) => state.selectTab);

  function onClickGoTo() {
    selectTab("quest");
  }

  return (
    <div className="flex items-center gap-4 overflow-hidden rounded border border-neutral-300 bg-white p-2">
      <div>
        <strong>{quest.name}</strong>
        <div className="text-sm">{quest.shortDesc ?? "&#xfeff;"}</div>
      </div>
      <ArrowTopRightOnSquareIcon
        className="h-7 w-7 cursor-pointer rounded-full p-1 hover:bg-neutral-100"
        onClick={onClickGoTo}
      />
    </div>
  );
}
