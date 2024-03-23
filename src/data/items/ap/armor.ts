import { Item } from "../items";

const apArmor: Item[] = [
  // T1
  {
    name: "[AP] Plandon Helmet",
    tags: ["HEAD/FEET"],
    level: 1,
    iconLocation: [5, 15],
    drops: false,
    marketCost: 85,
    requirements: {
      STR: 10,
      DEX: 10,
      WIS: 10,
    },
    defenses: {
      NORMAL: 2,
    },
  },
  {
    name: "[AP] Plandon Chest Armor",
    tags: ["BODY"],
    level: 1,
    iconLocation: [5, 13],
    drops: false,
    marketCost: 169,
    requirements: {
      STR: 10,
      DEX: 10,
      WIS: 10,
    },
    defenses: {
      NORMAL: 2,
    },
  },
  {
    name: "[AP] Plandon Bracers",
    tags: ["HANDS"],
    level: 1,
    iconLocation: [6, 13],
    drops: false,
    marketCost: 85,
    requirements: {
      STR: 10,
      DEX: 10,
      WIS: 10,
    },
    defenses: {
      NORMAL: 2,
    },
  },
  {
    name: "[AP] Plandon Shin Armor",
    tags: ["LEGS"],
    level: 1,
    iconLocation: [5, 14],
    drops: false,
    marketCost: 85,
    requirements: {
      STR: 10,
      DEX: 10,
      WIS: 10,
    },
    defenses: {
      NORMAL: 2,
    },
  },
  // T2
  {
    name: "[AP] Sondron Helmet",
    tags: ["HEAD/FEET"],
    level: 2,
    iconLocation: [5, 15],
    drops: true,
    marketCost: 110,
    requirements: {
      STR: 20,
      DEX: 15,
      WIS: 12,
    },
    defenses: {
      NORMAL: 3,
    },
  },
  {
    name: "[AP] Sondron Chest Armor",
    tags: ["BODY"],
    level: 2,
    iconLocation: [5, 13],
    drops: true,
    marketCost: 216,
    requirements: {
      STR: 20,
      DEX: 15,
      WIS: 12,
    },
    defenses: {
      NORMAL: 3,
    },
  },
  {
    name: "[AP] Sondron Bracers",
    tags: ["HANDS"],
    level: 2,
    iconLocation: [6, 13],
    drops: true,
    marketCost: 116,
    requirements: {
      STR: 20,
      DEX: 15,
      WIS: 12,
    },
    defenses: {
      NORMAL: 3,
    },
  },
  {
    name: "[AP] Sondron Shin Armor",
    tags: ["LEGS"],
    level: 2,
    iconLocation: [5, 14],
    drops: true,
    marketCost: 116,
    requirements: {
      STR: 20,
      DEX: 15,
      WIS: 12,
    },
    defenses: {
      NORMAL: 3,
    },
  },
  // T3
  {
    name: "[AP] Sision Helmet",
    tags: ["HEAD/FEET"],
    level: 3,
    iconLocation: [5, 15],
    drops: true,
    marketCost: 244,
    requirements: {
      STR: 30,
      DEX: 25,
      WIS: 15,
    },
    defenses: {
      NORMAL: 5,
    },
  },
  {
    name: "[AP] Sision Chest Armor",
    tags: ["BODY"],
    level: 3,
    iconLocation: [5, 13],
    drops: true,
    marketCost: 484,
    requirements: {
      STR: 30,
      DEX: 25,
      WIS: 15,
    },
    defenses: {
      NORMAL: 5,
    },
  },
  {
    name: "[AP] Sision Bracers",
    tags: ["HANDS"],
    level: 3,
    iconLocation: [6, 13],
    drops: true,
    marketCost: 142,
    requirements: {
      STR: 30,
      DEX: 25,
      WIS: 15,
    },
    defenses: {
      NORMAL: 5,
    },
  },
  {
    name: "[AP] Sision Shin Armor",
    tags: ["LEGS"],
    level: 3,
    iconLocation: [5, 14],
    drops: true,
    marketCost: 284,
    requirements: {
      STR: 30,
      DEX: 25,
      WIS: 15,
    },
    defenses: {
      NORMAL: 5,
    },
  },
  // T4
  {
    name: "[AP] Vidon Helmet",
    tags: ["HEAD/FEET"],
    level: 4,
    iconLocation: [5, 15],
    drops: true,
    marketCost: 504,
    requirements: {
      STR: 38,
      DEX: 30,
      WIS: 21,
    },
    defenses: {
      NORMAL: 7,
    },
  },
  {
    name: "[AP] Vidon Chest Armor",
    tags: ["BODY"],
    level: 4,
    iconLocation: [5, 13],
    drops: true,
    marketCost: 502,
    requirements: {
      STR: 38,
      DEX: 30,
      WIS: 21,
    },
    defenses: {
      NORMAL: 7,
    },
  },
  {
    name: "[AP] Vidon Bracers",
    tags: ["HANDS"],
    level: 4,
    iconLocation: [6, 13],
    drops: true,
    marketCost: 804,
    requirements: {
      STR: 38,
      DEX: 30,
      WIS: 21,
    },
    defenses: {
      NORMAL: 7,
    },
  },
  {
    name: "[AP] Vidon Shin Armor",
    tags: ["LEGS"],
    level: 4,
    iconLocation: [5, 14],
    drops: true,
    marketCost: 804,
    requirements: {
      STR: 38,
      DEX: 30,
      WIS: 21,
    },
    defenses: {
      NORMAL: 7,
    },
  },
  // T5
  {
    name: "[AP] Quazon Helmet",
    tags: ["HEAD/FEET"],
    level: 5,
    iconLocation: [5, 15],
    drops: true,
    marketCost: 804,
    requirements: {
      STR: 50,
      DEX: 40,
      WIS: 35,
    },
    defenses: {
      NORMAL: 9,
    },
  },
  {
    name: "[AP] Quazon Chest Armor",
    tags: ["BODY"],
    level: 5,
    iconLocation: [5, 13],
    drops: true,
    marketCost: 1604,
    requirements: {
      STR: 50,
      DEX: 40,
      WIS: 35,
    },
    defenses: {
      NORMAL: 9,
    },
  },
  {
    name: "[AP] Quazon Bracers",
    tags: ["HANDS"],
    level: 5,
    iconLocation: [6, 13],
    drops: true,
    marketCost: 1004,
    requirements: {
      STR: 50,
      DEX: 40,
      WIS: 35,
    },
    defenses: {
      NORMAL: 9,
    },
  },
  {
    name: "[AP] Quazon Shin Armor",
    tags: ["LEGS"],
    level: 5,
    iconLocation: [5, 14],
    drops: true,
    marketCost: 1004,
    requirements: {
      STR: 50,
      DEX: 40,
      WIS: 35,
    },
    defenses: {
      NORMAL: 9,
    },
  },
  // T6
  {
    name: "[AP] Tigon Helmet",
    tags: ["HEAD/FEET"],
    level: 6,
    iconLocation: [5, 15],
    drops: true,
    requirements: {
      STR: 65,
      DEX: 55,
      WIS: 45,
    },
    defenses: {
      NORMAL: 11,
    },
  },
  {
    name: "[AP] Tigon Chest Armor",
    tags: ["BODY"],
    level: 6,
    iconLocation: [5, 13],
    drops: true,
    requirements: {
      STR: 65,
      DEX: 55,
      WIS: 45,
    },
    defenses: {
      NORMAL: 11,
    },
  },
  {
    name: "[AP] Tigon Bracers",
    tags: ["HANDS"],
    level: 6,
    iconLocation: [6, 13],
    drops: true,
    requirements: {
      STR: 65,
      DEX: 55,
      WIS: 45,
    },
    defenses: {
      NORMAL: 11,
    },
  },
  {
    name: "[AP] Tigon Shin Armor",
    tags: ["LEGS"],
    level: 6,
    iconLocation: [5, 14],
    drops: true,
    requirements: {
      STR: 65,
      DEX: 55,
      WIS: 45,
    },
    defenses: {
      NORMAL: 11,
    },
  },
  // T7
  {
    name: "[AP] Cadon Helmet",
    tags: ["HEAD/FEET"],
    level: 7,
    iconLocation: [5, 15],
    drops: true,
    requirements: {
      STR: 90,
      DEX: 75,
      WIS: 50,
    },
    defenses: {
      NORMAL: 14,
    },
  },
  {
    name: "[AP] Cadon Chest Armor",
    tags: ["BODY"],
    level: 7,
    iconLocation: [5, 13],
    drops: true,
    requirements: {
      STR: 90,
      DEX: 75,
      WIS: 50,
    },
    defenses: {
      NORMAL: 14,
    },
  },
  {
    name: "[AP] Cadon Bracers",
    tags: ["HANDS"],
    level: 7,
    iconLocation: [6, 13],
    drops: true,
    requirements: {
      STR: 90,
      DEX: 75,
      WIS: 50,
    },
    defenses: {
      NORMAL: 14,
    },
  },
  {
    name: "[AP] Cadon Shin Armor",
    tags: ["LEGS"],
    level: 7,
    iconLocation: [5, 14],
    drops: true,
    requirements: {
      STR: 90,
      DEX: 75,
      WIS: 50,
    },
    defenses: {
      NORMAL: 14,
    },
  },
  // T8
  {
    name: "[AP] Soulton Helmet",
    tags: ["HEAD/FEET"],
    level: 8,
    iconLocation: [5, 15],
    drops: true,
    requirements: {
      STR: 115,
      DEX: 108,
      WIS: 61,
    },
    defenses: {
      NORMAL: 17,
    },
  },
  {
    name: "[AP] Soulton Chest Armor",
    tags: ["BODY"],
    level: 8,
    iconLocation: [5, 13],
    drops: true,
    requirements: {
      STR: 115,
      DEX: 108,
      WIS: 61,
    },
    defenses: {
      NORMAL: 17,
    },
  },
  {
    name: "[AP] Soulton Bracers",
    tags: ["HANDS"],
    level: 8,
    iconLocation: [6, 13],
    drops: true,
    requirements: {
      STR: 115,
      DEX: 108,
      WIS: 61,
    },
    defenses: {
      NORMAL: 17,
    },
  },
  {
    name: "[AP] Soulton Shin Armor",
    tags: ["LEGS"],
    level: 8,
    iconLocation: [5, 14],
    drops: true,
    requirements: {
      STR: 115,
      DEX: 108,
      WIS: 61,
    },
    defenses: {
      NORMAL: 17,
    },
  },
  // T9
  {
    name: "[AP] Langdrion Helmet",
    tags: ["HEAD/FEET"],
    level: 9,
    iconLocation: [5, 15],
    drops: true,
    requirements: {
      STR: 130,
      DEX: 123,
      WIS: 69,
    },
    defenses: {
      NORMAL: 19,
    },
  },
  {
    name: "[AP] Langdrion Chest Armor",
    tags: ["BODY"],
    level: 9,
    iconLocation: [5, 13],
    drops: true,
    requirements: {
      STR: 130,
      DEX: 123,
      WIS: 69,
    },
    defenses: {
      NORMAL: 19,
    },
  },
  {
    name: "[AP] Langdrion Bracers",
    tags: ["HANDS"],
    level: 9,
    iconLocation: [6, 13],
    drops: true,
    requirements: {
      STR: 130,
      DEX: 123,
      WIS: 69,
    },
    defenses: {
      NORMAL: 19,
    },
  },
  {
    name: "[AP] Langdrion Shin Armor",
    tags: ["LEGS"],
    level: 9,
    iconLocation: [5, 14],
    drops: true,
    requirements: {
      STR: 130,
      DEX: 123,
      WIS: 69,
    },
    defenses: {
      NORMAL: 19,
    },
  },
  // T10
  {
    name: "[AP] Rampion Helmet",
    tags: ["HEAD/FEET"],
    level: 10,
    iconLocation: [5, 15],
    drops: true,
    requirements: {
      STR: 145,
      DEX: 138,
      WIS: 77,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 2,
    },
  },
  {
    name: "[AP] Rampion Chest Armor",
    tags: ["BODY"],
    level: 10,
    iconLocation: [5, 13],
    drops: true,
    requirements: {
      STR: 145,
      DEX: 138,
      WIS: 77,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 2,
    },
  },
  {
    name: "[AP] Rampion Bracers",
    tags: ["HANDS"],
    level: 10,
    iconLocation: [6, 13],
    drops: true,
    requirements: {
      STR: 145,
      DEX: 138,
      WIS: 77,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 2,
    },
  },
  {
    name: "[AP] Rampion Shin Armor",
    tags: ["LEGS"],
    level: 10,
    iconLocation: [5, 14],
    drops: true,
    requirements: {
      STR: 145,
      DEX: 138,
      WIS: 77,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 2,
    },
  },
  // T11
  {
    name: "[AP] Puron Helmet",
    tags: ["HEAD/FEET"],
    level: 11,
    iconLocation: [5, 15],
    drops: false,
    requirements: {
      STR: 160,
      DEX: 153,
      WIS: 85,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 6,
    },
  },
  {
    name: "[AP] Puron Chest Armor",
    tags: ["BODY"],
    level: 11,
    iconLocation: [5, 13],
    drops: false,
    requirements: {
      STR: 160,
      DEX: 153,
      WIS: 85,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 6,
    },
  },
  {
    name: "[AP] Puron Bracers",
    tags: ["HANDS"],
    level: 11,
    iconLocation: [6, 13],
    drops: false,
    requirements: {
      STR: 160,
      DEX: 153,
      WIS: 85,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 6,
    },
  },
  {
    name: "[AP] Puron Shin Armor",
    tags: ["LEGS"],
    level: 11,
    iconLocation: [5, 14],
    drops: false,
    requirements: {
      STR: 160,
      DEX: 153,
      WIS: 85,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 6,
    },
  },
  // T12
  {
    name: "[AP] Morgion Helmet",
    tags: ["HEAD/FEET"],
    level: 12,
    iconLocation: [5, 15],
    drops: false,
    requirements: {
      STR: 175,
      DEX: 168,
      WIS: 93,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
    },
  },
  {
    name: "[AP] Morgion Chest Armor",
    tags: ["BODY"],
    level: 12,
    iconLocation: [5, 13],
    drops: false,
    requirements: {
      STR: 175,
      DEX: 168,
      WIS: 93,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
    },
  },
  {
    name: "[AP] Morgion Bracers",
    tags: ["HANDS"],
    level: 12,
    iconLocation: [6, 13],
    drops: false,
    requirements: {
      STR: 175,
      DEX: 168,
      WIS: 93,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
    },
  },
  {
    name: "[AP] Morgion Shin Armor",
    tags: ["LEGS"],
    level: 12,
    iconLocation: [5, 14],
    drops: false,
    requirements: {
      STR: 175,
      DEX: 168,
      WIS: 93,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
    },
  },
  // T13
  {
    name: "[AP] Hudion Helmet",
    tags: ["HEAD/FEET"],
    level: 13,
    iconLocation: [5, 15],
    drops: false,
    requirements: {
      STR: 190,
      DEX: 183,
      WIS: 101,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
      DEATH: 2,
    },
  },
  {
    name: "[AP] Hudion Chest Armor",
    tags: ["BODY"],
    level: 13,
    iconLocation: [5, 13],
    drops: false,
    requirements: {
      STR: 190,
      DEX: 183,
      WIS: 101,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
      DEATH: 2,
    },
  },
  {
    name: "[AP] Hudion Bracers",
    tags: ["HANDS"],
    level: 13,
    iconLocation: [6, 13],
    drops: false,
    requirements: {
      STR: 190,
      DEX: 183,
      WIS: 101,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
      DEATH: 2,
    },
  },
  {
    name: "[AP] Hudion Shin Armor",
    tags: ["LEGS"],
    level: 13,
    iconLocation: [5, 14],
    drops: false,
    requirements: {
      STR: 190,
      DEX: 183,
      WIS: 101,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
      DEATH: 2,
    },
  },
  // T14
  {
    name: "[AP] Strife Helmet",
    tags: ["HEAD/FEET"],
    level: 14,
    iconLocation: [5, 15],
    drops: false,
    requirements: {
      STR: 205,
      DEX: 198,
      WIS: 109,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
      DEATH: 6,
    },
  },
  {
    name: "[AP] Strife Chest Armor",
    tags: ["BODY"],
    level: 14,
    iconLocation: [5, 13],
    drops: false,
    requirements: {
      STR: 205,
      DEX: 198,
      WIS: 109,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
      DEATH: 6,
    },
  },
  {
    name: "[AP] Strife Bracers",
    tags: ["HANDS"],
    level: 14,
    iconLocation: [6, 13],
    drops: false,
    requirements: {
      STR: 205,
      DEX: 198,
      WIS: 109,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
      DEATH: 6,
    },
  },
  {
    name: "[AP] Strife Shin Armor",
    tags: ["LEGS"],
    level: 14,
    iconLocation: [5, 14],
    drops: false,
    requirements: {
      STR: 205,
      DEX: 198,
      WIS: 109,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
      DEATH: 6,
    },
  },
  // T15
  {
    name: "[AP] Crom Helmet",
    tags: ["HEAD/FEET"],
    level: 15,
    iconLocation: [5, 15],
    drops: false,
    requirements: {
      STR: 225,
      DEX: 225,
      WIS: 117,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
      DEATH: 9,
    },
  },
  {
    name: "[AP] Crom Chest Armor",
    tags: ["BODY"],
    level: 15,
    iconLocation: [5, 13],
    drops: false,
    requirements: {
      STR: 225,
      DEX: 225,
      WIS: 117,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
      DEATH: 9,
    },
  },
  {
    name: "[AP] Crom Bracers",
    tags: ["HANDS"],
    level: 15,
    iconLocation: [6, 13],
    drops: false,
    requirements: {
      STR: 225,
      DEX: 225,
      WIS: 117,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
      DEATH: 9,
    },
  },
  {
    name: "[AP] Crom Shin Armor",
    tags: ["LEGS"],
    level: 15,
    iconLocation: [5, 14],
    drops: false,
    requirements: {
      STR: 225,
      DEX: 225,
      WIS: 117,
    },
    defenses: {
      NORMAL: 19,
      RUNE: 9,
      DEATH: 9,
    },
  },
];

for (const item of apArmor) {
  item.race = "AP";
  item.tags.push("ARMOR");
}

export default apArmor;
