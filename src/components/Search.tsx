import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export default function Search(props: Props) {
  const { searchValue, setSearchValue } = props;

  const [searchRef, setSearchRef] = useState<HTMLInputElement | null>(null);

  return (
    <div className="flex w-full items-center gap-2 rounded border border-neutral-300 px-2 py-1 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-700 focus-within:ring-2">
      <MagnifyingGlassIcon className="h-4 w-4" />
      <input
        ref={(ref) => setSearchRef(ref)}
        placeholder="Search"
        className="flex-grow focus:outline-none"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue.length > 0 && (
        <button
          onClick={() => {
            setSearchValue("");
            searchRef?.focus();
          }}
          className="rounded-xl p-1 hover:bg-neutral-100"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
