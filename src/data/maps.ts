import { LatLngBoundsLiteral } from "leaflet";

export type MapEntry = {
  displayName: string;
  bounds?: LatLngBoundsLiteral;
};

export const maps: Record<string, MapEntry> = {
  mainworld: { displayName: "Mainworld" },
  trendor: { displayName: "Trendor" },
  "4f": { displayName: "4Falls" },
  ft: { displayName: "Firetown" },
  cata: { displayName: "Catacombs (12)" },
  coa: { displayName: "COA (13)" },
  temple: { displayName: "Temple (14)" },
  dungeon: { displayName: "Dungeon (15)" },
};
