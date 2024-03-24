import L, { HeatLatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import "../../../leafletheat/leaflet-heat.js";
import { MapLocation } from "../../data/shared.ts";
import usePrevious from "../../hooks/usePrevious.ts";

type Props = {
  activeMap: string;
  heatpoints: MapLocation[];
};

export default function HeatmapLayer(props: Props) {
  const { activeMap, heatpoints } = props;

  const [layer, setLayer] = useState<L.Layer>();
  const previousLayer = usePrevious<L.Layer>(layer);

  const map = useMap();

  useEffect(() => {
    if (previousLayer) {
      map.removeLayer(previousLayer);
    }
  }, [map, layer]);

  useEffect(() => {
    if (heatpoints && heatpoints.length > 0) {
      const points: HeatLatLngTuple[] = heatpoints
        .filter((heatpoint) => heatpoint.map === activeMap)
        .map((heatpoint) => {
          return [heatpoint.coordinates[2], heatpoint.coordinates[0], 100]; // lat lng intensity
        });
      const newLayer = L.heatLayer(points, { radius: 20 });
      setLayer(newLayer);
      map.addLayer(newLayer);
    } else {
      setLayer(undefined);
    }
  }, [activeMap, heatpoints, map]);

  return <></>;
}
