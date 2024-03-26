import Panel from "../../Panel.tsx";
import { Misc, miscs } from "../../data/misc.tsx";
import useContentStore from "../../hooks/UseContentStore.tsx";
import Card from "../Card.tsx";
import { MiscCardTitle } from "./MiscCardTitle.tsx";

export default function MiscPanel() {
  const selectCard = useContentStore((state) => state.selectCard);
  const selectedCard = useContentStore((state) => state.selectedCard) as Misc;

  function hasNext() {
    if (!selectedCard) {
      return false;
    }
    const index = miscs.indexOf(selectedCard);
    return index < miscs.length - 1;
  }

  function next() {
    if (!selectedCard) {
      return;
    }
    const index = miscs.indexOf(selectedCard);
    selectCard(miscs[index + 1]);
  }

  function hasPrevious() {
    if (!selectedCard) {
      return false;
    }
    const index = miscs.indexOf(selectedCard);
    return index > 0;
  }

  function previous() {
    if (!selectedCard) {
      return;
    }
    const index = miscs.indexOf(selectedCard);
    selectCard(miscs[index - 1]);
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
