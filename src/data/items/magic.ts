import { Item } from "./items.ts";

const magics: Item[] = [
  {
    name: "Acid Missile",
    tags: ["DIRECTDAMAGEONLYSPELL"],
    level: 1,
    iconLocation: [12, 12],
    drops: false,
    damage: {
      directElement: "NORMAL",
      directAmount: 12,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 1,
    },
    useCost: [["Poison Herb", 1]],
  },
  {
    name: "Weak Heal",
    tags: ["HEALSPELL"],
    level: 1,
    iconLocation: [13, 12],
    drops: false,
    damage: {
      directElement: "HEAL",
      directAmount: 10,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 1,
    },
    useCost: [["Bone", 1]],
  },
  {
    name: "Create Food",
    tags: ["UTILITYSPELL"],
    level: 1,
    iconLocation: [15, 12],
    drops: false,
    requirements: {
      MAGIC: 1,
    },
    useCost: [
      ["Ash", 1],
      ["Bone", 1],
    ],
  },
  {
    name: "Heal Missile",
    tags: ["HEALSPELL"],
    level: 3,
    iconLocation: [10, 13],
    drops: false,
    damage: {
      directElement: "HEAL",
      directAmount: 37,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 3,
    },
    useCost: [["Bone", 1]],
  },
  {
    name: "Flame Missile",
    tags: ["DIRECTDAMAGEONLYSPELL"],
    level: 3,
    iconLocation: [11, 13],
    drops: false,
    damage: {
      directElement: "NORMAL",
      directAmount: 11,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 3,
    },
    useCost: [
      ["Orb Root", 1],
      ["Ash", 1],
    ],
  },
  {
    name: "Illuminate",
    tags: ["UTILITYSPELL"],
    level: 3,
    iconLocation: [12, 13],
    drops: false,
    requirements: {
      MAGIC: 3,
    },
    useCost: [["Bone", 1]],
  },
  {
    name: "Meteor",
    tags: ["DIRECTDAMAGEONLYSPELL"],
    level: 3,
    iconLocation: [15, 13],
    drops: false,
    damage: {
      directElement: "NORMAL",
      directAmount: 27,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 3,
    },
    useCost: [
      ["Ash", 2],
      ["Blood Sand", 1],
    ],
  },
  {
    name: "Radius Heal",
    tags: ["HEALSPELL"],
    level: 5,
    iconLocation: [7, 14],
    drops: false,
    damage: {
      splashElement: "HEAL",
      splashAmount: 50,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 5,
    },
    useCost: [
      ["Ash", 1],
      ["Orb Root", 1],
      ["Bone", 1],
    ],
  },
  {
    name: "Radius Flame Attack",
    tags: ["AOEDAMAGEONLYSPELL"],
    level: 5,
    iconLocation: [8, 14],
    drops: false,
    damage: {
      splashElement: "NORMAL",
      splashAmount: 45,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 5,
    },
    useCost: [["Ash", 3]],
  },
  {
    name: "Gas Attack",
    tags: ["AOEDAMAGEONLYSPELL"],
    level: 5,
    iconLocation: [12, 15],
    drops: false,
    damage: {
      splashElement: "NORMAL",
      splashAmount: 70,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 5,
    },
    useCost: [["Blood Sand", 1]],
  },
  {
    name: "Greater Light",
    tags: ["UTILITYSPELL"],
    level: 5,
    iconLocation: [10, 14],
    drops: false,
    requirements: {
      MAGIC: 5,
    },
    useCost: [
      ["Ash", 2],
      ["Blood Grass", 1],
    ],
  },
  {
    name: "Lightning Attack",
    tags: ["DIRECTDAMAGEONLYSPELL"],
    level: 5,
    iconLocation: [11, 14],
    drops: false,
    damage: {
      directElement: "NORMAL",
      directAmount: 96,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 5,
    },
    useCost: [
      ["Eye of Elder Clegurk", 1],
      ["Ash", 1],
    ],
  },
  {
    name: "Greater Heal",
    tags: ["HEALSPELL"],
    level: 5,
    iconLocation: [12, 14],
    drops: false,
    damage: {
      directElement: "HEAL",
      directAmount: 100,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 5,
    },
    useCost: [
      ["Bone", 1],
      ["Blood Grass", 1],
    ],
  },
  {
    name: "Death Missile",
    tags: ["BOTHDAMAGESPELL"],
    level: 7,
    iconLocation: [13, 14],
    drops: false,
    damage: {
      splashElement: "NORMAL",
      splashAmount: 88,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 7,
    },
    useCost: [
      ["Ash", 1],
      ["Blood Sand", 2],
      ["Eye of Elder Clegurk", 1],
    ],
  },
  {
    name: "Ice Blast",
    tags: ["AOEDAMAGEONLYSPELL"],
    level: 7,
    iconLocation: [14, 14],
    drops: false,
    damage: {
      splashElement: "NORMAL",
      splashAmount: 70,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 7,
    },
    useCost: [
      ["Ash", 1],
      ["Bone", 1],
      ["Orb Root", 1],
    ],
  },
  {
    name: "Invisibility",
    tags: ["UTILITYSPELL"],
    level: 7,
    iconLocation: [9, 15],
    drops: false,
    requirements: {
      MAGIC: 7,
    },
    useCost: [
      ["Bone", 1],
      ["Poison Herb", 1],
    ],
  },
  {
    name: "Sonic Shock",
    tags: ["AOEDAMAGEONLYSPELL", "UTILITYSPELL"],
    level: 9,
    iconLocation: [10, 15],
    drops: false,
    damage: {
      splashElement: "NORMAL",
      splashAmount: 150,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 9,
    },
    useCost: [
      ["Orb Root", 3],
      ["Ash", 2],
      ["Bone", 1],
    ],
  },
  {
    name: "Psy Blast",
    tags: ["DIRECTDAMAGEONLYSPELL"],
    level: 9,
    iconLocation: [11, 15],
    drops: false,
    damage: {
      directElement: "NORMAL",
      directAmount: 80,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 9,
    },
    useCost: [
      ["Ash", 2],
      ["Blood Sand", 2],
      ["Blood Grass", 1],
    ],
  },
  {
    name: "Poison Wisp",
    tags: ["AOEDAMAGEONLYSPELL"],
    level: 9,
    iconLocation: [12, 15],
    drops: false,
    damage: {
      splashElement: "NORMAL",
      splashAmount: 170,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 9,
    },
    useCost: [
      ["Poison Herb", 6],
      ["Eye of Elder Clegurk", 1],
      ["Poison Base Cassius", 1],
    ],
  },
  {
    name: "Aurora Channel",
    tags: ["DIRECTDAMAGEONLYSPELL"],
    level: 9,
    iconLocation: [13, 15],
    drops: false,
    damage: {
      directElement: "NORMAL",
      directAmount: 167,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 9,
    },
    useCost: [
      ["Orb Root", 1],
      ["Hyssop Herb", 1],
      ["Slingthrex Twig", 1],
    ],
  },
  {
    name: "Focus Column",
    tags: ["AOEDAMAGEONLYSPELL"],
    level: 9,
    iconLocation: [14, 15],
    drops: false,
    damage: {
      splashElement: "NORMAL",
      splashAmount: 190,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 9,
    },
    useCost: [
      ["Ash", 8],
      ["Uenos Root", 1],
      ["Eye of Elder Clegurk", 1],
    ],
  },
  {
    name: "Spirit Dart",
    tags: ["DIRECTDAMAGEONLYSPELL"],
    level: 9,
    iconLocation: [15, 15],
    drops: false,
    damage: {
      directElement: "NORMAL",
      directAmount: 182,
      reloadDurationSeconds: 6,
    },
    requirements: {
      MAGIC: 9,
    },
    useCost: [
      ["Orb Root", 1],
      ["Tanzin Bush", 1],
      ["Uenos Root", 1],
    ],
  },
];

magics.forEach((magic) => magic.tags.push("MAGIC"));

export default magics;
