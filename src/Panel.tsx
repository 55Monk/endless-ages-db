import { Tab } from "@headlessui/react";
import { Children, ReactNode } from "react";
import NoMatchCard from "./components/NoMatchCard.tsx";

type Props = {
  children: ReactNode;
  bars?: ReactNode;
  type: string;
};

export default function Panel(props: Props) {
  const { children, bars, type } = props;

  return (
    <Tab.Panel className="flex flex-grow flex-col">
      <div className="flex flex-col gap-1 px-2 pb-2">{bars}</div>
      <hr />
      <div className="relative flex flex-grow flex-col">
        <div className="flex flex-grow basis-0 flex-col gap-2 overflow-y-scroll bg-neutral-100 p-2">
          {Children.count(children) === 0 && <NoMatchCard type={type} />}
          {children}
        </div>
      </div>
    </Tab.Panel>
  );
}
