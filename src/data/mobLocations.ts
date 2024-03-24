import { Coordinates, MapLocation } from "./shared.ts";

type MobCoordinateMap = Record<string, Record<string, Coordinates[]>>;
export const mobCoordinateMap: MobCoordinateMap = {
  Flob: {
    mainworld: [
      [7796, 1526, 17362],
      [8175, 1583, 17987],
      [-16310, 335, -15257],
      [-3661, 157, 15835],
      [-6064, 298, 15560],
    ],
  },
};

export function getMobMapCoordinates(
  name: string,
  mapName?: string,
): MapLocation[] | undefined {
  const mobMaps = mobCoordinateMap[name];
  if (mobMaps) {
    let coordinates;
    let mapNameFound = mapName;
    if (mapName) {
      coordinates = mobMaps[mapName];
    } else {
      mapNameFound = Object.keys(mobMaps)[0];
      coordinates = mobMaps[mapNameFound];
    }

    if (mapNameFound && coordinates) {
      const mapLocations = [] as MapLocation[];
      coordinates.forEach((coordinate) =>
        mapLocations.push({ map: mapNameFound, coordinates: coordinate }),
      );
      return mapLocations;
    }
  }
}
