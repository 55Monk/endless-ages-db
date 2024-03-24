import L, { Icon } from "leaflet";
import { useEffect, useState } from "react";
import {
  ImageOverlay,
  MapContainer,
  Marker,
  Polyline,
  Tooltip,
} from "react-leaflet";
import { getMapMap } from "../../data/maps";
import useContentStore from "../../hooks/UseContentStore";
import HeatmapLayer from "./HeatmapLayer.tsx";
import MapSelectionHeader from "./MapSelectionHeader";

type Line = {
  lineCoordinates: L.LatLngExpression[];
  color: string;
};

const OrbIcon = L.Icon.extend({
  options: {
    iconSize: [34, 51],
    iconAnchor: [17, 51],
    popupAnchor: [0, -51],
    tooltipAnchor: [17, -35],
  },
});

const icons: Record<string, Icon> = {
  // @ts-expect-error idk
  complete: new OrbIcon({
    iconUrl: `${import.meta.env.BASE_URL}/assets/maps/icons/complete-marker-icon.webp`,
  }),
  // @ts-expect-error idk
  orb: new OrbIcon({
    iconUrl: `${import.meta.env.BASE_URL}/assets/maps/icons/orb-marker-icon.webp`,
  }),
  // @ts-expect-error idk
  ap: new OrbIcon({
    iconUrl: `${import.meta.env.BASE_URL}/assets/maps/icons/ap-marker-icon.webp`,
  }),
  // @ts-expect-error idk
  bl: new OrbIcon({
    iconUrl: `${import.meta.env.BASE_URL}/assets/maps/icons/bl-marker-icon.webp`,
  }),
  // @ts-expect-error idk
  hf: new OrbIcon({
    iconUrl: `${import.meta.env.BASE_URL}/assets/maps/icons/hf-marker-icon.webp`,
  }),
  // @ts-expect-error idk
  hm: new OrbIcon({
    iconUrl: `${import.meta.env.BASE_URL}/assets/maps/icons/hm-marker-icon.webp`,
  }),
  // @ts-expect-error idk
  qi: new OrbIcon({
    iconUrl: `${import.meta.env.BASE_URL}/assets/maps/icons/qi-marker-icon.webp`,
  }),
  // @ts-expect-error idk
  egg: new OrbIcon({
    iconUrl: `${import.meta.env.BASE_URL}/assets/maps/icons/egg-marker-icon.webp`,
  }),
  // @ts-expect-error idk
  plant: new OrbIcon({
    iconUrl: `${import.meta.env.BASE_URL}/assets/maps/icons/plant-marker-icon.webp`,
  }),
  // @ts-expect-error idk
  mineral: new OrbIcon({
    iconUrl: `${import.meta.env.BASE_URL}/assets/maps/icons/mineral-marker-icon.webp`,
  }),
  // @ts-expect-error idk
  chest: new OrbIcon({
    iconUrl: `${import.meta.env.BASE_URL}/assets/maps/icons/chest-marker-icon.webp`,
  }),
};

const mapMap = getMapMap();

export default function PlotMap() {
  const selectedMap = useContentStore((state) => state.selectedMap);
  const selectMap = useContentStore((state) => state.selectMap);
  const markers = useContentStore((state) => state.markers);
  const heatpoints = useContentStore((state) => state.heatpoints);

  const selectedMapDetails = mapMap[selectedMap];

  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const newLines = [];
    if (markers.length > 1) {
      for (let i = 1; i < markers.length; i++) {
        const previousMarker = markers[i - 1];
        const marker = markers[i];
        if (
          previousMarker.location.map === selectedMap &&
          marker.location.map === selectedMap
        ) {
          let color = "orange";
          if (previousMarker.complete && marker.complete) {
            color = "green";
          }
          if (!previousMarker.complete && !marker.complete) {
            color = "red";
          }
          newLines.push({
            lineCoordinates: [
              [
                previousMarker.location.coordinates[2],
                previousMarker.location.coordinates[0],
              ],
              [marker.location.coordinates[2], marker.location.coordinates[0]],
            ] as L.LatLngExpression[],
            color: color,
          });
        }
      }
    }
    setLines(newLines);
  }, [markers, selectedMap]);

  return (
    <div className="relative flex flex-grow flex-col">
      <MapSelectionHeader selectedMap={selectedMap} selectMap={selectMap} />
      <MapContainer
        className="flex-grow !bg-sky-200"
        center={[0, 0]}
        zoom={-6}
        minZoom={-6}
        maxZoom={0}
        scrollWheelZoom={true}
        crs={L.CRS.Simple}
      >
        <ImageOverlay
          url={`${import.meta.env.BASE_URL}/assets/maps/${selectedMapDetails?.name}.webp`}
          bounds={
            selectedMapDetails?.bounds ?? [
              [-1, -1],
              [1, 1],
            ]
          }
        />
        <HeatmapLayer activeMap={selectedMap} heatpoints={heatpoints} />
        {markers
          .filter((marker) => marker.location.map === selectedMap)
          .map((marker, index) => (
            <Marker
              key={index}
              icon={
                marker.complete
                  ? icons["complete"]
                  : icons[marker.icon ?? "orb"]
              }
              position={[
                marker.location.coordinates[2],
                marker.location.coordinates[0],
              ]}
            >
              <Tooltip>{marker.location.description}</Tooltip>
            </Marker>
          ))}
        {lines.map((line) => (
          <Polyline
            key={JSON.stringify(line)}
            positions={line.lineCoordinates}
            color={line.color}
          />
        ))}
      </MapContainer>
    </div>
  );
}
