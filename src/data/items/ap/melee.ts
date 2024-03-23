import { Item } from "../items";

const apMelee: Item[] = [
  {
    name: "[AP] Ontroytag",
    tags: [],
    level: 0,
    drops: false,
    marketCost: 16,
    requirements: {
      MELEE: 0,
      STR: 10,
      DEX: 10,
      WIS: 20,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 12,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] Grandgerg",
    tags: [],
    level: 1,
    drops: true,
    marketCost: 76,
    requirements: {
      MELEE: 1,
      STR: 19,
      DEX: 18,
      WIS: 22,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 24,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] Bloodhasten",
    tags: [],
    level: 2,
    drops: true,
    marketCost: 92,
    requirements: {
      MELEE: 2,
      STR: 27,
      DEX: 26,
      WIS: 25,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 36,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] EstorBlade",
    tags: [],
    level: 3,
    drops: true,
    marketCost: 412,
    requirements: {
      MELEE: 3,
      STR: 36,
      DEX: 34,
      WIS: 27,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 48,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] Ranrokc",
    tags: [],
    level: 4,
    drops: true,
    marketCost: 448,
    requirements: {
      MELEE: 4,
      STR: 45,
      DEX: 42,
      WIS: 27,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 60,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] Dalition",
    tags: [],
    level: 5,
    drops: true,
    marketCost: 608,
    requirements: {
      MELEE: 5,
      STR: 53,
      DEX: 50,
      WIS: 32,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 72,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] Gristion",
    tags: [],
    level: 6,
    drops: true,
    requirements: {
      MELEE: 6,
      STR: 62,
      DEX: 58,
      WIS: 34,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 84,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] BarbedDulsikium",
    tags: [],
    level: 7,
    drops: true,
    requirements: {
      MELEE: 7,
      STR: 79,
      DEX: 66,
      WIS: 36,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 96,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] BloodKnarl",
    tags: [],
    level: 7,
    drops: true,
    requirements: {
      MELEE: 7,
      STR: 71,
      DEX: 74,
      WIS: 39,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 108,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] CroveinPlechivstz",
    tags: [],
    level: 8,
    drops: true,
    requirements: {
      MELEE: 8,
      STR: 88,
      DEX: 82,
      WIS: 41,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 120,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] CurenikPike",
    tags: [],
    level: 9,
    drops: true,
    requirements: {
      MELEE: 9,
      STR: 105,
      DEX: 90,
      WIS: 43,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 132,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] Karenaktna",
    tags: [],
    level: 9,
    drops: true,
    requirements: {
      MELEE: 9,
      STR: 97,
      DEX: 98,
      WIS: 46,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 144,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] KesvinBreak Two",
    tags: [],
    level: 10,
    drops: true,
    requirements: {
      MELEE: 10,
      STR: 114,
      DEX: 106,
      WIS: 48,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 156,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] Omsevenier",
    tags: [],
    level: 11,
    drops: false,
    requirements: {
      MELEE: 11,
      STR: 131,
      DEX: 114,
      WIS: 50,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 168,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] RemerizanCloft",
    tags: [],
    level: 11,
    drops: false,
    requirements: {
      MELEE: 11,
      STR: 123,
      DEX: 122,
      WIS: 53,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 180,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] SectaliseshNim",
    tags: [],
    level: 12,
    drops: false,
    requirements: {
      MELEE: 12,
      STR: 165,
      DEX: 130,
      WIS: 55,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 192,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] SteelBoltshik",
    tags: [],
    level: 12,
    drops: false,
    requirements: {
      MELEE: 12,
      STR: 140,
      DEX: 145,
      WIS: 58,
    },
    damage: {
      directElement: "RUNE",
      directAmount: 23,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] TovechLerin",
    tags: [],
    level: 13,
    drops: false,
    requirements: {
      MELEE: 13,
      STR: 185,
      DEX: 180,
      WIS: 61,
    },
    damage: {
      directElement: "RUNE",
      directAmount: 45,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] ZiraelSlayer",
    tags: [],
    level: 14,
    drops: false,
    requirements: {
      MELEE: 14,
      STR: 195,
      DEX: 190,
      WIS: 64,
    },
    damage: {
      directElement: "DEATH",
      directAmount: 68,
      reloadDurationSeconds: 0.5,
    },
  },
  {
    name: "[AP] Sword of Crom",
    tags: [],
    level: 15,
    drops: false,
    requirements: {
      MELEE: 15,
      STR: 215,
      DEX: 210,
      WIS: 68,
    },
    damage: {
      directElement: "DEATH",
      directAmount: 90,
      reloadDurationSeconds: 0.5,
    },
  },
];

for (const item of apMelee) {
  item.race = "AP";
  item.iconLocation = [14, 9];
  item.tags.push("MELEE");
}

export default apMelee;
