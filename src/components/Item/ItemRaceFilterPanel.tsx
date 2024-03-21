import { Dispatch, SetStateAction } from "react";
import { Race, races } from "../../data/shared";

export type Filters<T extends string> = {
  [x in T]: boolean;
};

type Props = {
  racesFilter: Filters<Race>;
  setRacesFilter: Dispatch<SetStateAction<Filters<Race>>>;
};

export default function ItemRaceFilterPanel(props: Props) {
  const { racesFilter, setRacesFilter } = props;

  return (
    <div className="flex justify-between rounded border border-neutral-300 px-2 py-1">
      {races.map((race) => (
        <div key={race}>
          <input
            type="checkbox"
            name={race}
            checked={racesFilter[race]}
            onChange={(e) => {
              const newSelectedFilters = { ...racesFilter };
              newSelectedFilters[race] = e.target.checked;
              setRacesFilter(newSelectedFilters);
            }}
          />
          <label htmlFor={race}> {race}</label>
        </div>
      ))}
    </div>
  );
}
