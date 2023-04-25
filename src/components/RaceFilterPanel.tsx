import { Race } from "../data/items";

export type Filters<T extends string> = {
  [x in T]: boolean;
};

type Props = {
  races: Race[];
  racesFilter: Filters<Race>;
  setRacesFilter: any;
};

export default function RaceFilterPanel(props: Props) {
  const { races, racesFilter, setRacesFilter } = props;

  return (
    <div className="flex justify-around rounded border border-neutral-300 p-1">
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
