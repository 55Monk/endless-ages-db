import { Item } from "../items";

const apGuns: Item[] = [
  {
    name: "[AP] HandFlare Gun",
    tags: ["UTILITYGUN"],
    level: 0,
    iconLocation: [14, 10],
    drops: true,
    marketCost: 628,
    requirements: {
      MC: 0,
      STR: 10,
      DEX: 20,
      WIS: 10,
    },
  },
  {
    name: "[AP] Aqualaz",
    tags: ["DIRECTDAMAGEONLYGUN"],
    level: 0,
    iconLocation: [2, 10],
    drops: false,
    marketCost: 50,
    requirements: {
      MC: 0,
      STR: 10,
      DEX: 20,
      WIS: 10,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 10,
      reloadDurationSeconds: 1.16,
    },
  },
  {
    name: "[AP] Amberlaz",
    tags: ["DIRECTDAMAGEONLYGUN"],
    level: 2,
    iconLocation: [0, 10],
    drops: true,
    marketCost: 320,
    requirements: {
      MC: 2,
      STR: 13,
      DEX: 25,
      WIS: 13,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 15,
      reloadDurationSeconds: 1.16,
    },
  },
  {
    name: "[AP] Soilaz",
    tags: ["DIRECTDAMAGEONLYGUN"],
    level: 3,
    iconLocation: [7, 12],
    drops: true,
    marketCost: 640,
    requirements: {
      MC: 3,
      STR: 15,
      DEX: 30,
      WIS: 15,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 20,
      reloadDurationSeconds: 1.16,
    },
  },
  {
    name: "[AP] Gustlaz",
    tags: ["DIRECTDAMAGEONLYGUN"],
    level: 4,
    iconLocation: [8, 11],
    drops: true,
    marketCost: 920,
    requirements: {
      MC: 4,
      STR: 20,
      DEX: 40,
      WIS: 20,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 25,
      reloadDurationSeconds: 1.16,
    },
  },
  {
    name: "[AP] Quadoty",
    tags: ["DIRECTDAMAGEONLYGUN"],
    level: 5,
    iconLocation: [5, 12],
    drops: true,
    marketCost: 1000,
    requirements: {
      MC: 5,
      STR: 25,
      DEX: 50,
      WIS: 25,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 50,
      reloadDurationSeconds: 2.18,
    },
  },
  {
    name: "[AP] Clawjous",
    tags: ["DIRECTDAMAGEONLYGUN"],
    level: 6,
    iconLocation: [5, 10],
    drops: true,
    marketCost: 1800,
    requirements: {
      MC: 6,
      STR: 30,
      DEX: 60,
      WIS: 30,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 45,
      reloadDurationSeconds: 1.15,
    },
  },
  {
    name: "[AP] Stontrile",
    tags: ["DIRECTDAMAGEONLYGUN"],
    level: 7,
    iconLocation: [8, 12],
    drops: false,
    requirements: {
      MC: 7,
      STR: 35,
      DEX: 70,
      WIS: 35,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 30,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] Trinster",
    tags: ["DIRECTDAMAGEONLYGUN"],
    level: 8,
    iconLocation: [10, 12],
    drops: false,
    requirements: {
      MC: 8,
      STR: 40,
      DEX: 80,
      WIS: 40,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 115,
      reloadDurationSeconds: 1.63,
    },
  },
  {
    name: "[AP] Dilirium",
    tags: ["DIRECTDAMAGEONLYGUN"],
    level: 10,
    iconLocation: [6, 10],
    drops: false,
    requirements: {
      MC: 10,
      STR: 50,
      DEX: 100,
      WIS: 50,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 120,
      reloadDurationSeconds: 1.14,
    },
  },
  {
    name: "[AP] Oafinster",
    tags: ["DIRECTDAMAGEONLYGUN"],
    level: 11,
    iconLocation: [2, 12],
    drops: false,
    requirements: {
      MC: 11,
      STR: 55,
      DEX: 110,
      WIS: 55,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 155,
      reloadDurationSeconds: 1.75,
    },
  },
  {
    name: "[AP] Trinstnarak",
    tags: ["DIRECTDAMAGEONLYGUN"],
    level: 12,
    iconLocation: [11, 12],
    drops: false,
    requirements: {
      MC: 12,
      STR: 60,
      DEX: 120,
      WIS: 60,
    },
    damage: {
      directElement: "RUNE",
      directAmount: 85,
      reloadDurationSeconds: 1.51,
    },
  },
  {
    name: "[AP] Oafronack",
    tags: ["DIRECTDAMAGEONLYGUN"],
    level: 16,
    iconLocation: [3, 12],
    drops: false,
    requirements: {
      MC: 16,
      STR: 80,
      DEX: 160,
      WIS: 80,
    },
    damage: {
      directElement: "DEATH",
      directAmount: 125,
      reloadDurationSeconds: 1.75,
    },
  },
];

for (const item of apGuns) {
  item.race = "AP";
  item.tags.push("GUN");
}

export default apGuns;
