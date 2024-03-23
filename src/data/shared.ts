export type DataType = "item" | "mob" | "npc" | "quest";

const playerRaces = ["AP", "BL", "HF", "HM"] as const;
export const races = [...playerRaces, "SS", "Other"] as const;
export type Race = (typeof races)[number];

export const elements = [
  "NORMAL",
  "FIRE",
  "WATER",
  "RUNE",
  "RELIC",
  "EARTH",
  "AIR",
  "DEATH",
] as const;
export type Element = (typeof elements)[number];
export type DamageType = Element | "HEAL";

export function getDataTypeColor(type: DataType) {
  switch (type) {
    case "item":
      return "text-emerald-600";
    case "mob":
      return "text-red-600";
    case "npc":
      return "text-purple-600";
    case "quest":
      return "text-orange-600";
  }
}

// Ingame coordinates: [X, Y, Z]
// <br> +X = east
// <br> -X = west
// <br> +Y = up
// <br> -Y = down
// <br> +Z = north
// <br> -Z = south
// <br>Leaflet coordinates (standard latlng): [Z, X]
type Coordinates = [number, number, number];

export type MapLocation = {
  map: string;
  coordinates: Coordinates;
  radius?: number;
  description: string;
};

export type MapEntity = {
  location: MapLocation;
  icon?: string;
};
