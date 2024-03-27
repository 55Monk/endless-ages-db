import Panel from "../../Panel.tsx";
import { Misc, miscs } from "../../data/misc.tsx";
import useContentStore from "../../hooks/UseContentStore.tsx";
import Card from "../Card.tsx";
import { MiscCardTitle } from "./MiscCardTitle.tsx";

export default function MiscPanel() {
  const selectCard = useContentStore((state) => state.selectCard);
  const selectedCard = useContentStore((state) => state.selectedCard) as Misc;

  function hasNext() {
    const index = miscs.indexOf(selectedCard);
    return index < miscs.length - 1;
  }

  function next() {
    const index = miscs.indexOf(selectedCard);
    if (hasNext()) {
      selectCard(miscs[index + 1]);
    } else {
      selectCard(miscs[0]);
    }
  }

  function hasPrevious() {
    const index = miscs.indexOf(selectedCard);
    return index > 0;
  }

  function previous() {
    const index = miscs.indexOf(selectedCard);
    if (hasPrevious()) {
      selectCard(miscs[index - 1]);
    } else {
      selectCard(miscs[miscs.length - 1]);
    }
  }

  return (
    <Panel type="Misc">
      {miscs.map((misc) => (
        <Card
          key={misc.name}
          titleContent={<MiscCardTitle misc={misc} />}
          expand={{
            fullContent: misc.content,
            full: misc === selectedCard,
            select: () => selectCard(misc),
            close: () => selectCard(undefined),
            page: {
              hasNext: hasNext(),
              next: next,
              hasPrevious: hasPrevious(),
              previous: previous,
            },
          }}
        />
      ))}
    </Panel>
  );
}
