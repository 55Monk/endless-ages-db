import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Dispatch, SetStateAction, useState } from "react";
import { Tag } from "../../data/items/items.ts";

type TagDisplay = {
  tag: Tag;
  display: string;
};

type FilterRowProps = {
  primary: TagDisplay;
  sub?: TagDisplay[];
  selected: Tag[];
  setSelected: Dispatch<SetStateAction<Tag[]>>;
};

function FilterRow(props: FilterRowProps) {
  const { primary, sub, selected, setSelected } = props;

  const primarySelected = selected.includes(primary.tag);

  return (
    <span className="flex items-center gap-2 text-sm">
      <span>
        <input
          type="checkbox"
          name={primary.tag}
          checked={primarySelected}
          onChange={(e) => {
            let newSelected = [...selected];
            if (e.target.checked) {
              newSelected.push(primary.tag);
            } else {
              newSelected = newSelected.filter((t) => t !== primary.tag);
            }
            setSelected(newSelected);
          }}
        />
        <label htmlFor={primary.tag}>&nbsp;{primary.display}</label>
      </span>
      {sub && (
        <span className="flex flex-grow items-center justify-between gap-1 rounded border border-neutral-300 p-1 text-xs leading-none">
          {sub.map((tag) => (
            <span key={tag.tag}>
              <input
                type="checkbox"
                name={tag.tag}
                disabled={primarySelected}
                checked={selected.includes(tag.tag)}
                onChange={(e) => {
                  let newSelected = [...selected];
                  if (e.target.checked) {
                    newSelected.push(tag.tag);
                  } else {
                    newSelected = newSelected.filter((t) => t !== tag.tag);
                  }
                  setSelected(newSelected);
                }}
              />
              <label
                htmlFor={tag.tag}
                className={
                  primarySelected ? "text-neutral-400" : "text-neutral-950"
                }
              >
                &nbsp;{tag.display}
              </label>
            </span>
          ))}
        </span>
      )}
    </span>
  );
}

type Props = {
  additionalFilters: Tag[];
  setAdditionalFilters: Dispatch<SetStateAction<Tag[]>>;
  allPrimaryTags: Tag[];
};

export default function AdditionalFiltersItemPanel(props: Props) {
  const { additionalFilters, setAdditionalFilters, allPrimaryTags } = props;

  const [allChecked, setAllChecked] = useState(true);

  return (
    <div className="overflow-hidden rounded border border-neutral-300">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between px-2 py-1 hover:bg-neutral-100 focus:outline-none has-[input:hover]:bg-white">
              <span>Additional Filters</span>
              <span>
                <input
                  type="checkbox"
                  name="all"
                  checked={allChecked}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAllChecked(true);
                      setAdditionalFilters(allPrimaryTags);
                    } else {
                      setAllChecked(false);
                      setAdditionalFilters([]);
                    }
                  }}
                />
                <label htmlFor="all">&nbsp;All/None</label>
              </span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-neutral-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="flex flex-col gap-1 border-t border-neutral-300 px-2 py-1">
              <FilterRow
                primary={{ tag: "ARMOR", display: "Armor" }}
                sub={[
                  { tag: "HEAD/FEET", display: "Head/Feet" },
                  { tag: "BODY", display: "Body" },
                  { tag: "LEGS", display: "Legs" },
                  { tag: "HANDS", display: "Hands/Arms" },
                ]}
                selected={additionalFilters}
                setSelected={setAdditionalFilters}
              />
              <FilterRow
                primary={{ tag: "ACCESSORY", display: "Acc" }}
                sub={[
                  { tag: "RING", display: "Ring" },
                  { tag: "AMULET", display: "Amulet" },
                  { tag: "BADGE", display: "Badge" },
                  { tag: "MISCACCESSORY", display: "Misc" },
                  { tag: "COSMETIC", display: "Cosmetic" },
                ]}
                selected={additionalFilters}
                setSelected={setAdditionalFilters}
              />
              <FilterRow
                primary={{ tag: "PILOT", display: "Pilot" }}
                sub={[
                  { tag: "JETPACK", display: "Jetpack" },
                  { tag: "FAMILIAR", display: "Familiar" },
                  { tag: "VEHICLE", display: "Vehicle" },
                ]}
                selected={additionalFilters}
                setSelected={setAdditionalFilters}
              />
              <FilterRow
                primary={{ tag: "MAGIC", display: "Magic" }}
                sub={[
                  { tag: "DIRECTDAMAGEONLYSPELL", display: "Dir Dmg" },
                  { tag: "AOEDAMAGEONLYSPELL", display: "AoE Dmg" },
                  { tag: "BOTHDAMAGESPELL", display: "Both Dmg" },
                  { tag: "HEALSPELL", display: "Heal" },
                  { tag: "UTILITYSPELL", display: "Util" },
                ]}
                selected={additionalFilters}
                setSelected={setAdditionalFilters}
              />
              <FilterRow
                primary={{ tag: "GUN", display: "Gun" }}
                sub={[
                  { tag: "DIRECTDAMAGEONLYGUN", display: "Dir Dmg" },
                  { tag: "AOEDAMAGEONLYGUN", display: "AoE Dmg" },
                  { tag: "BOTHDAMAGEGUN", display: "Both Dmg" },
                  { tag: "UTILITYGUN", display: "Util" },
                ]}
                selected={additionalFilters}
                setSelected={setAdditionalFilters}
              />
              <span className="grid flex-grow grid-flow-col grid-cols-3 grid-rows-3 gap-1">
                <FilterRow
                  primary={{ tag: "MELEE", display: "Melee" }}
                  selected={additionalFilters}
                  setSelected={setAdditionalFilters}
                />
                <FilterRow
                  primary={{ tag: "SS", display: "SS Orb" }}
                  selected={additionalFilters}
                  setSelected={setAdditionalFilters}
                />
                <FilterRow
                  primary={{ tag: "POTION", display: "Potion" }}
                  selected={additionalFilters}
                  setSelected={setAdditionalFilters}
                />
                <FilterRow
                  primary={{ tag: "ALCH", display: "Alchemy" }}
                  selected={additionalFilters}
                  setSelected={setAdditionalFilters}
                />
                <FilterRow
                  primary={{ tag: "ENG", display: "Engineering" }}
                  selected={additionalFilters}
                  setSelected={setAdditionalFilters}
                />
                <FilterRow
                  primary={{ tag: "SMITH", display: "Smithing" }}
                  selected={additionalFilters}
                  setSelected={setAdditionalFilters}
                />
                <FilterRow
                  primary={{ tag: "QI", display: "Quest Item" }}
                  selected={additionalFilters}
                  setSelected={setAdditionalFilters}
                />
                <FilterRow
                  primary={{ tag: "JUNK", display: "Junk" }}
                  selected={additionalFilters}
                  setSelected={setAdditionalFilters}
                />
              </span>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
