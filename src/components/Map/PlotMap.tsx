import L from "leaflet";
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
import MapSelectionHeader from "./MapSelectionHeader";

const OrbIcon: any = L.Icon.extend({
  options: {
    iconSize: [34, 51],
    iconAnchor: [17, 51],
    popupAnchor: [0, -51],
    tooltipAnchor: [17, -35],
  },
});

const icons: Record<string, any> = {
  complete: new OrbIcon({
    iconUrl: `${process.env.PUBLIC_URL}/assets/icons/complete-marker-icon.png`,
  }),
  orb: new OrbIcon({
    iconUrl: `${process.env.PUBLIC_URL}/assets/icons/orb-marker-icon.png`,
  }),
  ap: new OrbIcon({
    iconUrl: `${process.env.PUBLIC_URL}/assets/icons/ap-marker-icon.png`,
  }),
  bl: new OrbIcon({
    iconUrl: `${process.env.PUBLIC_URL}/assets/icons/bl-marker-icon.png`,
  }),
  hf: new OrbIcon({
    iconUrl: `${process.env.PUBLIC_URL}/assets/icons/hf-marker-icon.png`,
  }),
  hm: new OrbIcon({
    iconUrl: `${process.env.PUBLIC_URL}/assets/icons/hm-marker-icon.png`,
  }),
  qi: new OrbIcon({
    iconUrl: `${process.env.PUBLIC_URL}/assets/icons/qi-marker-icon.png`,
  }),
  egg: new OrbIcon({
    iconUrl: `${process.env.PUBLIC_URL}/assets/icons/egg-marker-icon.png`,
  }),
  plant: new OrbIcon({
    iconUrl: `${process.env.PUBLIC_URL}/assets/icons/plant-marker-icon.png`,
  }),
  mineral: new OrbIcon({
    iconUrl: `${process.env.PUBLIC_URL}/assets/icons/mineral-marker-icon.png`,
  }),
  chest: new OrbIcon({
    iconUrl: `${process.env.PUBLIC_URL}/assets/icons/chest-marker-icon.png`,
  }),
};

const mapMap = getMapMap();

export default function PlotMap() {
  const selectedMap = useContentStore((state) => state.selectedMap);
  const selectMap = useContentStore((state) => state.selectMap);
  const markers = useContentStore((state) => state.markers);

  const selectedMapDetails = mapMap[selectedMap];

  const [lines, setLines] = useState<any[]>([]);

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
              previousMarker.location.coordinates,
              marker.location.coordinates,
            ],
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
        className="flex-grow"
        center={[0, 0]}
        zoom={-6}
        minZoom={-6}
        maxZoom={0}
        scrollWheelZoom={true}
        crs={L.CRS.Simple}
      >
        <ImageOverlay
          url={`${process.env.PUBLIC_URL}/assets/maps/${selectedMapDetails?.name}.png`}
          bounds={
            selectedMapDetails?.bounds ?? [
              [-1, -1],
              [1, 1],
            ]
          }
        />
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
              position={marker.location.coordinates}
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
