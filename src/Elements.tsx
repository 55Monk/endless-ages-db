import { HeartIcon } from "@heroicons/react/20/solid";
import air from "./assets/elements/air.webp";
import death from "./assets/elements/death.webp";
import earth from "./assets/elements/earth.webp";
import fire from "./assets/elements/fire.webp";
import normal from "./assets/elements/normal.webp";
import relic from "./assets/elements/relic.webp";
import rune from "./assets/elements/rune.webp";
import water from "./assets/elements/water.webp";

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
