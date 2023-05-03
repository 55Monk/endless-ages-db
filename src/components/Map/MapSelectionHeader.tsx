import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import getMaps, { getMapMap } from "../../data/maps";

type Props = {
  selectedMap: string;
  selectMap: (map: string) => void;
};

export default function MapSelectionHeader(props: Props) {
  const { selectedMap, selectMap } = props;
  const selectedMapEntry = getMapMap()[selectedMap];

  return (
    <div className="absolute z-[999] flex w-full justify-center gap-2 p-2">
      <Listbox value={selectedMap} onChange={selectMap}>
        <div className="relative">
          <Listbox.Button className="relative w-96 cursor-default rounded-lg border border-neutral-300 bg-white py-1 pl-3 pr-10 text-left">
            <span className="block truncate">
              {selectedMapEntry?.displayName}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base sm:text-sm">
              {getMaps().map((mapEntry, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 text-neutral-900 ${
                      active ? "bg-blue-300" : ""
                    }`
                  }
                  value={mapEntry.name}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {mapEntry.displayName}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-700">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <button className="h-[33.5px] rounded-lg border border-neutral-300 bg-white px-2 py-1 hover:bg-neutral-100">
        Reset Map
      </button>
    </div>
  );
}
