import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

type Props = {
  name: string;
  filters: string[];
};

export default function FiltersPanel(props: Props) {
  const { name, filters } = props;

  type SelectedFilters = {
    [x: string]: boolean;
  };

  const defaultFilters: SelectedFilters = {};
  filters.forEach((filter) => (defaultFilters[filter] = true));
  const [selectedFilters, setSelectedFilters] =
    useState<SelectedFilters>(defaultFilters);

  return (
    <div className="overflow-hidden rounded border border-neutral-300">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between px-2 py-1 hover:bg-neutral-100 focus:outline-none">
              <span>{name}</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-neutral-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="flex flex-col gap-1 border-t border-neutral-300 px-2 py-1">
              {filters.map((filter) => (
                <div key={filter}>
                  <input
                    type="checkbox"
                    name={filter}
                    checked={selectedFilters[filter] || false}
                    onChange={(e) => {
                      const newSelectedFilters = { ...selectedFilters };
                      newSelectedFilters[filter] = e.target.checked;
                      setSelectedFilters(newSelectedFilters);
                    }}
                  />
                  <label htmlFor={filter}> {filter}</label>
                </div>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
