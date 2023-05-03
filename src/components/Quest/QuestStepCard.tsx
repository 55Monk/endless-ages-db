import { ChangeEvent, useState } from "react";
import getNpcMap from "../../data/npcs";
import { QuestStep } from "../../data/quests";
import useContentStore from "../../hooks/UseContentStore";

type Props = {
  step: QuestStep;
  index: number;
};

export default function QuestStepCard(props: Props) {
  const { step, index } = props;

  const [complete, setComplete] = useState(false);

  const setMarkerComplete = useContentStore((state) => state.setMarkerComplete);

  const npcs = getNpcMap();
  const stepAction = npcs[step.npcName]?.actions?.[step.action];

  function onStepCheckChange(event: ChangeEvent<HTMLInputElement>) {
    setComplete(event.target.checked);
    setMarkerComplete(index, event.target.checked);
  }

  return (
    <div className="g-1 flex flex-col">
      <div className="flex justify-between">
        {stepAction?.interaction} {step.npcName}
        <input
          type="checkbox"
          checked={complete}
          onChange={onStepCheckChange}
        />
      </div>
      <div className="pl-3">
        {stepAction?.requires?.map(([item, quantity], index) => (
          <div key={index} className="flex text-red-600">
            <pre>
              -{quantity}
              {quantity.toString().length < 2 ? "  " : " "}
            </pre>
            <strong className="text-emerald-600">{item}</strong>
          </div>
        ))}
        {stepAction?.gives?.map(([item, quantity], index) => (
          <div key={index} className="flex text-green-600">
            <pre>
              +{quantity}
              {quantity.toString().length < 2 ? "  " : " "}
            </pre>
            <strong className="text-emerald-600">{item}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
