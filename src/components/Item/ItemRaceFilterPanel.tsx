import { PlayerRace, playerRaces } from "../../data/items/items";

export type Filters<T extends string> = {
  [x in T]: boolean;
};

type Props = {
  racesFilter: Filters<PlayerRace>;
  setRacesFilter: any;
};

export default function ItemRaceFilterPanel(props: Props) {
  const { racesFilter, setRacesFilter } = props;

  return (
    <div className="flex justify-around rounded border border-neutral-300 p-1">
      {playerRaces.map((race) => (
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
