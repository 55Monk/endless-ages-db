import { LatLngExpression } from "leaflet";

export type DataType = "item" | "mob" | "npc" | "quest";

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

export type MapLocation = {
  map: string;
  coordinates: LatLngExpression;
  radius?: number;
  description: string;
};

export type MapEntity = {
  location: MapLocation;
  icon?: string;
};
