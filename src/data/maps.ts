import { LatLngBoundsLiteral } from "leaflet";

export type MapEntry = {
  name: string;
  displayName: string;
  bounds?: LatLngBoundsLiteral;
};

const maps: MapEntry[] = [
  {
    name: "mainworld",
    displayName: "Mainworld",
    bounds: [
      [-25506, -25852],
      [25694, 25348],
    ],
  },
  {
    name: "trendor",
    displayName: "Trendor",
  },
  {
    name: "4falls",
    displayName: "4Falls",
    bounds: [
      [-8500, -8500],
      [8500, 8500],
    ],
  },
  {
    name: "ft",
    displayName: "Firetown",
  },
  {
    name: "cata",
    displayName: "Catacombs (12)",
  },
  {
    name: "coa",
    displayName: "COA (13)",
  },
  {
    name: "temple",
    displayName: "Temple (14)",
  },
  {
    name: "dungeon",
    displayName: "Dungeon (15)",
  },
  {
    name: "ak",
    displayName: "Air Kingdom",
    bounds: [
      [-29400, -24542],
      [18600, 39458],
    ],
  },
];

const mapMap: Partial<Record<string, MapEntry>> = {};
maps.reduce((map, mapEntry) => {
  map[mapEntry.name] = mapEntry;
  return map;
}, mapMap);

export function getMapMap() {
  return mapMap;
}

export default function getMaps() {
  return maps;
}
