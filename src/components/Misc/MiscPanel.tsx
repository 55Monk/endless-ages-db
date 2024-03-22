import { Tab } from "@headlessui/react";
import { useState } from "react";
import { Misc } from "../../data/misc.ts";
import getMiscs from "../../data/misc.tsx";
import Card from "../Card.tsx";
import NoMatchCard from "../NoMatchCard.tsx";

const miscs = getMiscs();

export default function MiscPanel() {
  const [selected, setSelected] = useState<Misc>();

  return (
    <Tab.Panel className="flex flex-grow flex-col">
      <div className="flex flex-col gap-1 px-2 pb-2"></div>
      <hr />
      <div className="flex flex-grow basis-0 flex-col gap-2 overflow-y-scroll bg-neutral-100 p-2">
        {miscs.length === 0 && <NoMatchCard type="Misc" />}
        {(selected ? [selected] : miscs).map((misc) => (
          <Card
            key={misc.name}
            titleContent={<strong>{misc.name}</strong>}
            previewContent={<div>{misc.description}</div>}
            expand={{
              fullContent: misc.content,
              full: !!selected,
              select: () => setSelected(misc),
              close: () => setSelected(undefined),
            }}
          />
        ))}
      </div>
    </Tab.Panel>
  );
}
