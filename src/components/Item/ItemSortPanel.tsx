import { Listbox, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";
import { Dispatch, Fragment, SetStateAction, useState } from "react";

type Option = {
  name: string;
  field: string;
};

const options: Option[] = [
  {
    name: "Level",
    field: "level",
  },
  {
    name: "Name",
    field: "name",
  },
  {
    name: "DPS",
    field: "damage.dps",
  },
  {
    name: "Strength Requirement",
    field: "requirements.STR",
  },
  {
    name: "Dexterity Requirement",
    field: "requirements.DEX",
  },
  {
    name: "Wisdom Requirement",
    field: "requirements.WIS",
  },
];

type SortDirection = "asc" | "desc" | "none";

export type Sort = Option & { direction: SortDirection };

type Props = {
  sort: Sort;
  setSort: Dispatch<SetStateAction<Sort>>;
};

export default function ItemSortPanel(props: Props) {
  const { sort, setSort } = props;

  const [selected, setSelected] = useState(options[0]);

  function setSelectedAndUpdateSort(option: Option) {
    setSelected(option);
    const newSort = { ...sort };
    newSort.name = option.name;
    newSort.field = option.field;
    setSort(newSort);
  }

  function changeSortDirection() {
    const newSort = { ...sort };
    const sortDir = newSort.direction;
    if (sortDir === "none") {
      newSort.direction = "asc";
    } else if (sortDir === "asc") {
      newSort.direction = "desc";
    } else if (sortDir === "desc") {
      newSort.direction = "none";
    }
    setSort(newSort);
  }

  return (
    <div className="flex items-center gap-2 rounded border border-neutral-300 px-2 py-1">
      <span>Sort By</span>
      <span className="flex-grow">
        <Listbox value={selected} onChange={setSelectedAndUpdateSort}>
          <Listbox.Button className="relative w-full rounded border border-neutral-300 pl-1 pr-10 text-left ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-700 hover:bg-neutral-100 focus:outline-none focus:ring-2">
            <span className="truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
              <ChevronUpDownIcon className="h-5 w-5 text-neutral-500" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute overflow-auto rounded border border-neutral-300 bg-white py-1">
              {options.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none pl-10 pr-4 ${
                      active ? "bg-blue-100 text-blue-800" : "text-neutral-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </span>
      <button
        onClick={changeSortDirection}
        className="rounded ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-700 hover:bg-neutral-100 focus:outline-none focus:ring-2"
      >
        {sort.direction === "none" && <Bars3Icon className="m-1 h-5 w-5" />}
        {sort.direction === "asc" && (
          <BarsArrowUpIcon className="m-1 h-5 w-5" />
        )}
        {sort.direction === "desc" && (
          <BarsArrowDownIcon className="m-1 h-5 w-5" />
        )}
      </button>
    </div>
  );
}
