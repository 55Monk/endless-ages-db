import { Misc } from "../../data/misc.tsx";

type Props = {
  misc: Misc;
};

export function MiscCardTitle(props: Props) {
  const { misc } = props;

  return (
    <div>
      <strong className="leading-none">{misc.name}</strong>
      <div className="text-xs">{misc.description}</div>
    </div>
  );
}
