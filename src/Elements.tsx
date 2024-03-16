import { HeartIcon } from "@heroicons/react/20/solid";
import air from "./elements/air.webp";
import death from "./elements/death.webp";
import earth from "./elements/earth.webp";
import fire from "./elements/fire.webp";
import normal from "./elements/normal.webp";
import relic from "./elements/relic.webp";
import rune from "./elements/rune.webp";
import water from "./elements/water.webp";

const srcMap: Record<string, string> = {
  normal: normal,
  fire: fire,
  water: water,
  rune: rune,
  relic: relic,
  earth: earth,
  air: air,
  death: death,
};

export function getElementIcon(element: string) {
  const ele = element.toLowerCase();
  if (ele === "heal") {
    return <HeartIcon className="h-4 w-4" />;
  }
  return <img className="h-4 w-4" src={srcMap[ele]} alt={ele} title={ele} />;
}
