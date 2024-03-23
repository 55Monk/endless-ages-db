import { Item } from "../items";

const apAccessories: Item[] = [
  {
    name: "[AP] Single Horn",
    tags: ["MISCACCESSORY"],
    level: 0,
    iconLocation: [6, 15],
    drops: false,
    requirements: {
      STR: 10,
      DEX: 20,
      WIS: 10,
    },
    defenses: {
      NORMAL: 1,
    },
  },
  {
    name: "[AP] Dual Horns",
    tags: ["MISCACCESSORY"],
    level: 0,
    iconLocation: [6, 15],
    drops: false,
    requirements: {
      STR: 10,
      DEX: 20,
      WIS: 10,
    },
    defenses: {
      NORMAL: 3,
    },
  },
  {
    name: "[AP] Amulet of Rune Protection",
    tags: ["RING"],
    level: 0,
    iconLocation: [13, 5],
    drops: false,
    defenses: {
      EARTH: 40,
    },
  },
  {
    name: "[AP] Ring of Power +20",
    tags: ["RING"],
    level: 0,
    iconLocation: [12, 6],
    drops: false,
    bonuses: {
      STR: 20,
    },
  },
  {
    name: "[AP] Ring of Haste +20",
    tags: ["RING"],
    level: 0,
    iconLocation: [12, 6],
    drops: false,
    bonuses: {
      DEX: 20,
    },
  },
  {
    name: "[AP] Ring of Mind +20",
    tags: ["RING"],
    level: 0,
    iconLocation: [12, 6],
    drops: false,
    bonuses: {
      WIS: 20,
    },
  },
  {
    name: "[AP] Alchemic Trinity Ring +20",
    tags: ["RING"],
    level: 0,
    iconLocation: [12, 6],
    drops: false,
    bonuses: {
      STR: 20,
      DEX: 20,
      WIS: 20,
    },
  },
];

for (const item of apAccessories) {
  item.race = "AP";
  item.tags.push("ACCESSORY");
}

export default apAccessories;
