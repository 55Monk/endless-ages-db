import { DamageType, Element } from "./shared.ts";

export type DropRate = "ALWAYS" | "COMMON" | "UNCOMMON" | "RARE";

export type Drop = {
  name: string;
  rate: DropRate;
};

export type Monster = {
  name: string;
  level: number;
  aggro: boolean;
  race: string;
  xpRate: number;
  health: number;
  defenses: Record<Element, number>;
  damage: {
    directElement?: DamageType;
    directAmount?: number;
    splashElement?: DamageType;
    splashAmount?: number;
    reloadDurationSeconds?: number;
    dps?: number;
  };
  loot: {
    creditRange: [number, number];
    drops: Drop[];
  };
};

export const monsters: Monster[] = [
  {
    name: "Flob",
    level: 1,
    aggro: false,
    race: "Kzon",
    xpRate: 5,
    health: 20,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 14,
    },
    loot: {
      creditRange: [1, 5],
      drops: [
        {
          name: "Flob Shell",
          rate: "ALWAYS",
        },
        {
          name: "Agate",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Aqualaz",
    level: 1,
    aggro: false,
    race: "Lazeel",
    xpRate: 10,
    health: 20,
    defenses: {
      NORMAL: 0,
      FIRE: 0,
      WATER: 0,
      RUNE: 0,
      RELIC: 0,
      EARTH: 0,
      AIR: 0,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 14,
    },
    loot: {
      creditRange: [1, 5],
      drops: [
        {
          name: "Aqualaz Shell",
          rate: "RARE",
        },
        {
          name: "Agate",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Infant Stount",
    level: 2,
    aggro: false,
    race: "Hipion",
    xpRate: 29,
    health: 40,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 16,
    },
    loot: {
      creditRange: [2, 10],
      drops: [
        {
          name: "Infant Stount Tail",
          rate: "ALWAYS",
        },
        {
          name: "*L 2 head armor",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Clegurk",
    level: 2,
    aggro: false,
    race: "Midion",
    xpRate: 14,
    health: 50,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 16,
    },
    loot: {
      creditRange: [2, 10],
      drops: [
        {
          name: "Clegurk Tongue",
          rate: "ALWAYS",
        },
        {
          name: "Orb of Clegurk [L2]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Amberlaz",
    level: 2,
    aggro: false,
    race: "Lazeel",
    xpRate: 29,
    health: 20,
    defenses: {
      NORMAL: 0,
      FIRE: 0,
      WATER: 0,
      RUNE: 0,
      RELIC: 0,
      EARTH: 0,
      AIR: 0,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 16,
    },
    loot: {
      creditRange: [2, 10],
      drops: [
        {
          name: "Amberlaz Shell",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Necrolaz",
    level: 2,
    aggro: true,
    race: "Lazeel",
    xpRate: 29,
    health: 200,
    defenses: {
      NORMAL: 90,
      FIRE: 0,
      WATER: 0,
      RUNE: 0,
      RELIC: 0,
      EARTH: 0,
      AIR: 0,
      DEATH: 90,
    },
    damage: {
      directElement: "DEATH",
      directAmount: 14,
    },
    loot: {
      creditRange: [2, 10],
      drops: [
        {
          name: "Necrolaz Shell",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Klondon",
    level: 3,
    aggro: false,
    race: "Cribuant",
    xpRate: 18,
    health: 100,
    defenses: {
      NORMAL: 50,
      FIRE: 0,
      WATER: 90,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 18,
    },
    loot: {
      creditRange: [5, 15],
      drops: [
        {
          name: "Klondon Meat",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Infant Dilirium",
    level: 3,
    aggro: true,
    race: "Pike",
    xpRate: 36,
    health: 40,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 0,
      RUNE: 50,
      RELIC: 90,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 18,
    },
    loot: {
      creditRange: [5, 15],
      drops: [
        {
          name: "Infant Dilirium Eyes",
          rate: "ALWAYS",
        },
        {
          name: "Orb of Infant Dilirium [L3]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Vigon",
    level: 3,
    aggro: false,
    race: "Trapon",
    xpRate: 40,
    health: 500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 18,
    },
    loot: {
      creditRange: [5, 15],
      drops: [
        {
          name: "Vigon Shell",
          rate: "ALWAYS",
        },
        {
          name: "*L 6 thigh armor",
          rate: "RARE",
        },
        {
          name: "Orb of Vigon [L3]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Soilaz",
    level: 3,
    aggro: false,
    race: "Lazeel",
    xpRate: 36,
    health: 20,
    defenses: {
      NORMAL: 0,
      FIRE: 0,
      WATER: 0,
      RUNE: 0,
      RELIC: 0,
      EARTH: 0,
      AIR: 0,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 18,
    },
    loot: {
      creditRange: [5, 15],
      drops: [
        {
          name: "Soilaz Shell",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Fadun",
    level: 4,
    aggro: true,
    race: "Blod",
    xpRate: 43,
    health: 100,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 0,
      EARTH: 90,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 20,
    },
    loot: {
      creditRange: [10, 25],
      drops: [
        {
          name: "Fadun Plasma",
          rate: "ALWAYS",
        },
        {
          name: "*L 2 chest armor",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Didon",
    level: 4,
    aggro: true,
    race: "Blod",
    xpRate: 43,
    health: 150,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 0,
      EARTH: 90,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 20,
    },
    loot: {
      creditRange: [10, 25],
      drops: [
        {
          name: "Didon Plasma",
          rate: "ALWAYS",
        },
        {
          name: "Aquamarine",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Valdron",
    level: 4,
    aggro: false,
    race: "Cribuant",
    xpRate: 21,
    health: 200,
    defenses: {
      NORMAL: 50,
      FIRE: 0,
      WATER: 90,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 20,
    },
    loot: {
      creditRange: [10, 25],
      drops: [
        {
          name: "Valdron Meat",
          rate: "ALWAYS",
        },
        {
          name: "Orb of Valdron [L4]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Ean",
    level: 4,
    aggro: false,
    race: "Dion",
    xpRate: 43,
    health: 140,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 90,
      RELIC: 50,
      EARTH: 50,
      AIR: 0,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 20,
    },
    loot: {
      creditRange: [10, 25],
      drops: [
        {
          name: "Ean Meat",
          rate: "ALWAYS",
        },
        {
          name: "*L 2 gauntlets armor",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Gustlaz",
    level: 4,
    aggro: false,
    race: "Lazeel",
    xpRate: 43,
    health: 20,
    defenses: {
      NORMAL: 0,
      FIRE: 0,
      WATER: 0,
      RUNE: 0,
      RELIC: 0,
      EARTH: 0,
      AIR: 0,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 20,
    },
    loot: {
      creditRange: [10, 25],
      drops: [
        {
          name: "Gustlaz Shell",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Naton",
    level: 5,
    aggro: false,
    race: "Kzon",
    xpRate: 29,
    health: 300,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 22,
    },
    loot: {
      creditRange: [15, 75],
      drops: [
        {
          name: "Naton Shell",
          rate: "ALWAYS",
        },
        {
          name: "*L 2 thighs armor",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Neglik",
    level: 5,
    aggro: false,
    race: "Nopon",
    xpRate: 29,
    health: 50,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 22,
    },
    loot: {
      creditRange: [15, 75],
      drops: [
        {
          name: "Neglik Stinger",
          rate: "ALWAYS",
        },
        {
          name: "Orb of Neglik [L5]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Ligon",
    level: 5,
    aggro: true,
    race: "Blod",
    xpRate: 107,
    health: 1000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 0,
      EARTH: 90,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 22,
    },
    loot: {
      creditRange: [15, 75],
      drops: [
        {
          name: "Ligon Plasma",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Vilidon",
    level: 5,
    aggro: false,
    race: "Cribuant",
    xpRate: 29,
    health: 500,
    defenses: {
      NORMAL: 50,
      FIRE: 0,
      WATER: 90,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 22,
    },
    loot: {
      creditRange: [15, 75],
      drops: [
        {
          name: "Vilidon Meat",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Godion",
    level: 5,
    aggro: true,
    race: "Grounce",
    xpRate: 29,
    health: 100,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 22,
    },
    loot: {
      creditRange: [15, 75],
      drops: [
        {
          name: "Ear of Godion",
          rate: "ALWAYS",
        },
        {
          name: "[AP] Sirdar Ring Grounce",
          rate: "RARE",
        },
        {
          name: "[AP] Sirdar Amulet Grounce",
          rate: "RARE",
        },
        {
          name: "Cornelian",
          rate: "RARE",
        },
        {
          name: "Orb of Godion [L5]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Lazeel",
    level: 5,
    aggro: false,
    race: "Lazeel",
    xpRate: 100,
    health: 160,
    defenses: {
      NORMAL: 0,
      FIRE: 0,
      WATER: 0,
      RUNE: 0,
      RELIC: 0,
      EARTH: 0,
      AIR: 0,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 22,
    },
    loot: {
      creditRange: [15, 75],
      drops: [],
    },
  },
  {
    name: "Sliglith",
    level: 6,
    aggro: true,
    race: "Unknown",
    xpRate: 40,
    health: 1500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 14,
    },
    loot: {
      creditRange: [10, 100],
      drops: [
        {
          name: "Sliglith Beak",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Vavalon",
    level: 6,
    aggro: true,
    race: "Unknown",
    xpRate: 40,
    health: 1500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 14,
    },
    loot: {
      creditRange: [10, 100],
      drops: [
        {
          name: "Vavalon Beak",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Tolplop",
    level: 6,
    aggro: true,
    race: "Unknown",
    xpRate: 40,
    health: 1500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 14,
    },
    loot: {
      creditRange: [10, 100],
      drops: [
        {
          name: "Tolplop Beak",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Viskpan",
    level: 6,
    aggro: true,
    race: "Unknown",
    xpRate: 100,
    health: 3000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 14,
    },
    loot: {
      creditRange: [10, 100],
      drops: [
        {
          name: "Visgate Horn",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Sub1",
    level: 6,
    aggro: true,
    race: "Bubblesub",
    xpRate: 74,
    health: 5000,
    defenses: {
      NORMAL: 50,
      FIRE: 0,
      WATER: 0,
      RUNE: 0,
      RELIC: 0,
      EARTH: 0,
      AIR: 0,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 26,
    },
    loot: {
      creditRange: [10, 100],
      drops: [],
    },
  },
  {
    name: "Elgon",
    level: 6,
    aggro: false,
    race: "Dion",
    xpRate: 149,
    health: 550,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 90,
      RELIC: 50,
      EARTH: 50,
      AIR: 0,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 26,
    },
    loot: {
      creditRange: [20, 150],
      drops: [
        {
          name: "Elgon Meat",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Stount",
    level: 6,
    aggro: false,
    race: "Hipion",
    xpRate: 64,
    health: 160,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 26,
    },
    loot: {
      creditRange: [20, 150],
      drops: [
        {
          name: "Stount Tail",
          rate: "ALWAYS",
        },
        {
          name: "Amber",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Adult Dilirium",
    level: 6,
    aggro: true,
    race: "Pike",
    xpRate: 64,
    health: 400,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 0,
      RUNE: 50,
      RELIC: 90,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 26,
    },
    loot: {
      creditRange: [20, 150],
      drops: [
        {
          name: "Adult Dilirium Tail",
          rate: "ALWAYS",
        },
        {
          name: "Amethyst",
          rate: "RARE",
        },
        {
          name: "Orb of Adult Dilirium [L6]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Brag",
    level: 6,
    aggro: false,
    race: "Trapon",
    xpRate: 59,
    health: 850,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 26,
    },
    loot: {
      creditRange: [20, 150],
      drops: [
        {
          name: "Brag Shell",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Malia Bat",
    level: 6,
    aggro: false,
    race: "Alona",
    xpRate: 73,
    health: 1800,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 0,
      RUNE: 50,
      RELIC: 90,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 26,
    },
    loot: {
      creditRange: [20, 150],
      drops: [
        {
          name: "Malia Bat Wings",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Stontrile",
    level: 6,
    aggro: false,
    race: "Bibid",
    xpRate: 64,
    health: 100,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 0,
      EARTH: 90,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 26,
    },
    loot: {
      creditRange: [20, 150],
      drops: [
        {
          name: "Stontrile Shell",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Guab Fish",
    level: 6,
    aggro: false,
    race: "Infant Guab",
    xpRate: 77,
    health: 150,
    defenses: {
      NORMAL: 0,
      FIRE: 0,
      WATER: 0,
      RUNE: 0,
      RELIC: 0,
      EARTH: 0,
      AIR: 0,
      DEATH: 0,
    },
    damage: {
      directElement: "WATER",
      directAmount: 26,
    },
    loot: {
      creditRange: [20, 150],
      drops: [],
    },
  },
  {
    name: "Gope",
    level: 7,
    aggro: false,
    race: "Cribuant",
    xpRate: 37,
    health: 2500,
    defenses: {
      NORMAL: 50,
      FIRE: 0,
      WATER: 90,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 30,
    },
    loot: {
      creditRange: [25, 225],
      drops: [
        {
          name: "Gope Meat",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Shrite",
    level: 7,
    aggro: true,
    race: "Gid",
    xpRate: 74,
    health: 1400,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 30,
    },
    loot: {
      creditRange: [25, 225],
      drops: [
        {
          name: "Shrite Hide",
          rate: "ALWAYS",
        },
        {
          name: "Citrine",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Slabon",
    level: 7,
    aggro: false,
    race: "Kzon",
    xpRate: 54,
    health: 1500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 30,
    },
    loot: {
      creditRange: [25, 225],
      drops: [
        {
          name: "Slabon Shell",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Nigon",
    level: 7,
    aggro: false,
    race: "Nopon",
    xpRate: 37,
    health: 300,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 30,
    },
    loot: {
      creditRange: [25, 225],
      drops: [
        {
          name: "Nigon Shell",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Shockion",
    level: 7,
    aggro: true,
    race: "Shapra",
    xpRate: 74,
    health: 600,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 0,
      RUNE: 50,
      RELIC: 90,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 30,
    },
    loot: {
      creditRange: [25, 225],
      drops: [
        {
          name: "Shockion Claws",
          rate: "ALWAYS",
        },
        {
          name: "Chalcedony",
          rate: "RARE",
        },
        {
          name: "Orb of Shockion [L7]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Insane Shockion",
    level: 7,
    aggro: true,
    race: "Shapra",
    xpRate: 74,
    health: 600,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 0,
      RUNE: 50,
      RELIC: 90,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 30,
    },
    loot: {
      creditRange: [25, 225],
      drops: [
        {
          name: "Shockion Claws",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Uline",
    level: 7,
    aggro: false,
    race: "Trapon",
    xpRate: 52,
    health: 1200,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 30,
    },
    loot: {
      creditRange: [25, 225],
      drops: [
        {
          name: "Uline Shell",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Si Bat",
    level: 7,
    aggro: false,
    race: "Alona",
    xpRate: 74,
    health: 800,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 0,
      RUNE: 50,
      RELIC: 90,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 30,
    },
    loot: {
      creditRange: [25, 225],
      drops: [
        {
          name: "Si Tail",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Quadoty",
    level: 7,
    aggro: true,
    race: "Quadoty",
    xpRate: 74,
    health: 520,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 90,
      RELIC: 0,
      EARTH: 50,
      AIR: 50,
      DEATH: 90,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 30,
    },
    loot: {
      creditRange: [25, 225],
      drops: [],
    },
  },
  {
    name: "Gonlon",
    level: 8,
    aggro: true,
    race: "Blod",
    xpRate: 157,
    health: 3500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 0,
      EARTH: 90,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 40,
    },
    loot: {
      creditRange: [50, 500],
      drops: [
        {
          name: "Gonlon Plasma",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Jouster",
    level: 8,
    aggro: true,
    race: "Braun",
    xpRate: 77,
    health: 1500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 40,
    },
    loot: {
      creditRange: [50, 500],
      drops: [
        {
          name: "Jouster Tongue",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Skoid",
    level: 8,
    aggro: false,
    race: "Dion",
    xpRate: 169,
    health: 2000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 90,
      RELIC: 50,
      EARTH: 50,
      AIR: 0,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 40,
    },
    loot: {
      creditRange: [50, 500],
      drops: [
        {
          name: "Skoid Meat",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Sgod",
    level: 8,
    aggro: false,
    race: "Nopon",
    xpRate: 39,
    health: 500,
    defenses: {
      NORMAL: 90,
      FIRE: 80,
      WATER: 80,
      RUNE: 50,
      RELIC: 80,
      EARTH: 80,
      AIR: 80,
      DEATH: 0,
    },
    damage: {
      directElement: "RUNE",
      directAmount: 40,
    },
    loot: {
      creditRange: [50, 500],
      drops: [
        {
          name: "Sgod Shell",
          rate: "ALWAYS",
        },
        {
          name: "Jade",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Trine",
    level: 8,
    aggro: true,
    race: "Norion",
    xpRate: 77,
    health: 350,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 0,
      EARTH: 90,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 40,
    },
    loot: {
      creditRange: [50, 500],
      drops: [
        {
          name: "Tail of Trine",
          rate: "ALWAYS",
        },
        {
          name: "Orb of Trine [L8]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Ascherion",
    level: 8,
    aggro: true,
    race: "Slone",
    xpRate: 77,
    health: 400,
    defenses: {
      NORMAL: 50,
      FIRE: 0,
      WATER: 90,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 40,
    },
    loot: {
      creditRange: [50, 500],
      drops: [
        {
          name: "Ascherion Venom Sacks",
          rate: "ALWAYS",
        },
        {
          name: "*L 4 gauntlets armor",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Niglon",
    level: 8,
    aggro: false,
    race: "Trapon",
    xpRate: 69,
    health: 2800,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 40,
    },
    loot: {
      creditRange: [50, 500],
      drops: [
        {
          name: "Niglon Shell",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Drakite",
    level: 8,
    aggro: false,
    race: "Agon",
    xpRate: 77,
    health: 550,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 0,
      EARTH: 90,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 40,
    },
    loot: {
      creditRange: [50, 500],
      drops: [
        {
          name: "Drakite Tail",
          rate: "ALWAYS",
        },
        {
          name: "*L 4 thigh armor",
          rate: "RARE",
        },
        {
          name: "Orb of Drakite [L8]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Kidion Bat",
    level: 9,
    aggro: false,
    race: "Alona",
    xpRate: 100,
    health: 2800,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 0,
      RUNE: 50,
      RELIC: 90,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 44,
    },
    loot: {
      creditRange: [60, 800],
      drops: [
        {
          name: "Eyes of Kidion",
          rate: "ALWAYS",
        },
        {
          name: "*L 6 head armor",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Wispion",
    level: 9,
    aggro: false,
    race: "Cribuan",
    xpRate: 159,
    health: 850,
    defenses: {
      NORMAL: 50,
      FIRE: 0,
      WATER: 90,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 44,
    },
    loot: {
      creditRange: [60, 800],
      drops: [
        {
          name: "Wispion Meat",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Scrot",
    level: 9,
    aggro: false,
    race: "Dion",
    xpRate: 184,
    health: 3500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 90,
      RELIC: 50,
      EARTH: 50,
      AIR: 0,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 44,
    },
    loot: {
      creditRange: [60, 800],
      drops: [
        {
          name: "Scrot Meat",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Lidion",
    level: 9,
    aggro: false,
    race: "Kzon",
    xpRate: 57,
    health: 3600,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 44,
    },
    loot: {
      creditRange: [60, 800],
      drops: [
        {
          name: "Lidion Shell",
          rate: "ALWAYS",
        },
        {
          name: "*L 8 gauntlets armor",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Taldon",
    level: 9,
    aggro: false,
    race: "Nopon",
    xpRate: 50,
    health: 1000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 44,
    },
    loot: {
      creditRange: [60, 800],
      drops: [
        {
          name: "Taldon Eyes",
          rate: "ALWAYS",
        },
        {
          name: "Orb of Taldon [L9]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Trisk",
    level: 9,
    aggro: true,
    race: "Philion",
    xpRate: 50,
    health: 1000,
    defenses: {
      NORMAL: 50,
      FIRE: 0,
      WATER: 90,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 44,
    },
    loot: {
      creditRange: [60, 800],
      drops: [
        {
          name: "Trisk Tentacles",
          rate: "ALWAYS",
        },
        {
          name: "*L 6 chest armor",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Adult Shockion",
    level: 9,
    aggro: true,
    race: "Shapra",
    xpRate: 100,
    health: 1600,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 0,
      RUNE: 50,
      RELIC: 90,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 44,
    },
    loot: {
      creditRange: [60, 800],
      drops: [
        {
          name: "Adult Shockion Claw",
          rate: "ALWAYS",
        },
        {
          name: "*L 6 gauntlets armor",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Mayzora",
    level: 9,
    aggro: true,
    race: "Bridion",
    xpRate: 50,
    health: 4400,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 44,
    },
    loot: {
      creditRange: [60, 800],
      drops: [
        {
          name: "Mayzora Spine",
          rate: "ALWAYS",
        },
        {
          name: "*L 8 chest armor",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Uato",
    level: 9,
    aggro: false,
    race: "Cribuan",
    xpRate: 179,
    health: 3000,
    defenses: {
      NORMAL: 50,
      FIRE: 0,
      WATER: 90,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 44,
    },
    loot: {
      creditRange: [60, 800],
      drops: [
        {
          name: "Uato Meat",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Skion",
    level: 10,
    aggro: false,
    race: "Dion",
    xpRate: 154,
    health: 800,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 90,
      RELIC: 50,
      EARTH: 50,
      AIR: 0,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 48,
    },
    loot: {
      creditRange: [80, 1000],
      drops: [
        {
          name: "Skion Meat",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Clegorn",
    level: 10,
    aggro: true,
    race: "Midion",
    xpRate: 64,
    health: 2250,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 48,
    },
    loot: {
      creditRange: [80, 1000],
      drops: [
        {
          name: "Clegorn Tongue",
          rate: "ALWAYS",
        },
        {
          name: "[AP] Master Amulet Midion",
          rate: "RARE",
        },
        {
          name: "[AP] Sirdar Ring Midion",
          rate: "RARE",
        },
        {
          name: "Orb of Clegorn [L10]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Mad Negliks",
    level: 10,
    aggro: true,
    race: "Nopon",
    xpRate: 64,
    health: 500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 48,
    },
    loot: {
      creditRange: [80, 1000],
      drops: [
        {
          name: "Mad Neglik Stingers",
          rate: "ALWAYS",
        },
        {
          name: "*L 4 chest armor",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Eyemba",
    level: 10,
    aggro: true,
    race: "Norion",
    xpRate: 196,
    health: 3000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 0,
      EARTH: 90,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 48,
    },
    loot: {
      creditRange: [80, 1000],
      drops: [
        {
          name: "Eye of Eyemba",
          rate: "ALWAYS",
        },
        {
          name: "Peridot",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Crid",
    level: 10,
    aggro: true,
    race: "Philion",
    xpRate: 126,
    health: 1500,
    defenses: {
      NORMAL: 50,
      FIRE: 0,
      WATER: 90,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 48,
    },
    loot: {
      creditRange: [80, 1000],
      drops: [
        {
          name: "Crid Eyes",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Elite Ascherion",
    level: 10,
    aggro: true,
    race: "Slone",
    xpRate: 185,
    health: 2000,
    defenses: {
      NORMAL: 50,
      FIRE: 0,
      WATER: 90,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 48,
    },
    loot: {
      creditRange: [80, 1000],
      drops: [
        {
          name: "Elite Ascherion Venom Sacks",
          rate: "ALWAYS",
        },
        {
          name: "Onyx (Black)",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Pidion",
    level: 10,
    aggro: true,
    race: "Braun",
    xpRate: 129,
    health: 500,
    defenses: {
      NORMAL: 90,
      FIRE: 80,
      WATER: 80,
      RUNE: 50,
      RELIC: 80,
      EARTH: 80,
      AIR: 80,
      DEATH: 0,
    },
    damage: {
      directElement: "RUNE",
      directAmount: 48,
    },
    loot: {
      creditRange: [80, 1000],
      drops: [
        {
          name: "Pidion Eye",
          rate: "ALWAYS",
        },
        {
          name: "Garnet",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Eyezora",
    level: 10,
    aggro: true,
    race: "Bron",
    xpRate: 204,
    health: 900,
    defenses: {
      NORMAL: 90,
      FIRE: 80,
      WATER: 80,
      RUNE: 50,
      RELIC: 80,
      EARTH: 80,
      AIR: 80,
      DEATH: 0,
    },
    damage: {
      directElement: "RUNE",
      directAmount: 48,
    },
    loot: {
      creditRange: [80, 1000],
      drops: [
        {
          name: "Eyezora Eye",
          rate: "ALWAYS",
        },
        {
          name: "Lapis Lazuli",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Pridan",
    level: 10,
    aggro: false,
    race: "Dion",
    xpRate: 30,
    health: 1500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 90,
      RELIC: 50,
      EARTH: 50,
      AIR: 0,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 48,
    },
    loot: {
      creditRange: [80, 1000],
      drops: [
        {
          name: "Pridan Meat",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Crition",
    level: 11,
    aggro: false,
    race: "Jion",
    xpRate: 86,
    health: 750,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 0,
      EARTH: 90,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 52,
    },
    loot: {
      creditRange: [100, 1500],
      drops: [
        {
          name: "Crition Tentacles",
          rate: "ALWAYS",
        },
        {
          name: "Aventurine",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Slimdon",
    level: 11,
    aggro: true,
    race: "Nount",
    xpRate: 171,
    health: 4000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 90,
      RELIC: 50,
      EARTH: 50,
      AIR: 0,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 52,
    },
    loot: {
      creditRange: [100, 1500],
      drops: [
        {
          name: "Slimdon Claws",
          rate: "ALWAYS",
        },
        {
          name: "*L 8 thigh armor",
          rate: "RARE",
        },
        {
          name: "Labrodorite",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Deathbot",
    level: 11,
    aggro: true,
    race: "Quantbion",
    xpRate: 171,
    health: 1000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 52,
    },
    loot: {
      creditRange: [100, 1500],
      drops: [
        {
          name: "Deathbot Head",
          rate: "ALWAYS",
        },
        {
          name: "Orb of Deathbot [L11]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Hasten",
    level: 11,
    aggro: false,
    race: "Rision",
    xpRate: 150,
    health: 700,
    defenses: {
      NORMAL: 50,
      FIRE: 0,
      WATER: 90,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 52,
    },
    loot: {
      creditRange: [100, 1500],
      drops: [
        {
          name: "Hasten Wings",
          rate: "ALWAYS",
        },
        {
          name: "Iolite",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Elite Shockion",
    level: 11,
    aggro: true,
    race: "Shapra",
    xpRate: 171,
    health: 3500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 0,
      RUNE: 50,
      RELIC: 90,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 52,
    },
    loot: {
      creditRange: [100, 1500],
      drops: [
        {
          name: "Elite Shockion Head",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Crosp",
    level: 11,
    aggro: false,
    race: "Crosp",
    xpRate: 148,
    health: 5000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 52,
    },
    loot: {
      creditRange: [100, 1500],
      drops: [
        {
          name: "Crosp Horn",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Clidion",
    level: 11,
    aggro: true,
    race: "Grounce",
    xpRate: 86,
    health: 1000,
    defenses: {
      NORMAL: 90,
      FIRE: 80,
      WATER: 80,
      RUNE: 50,
      RELIC: 80,
      EARTH: 80,
      AIR: 80,
      DEATH: 0,
    },
    damage: {
      directElement: "RUNE",
      directAmount: 52,
    },
    loot: {
      creditRange: [100, 1500],
      drops: [
        {
          name: "Clidion Feet",
          rate: "ALWAYS",
        },
        {
          name: "Orb of Clidion [L11]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Lauder",
    level: 11,
    aggro: false,
    race: "Hipion",
    xpRate: 171,
    health: 650,
    defenses: {
      NORMAL: 90,
      FIRE: 80,
      WATER: 80,
      RUNE: 50,
      RELIC: 80,
      EARTH: 80,
      AIR: 80,
      DEATH: 0,
    },
    damage: {
      directElement: "RUNE",
      directAmount: 52,
    },
    loot: {
      creditRange: [100, 1500],
      drops: [
        {
          name: "Lauder Spikes",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Sarin (Ranged)",
    level: 12,
    aggro: true,
    race: "Lagion",
    xpRate: 261,
    health: 3500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 56,
    },
    loot: {
      creditRange: [150, 2000],
      drops: [
        {
          name: "Heart of Sarin",
          rate: "ALWAYS",
        },
        {
          name: "Evonsa Vial",
          rate: "RARE",
        },
        {
          name: "Orb of Sarin [L12]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Sarin (Melee)",
    level: 12,
    aggro: true,
    race: "Lagion",
    xpRate: 261,
    health: 3500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 56,
    },
    loot: {
      creditRange: [0, 0],
      drops: [
        {
          name: "Sarin Krognch Axe",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Phsion",
    level: 12,
    aggro: true,
    race: "Philion",
    xpRate: 150,
    health: 2400,
    defenses: {
      NORMAL: 50,
      FIRE: 0,
      WATER: 90,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 56,
    },
    loot: {
      creditRange: [150, 2000],
      drops: [
        {
          name: "Phsion Wings",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Deathbot01",
    level: 12,
    aggro: true,
    race: "Quantbion",
    xpRate: 214,
    health: 1500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 56,
    },
    loot: {
      creditRange: [150, 2000],
      drops: [
        {
          name: "Deathbot01 Head",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Wartraon",
    level: 12,
    aggro: false,
    race: "Clin",
    xpRate: 150,
    health: 3500,
    defenses: {
      NORMAL: 90,
      FIRE: 90,
      WATER: 90,
      RUNE: 0,
      RELIC: 90,
      EARTH: 90,
      AIR: 90,
      DEATH: 50,
    },
    damage: {
      directElement: "DEATH",
      directAmount: 56,
    },
    loot: {
      creditRange: [150, 2000],
      drops: [
        {
          name: "Blood of Crom",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Sihopin",
    level: 12,
    aggro: false,
    race: "Clonsan",
    xpRate: 150,
    health: 1500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 56,
    },
    loot: {
      creditRange: [150, 2000],
      drops: [
        {
          name: "Sihopin Core",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Agron",
    level: 12,
    aggro: false,
    race: "Hipion",
    xpRate: 200,
    health: 1000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 56,
    },
    loot: {
      creditRange: [150, 2000],
      drops: [
        {
          name: "Agron Beak",
          rate: "ALWAYS",
        },
        {
          name: "*L 4 head armor",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Siltron",
    level: 12,
    aggro: true,
    race: "Norion",
    xpRate: 244,
    health: 5500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 0,
      EARTH: 90,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 56,
    },
    loot: {
      creditRange: [150, 2000],
      drops: [
        {
          name: "Siltron Fin",
          rate: "RARE",
        },
        {
          name: "Siltron Hide",
          rate: "RARE",
        },
        {
          name: "Eye of the Soul",
          rate: "RARE",
        },
        {
          name: "Blue Gem",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Elder Shockion",
    level: 13,
    aggro: true,
    race: "Shapra",
    xpRate: 288,
    health: 15000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 0,
      RUNE: 50,
      RELIC: 90,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 60,
    },
    loot: {
      creditRange: [200, 2500],
      drops: [
        {
          name: "Elder Shockion Head",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Deathbot02",
    level: 13,
    aggro: true,
    race: "Quantbion",
    xpRate: 220,
    health: 4000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 60,
    },
    loot: {
      creditRange: [200, 2500],
      drops: [
        {
          name: "Deathbot Chest",
          rate: "ALWAYS",
        },
        {
          name: "Moonstone",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Skarshar",
    level: 13,
    aggro: true,
    race: "Rayzion",
    xpRate: 200,
    health: 2000,
    defenses: {
      NORMAL: 90,
      FIRE: 80,
      WATER: 80,
      RUNE: 50,
      RELIC: 80,
      EARTH: 80,
      AIR: 80,
      DEATH: 0,
    },
    damage: {
      directElement: "RUNE",
      directAmount: 60,
    },
    loot: {
      creditRange: [200, 2500],
      drops: [
        {
          name: "Skarshar Head",
          rate: "ALWAYS",
        },
        {
          name: "Orb of Skarshar [L13]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Mad Kidion",
    level: 13,
    aggro: true,
    race: "Alona",
    xpRate: 300,
    health: 8000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 0,
      RUNE: 50,
      RELIC: 90,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 60,
    },
    loot: {
      creditRange: [200, 2500],
      drops: [
        {
          name: "Mad Kidion Heart",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Dark Jouster",
    level: 13,
    aggro: true,
    race: "Braun",
    xpRate: 190,
    health: 5500,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "RUNE",
      directAmount: 60,
    },
    loot: {
      creditRange: [200, 2500],
      drops: [
        {
          name: "Dark Jouster Heart",
          rate: "ALWAYS",
        },
        {
          name: "Evonsa Vial",
          rate: "RARE",
        },
        {
          name: "Orb of Dark Jouster [L13]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Rigprion",
    level: 13,
    aggro: true,
    race: "Grounce",
    xpRate: 210,
    health: 1500,
    defenses: {
      NORMAL: 90,
      FIRE: 90,
      WATER: 90,
      RUNE: 0,
      RELIC: 90,
      EARTH: 90,
      AIR: 90,
      DEATH: 50,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 64,
    },
    loot: {
      creditRange: [200, 2500],
      drops: [
        {
          name: "Rigprion Chest",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Farion",
    level: 13,
    aggro: true,
    race: "Hipion",
    xpRate: 276,
    health: 5500,
    defenses: {
      NORMAL: 90,
      FIRE: 80,
      WATER: 80,
      RUNE: 50,
      RELIC: 80,
      EARTH: 80,
      AIR: 80,
      DEATH: 0,
    },
    damage: {
      directElement: "RUNE",
      directAmount: 60,
    },
    loot: {
      creditRange: [200, 2500],
      drops: [
        {
          name: "Farion Tail",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Skarion",
    level: 14,
    aggro: true,
    race: "Rayzion",
    xpRate: 250,
    health: 3500,
    defenses: {
      NORMAL: 90,
      FIRE: 80,
      WATER: 80,
      RUNE: 50,
      RELIC: 80,
      EARTH: 80,
      AIR: 80,
      DEATH: 0,
    },
    damage: {
      directElement: "RUNE",
      directAmount: 64,
    },
    loot: {
      creditRange: [300, 2700],
      drops: [
        {
          name: "Skarion Head",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Hidion",
    level: 14,
    aggro: false,
    race: "Rision",
    xpRate: 160,
    health: 3000,
    defenses: {
      NORMAL: 50,
      FIRE: 0,
      WATER: 90,
      RUNE: 50,
      RELIC: 50,
      EARTH: 50,
      AIR: 50,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 64,
    },
    loot: {
      creditRange: [300, 2700],
      drops: [
        {
          name: "Hidion Blood",
          rate: "ALWAYS",
        },
        {
          name: "*L 8 head armor",
          rate: "RARE",
        },
        {
          name: "Lemon Quartz",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Kandra",
    level: 14,
    aggro: true,
    race: "Grounce",
    xpRate: 204,
    health: 3500,
    defenses: {
      NORMAL: 90,
      FIRE: 90,
      WATER: 90,
      RUNE: 0,
      RELIC: 90,
      EARTH: 90,
      AIR: 90,
      DEATH: 50,
    },
    damage: {
      directElement: "DEATH",
      directAmount: 64,
    },
    loot: {
      creditRange: [300, 2700],
      drops: [
        {
          name: "Kandra Brain",
          rate: "ALWAYS",
        },
        {
          name: "Orb of Kandra [L14]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Skrakashkay",
    level: 14,
    aggro: true,
    race: "Rayzion",
    xpRate: 250,
    health: 5500,
    defenses: {
      NORMAL: 90,
      FIRE: 90,
      WATER: 90,
      RUNE: 0,
      RELIC: 90,
      EARTH: 90,
      AIR: 90,
      DEATH: 50,
    },
    damage: {
      directElement: "DEATH",
      directAmount: 64,
    },
    loot: {
      creditRange: [300, 2700],
      drops: [
        {
          name: "Skrakashkay Heart",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "High Priest of Cron",
    level: 15,
    aggro: true,
    race: "Lontaun",
    xpRate: 400,
    health: 4000,
    defenses: {
      NORMAL: 90,
      FIRE: 90,
      WATER: 90,
      RUNE: 0,
      RELIC: 90,
      EARTH: 90,
      AIR: 90,
      DEATH: 50,
    },
    damage: {
      directElement: "DEATH",
      directAmount: 64,
    },
    loot: {
      creditRange: [1000, 3000],
      drops: [
        {
          name: "High Priest Plasma",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Trisk Elite",
    level: 15,
    aggro: true,
    race: "Philion",
    xpRate: 500,
    health: 35000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "EARTH",
      directAmount: 72,
    },
    loot: {
      creditRange: [1000, 3000],
      drops: [
        {
          name: "Tear of the Dark Sky",
          rate: "RARE",
        },
        {
          name: "Trisk Elite Egg",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Grision",
    level: 15,
    aggro: true,
    race: "Braun",
    xpRate: 312,
    health: 2500,
    defenses: {
      NORMAL: 90,
      FIRE: 90,
      WATER: 90,
      RUNE: 0,
      RELIC: 90,
      EARTH: 90,
      AIR: 90,
      DEATH: 50,
    },
    damage: {
      directElement: "DEATH",
      directAmount: 72,
    },
    loot: {
      creditRange: [1000, 3000],
      drops: [
        {
          name: "Grision Plasma",
          rate: "ALWAYS",
        },
        {
          name: "Orb of Grision [L15]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Rancon",
    level: 15,
    aggro: true,
    race: "Hijon",
    xpRate: 400,
    health: 8000,
    defenses: {
      NORMAL: 90,
      FIRE: 80,
      WATER: 80,
      RUNE: 50,
      RELIC: 80,
      EARTH: 80,
      AIR: 80,
      DEATH: 0,
    },
    damage: {
      directElement: "RUNE",
      directAmount: 72,
    },
    loot: {
      creditRange: [1000, 3000],
      drops: [
        {
          name: "Rancon Hide",
          rate: "ALWAYS",
        },
        {
          name: "Orb of Rancon [L15]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Skaa",
    level: 15,
    aggro: true,
    race: "Rayzion",
    xpRate: 250,
    health: 15000,
    defenses: {
      NORMAL: 90,
      FIRE: 90,
      WATER: 90,
      RUNE: 0,
      RELIC: 90,
      EARTH: 90,
      AIR: 90,
      DEATH: 50,
    },
    damage: {
      directElement: "DEATH",
      directAmount: 72,
    },
    loot: {
      creditRange: [1000, 3000],
      drops: [
        {
          name: "Skaa Eyes",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Tilidion",
    level: 16,
    aggro: true,
    race: "Hijon",
    xpRate: 500,
    health: 16000,
    defenses: {
      NORMAL: 90,
      FIRE: 90,
      WATER: 90,
      RUNE: 0,
      RELIC: 90,
      EARTH: 90,
      AIR: 90,
      DEATH: 50,
    },
    damage: {
      directElement: "DEATH",
      directAmount: 80,
    },
    loot: {
      creditRange: [1500, 5000],
      drops: [
        {
          name: "Tilidion Head",
          rate: "ALWAYS",
        },
        {
          name: "Orb of Tilidion [L16]",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Wright",
    level: 16,
    aggro: true,
    race: "Phedon",
    xpRate: 500,
    health: 2500,
    defenses: {
      NORMAL: 90,
      FIRE: 90,
      WATER: 90,
      RUNE: 0,
      RELIC: 90,
      EARTH: 90,
      AIR: 90,
      DEATH: 50,
    },
    damage: {
      directElement: "DEATH",
      directAmount: 80,
    },
    loot: {
      creditRange: [2500, 5000],
      drops: [
        {
          name: "Wrights Essence",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Ashadra",
    level: 16,
    aggro: true,
    race: "Utron",
    xpRate: 450,
    health: 40000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "EARTH",
      directAmount: 80,
    },
    loot: {
      creditRange: [1500, 5000],
      drops: [
        {
          name: "Ashadra Shell",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Eyezion",
    level: 17,
    aggro: true,
    race: "Bron",
    xpRate: 900,
    health: 50000,
    defenses: {
      NORMAL: 90,
      FIRE: 90,
      WATER: 90,
      RUNE: 0,
      RELIC: 90,
      EARTH: 90,
      AIR: 90,
      DEATH: 50,
    },
    damage: {
      directElement: "DEATH",
      directAmount: 88,
    },
    loot: {
      creditRange: [2500, 5000],
      drops: [
        {
          name: "Eyezion Eye",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Dark Eyemba",
    level: 17,
    aggro: true,
    race: "Norion",
    xpRate: 400,
    health: 50000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 88,
    },
    loot: {
      creditRange: [2500, 5000],
      drops: [
        {
          name: "Scroll of Drakite",
          rate: "RARE",
        },
        {
          name: "Stone of Spirits",
          rate: "RARE",
        },
        {
          name: "Onyx (Red)",
          rate: "RARE",
        },
      ],
    },
  },
  {
    name: "Datro",
    level: 18,
    aggro: true,
    race: "Datro",
    xpRate: 1200,
    health: 100000,
    defenses: {
      NORMAL: 90,
      FIRE: 90,
      WATER: 90,
      RUNE: 0,
      RELIC: 90,
      EARTH: 90,
      AIR: 90,
      DEATH: 50,
    },
    damage: {
      directElement: "EARTH",
      directAmount: 100,
    },
    loot: {
      creditRange: [3000, 6000],
      drops: [
        {
          name: "Datro Tail",
          rate: "ALWAYS",
        },
        {
          name: "Kanasta Key of Retribution",
          rate: "ALWAYS",
        },
        {
          name: "Yellow Gem",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Pridion",
    level: 19,
    aggro: true,
    race: "Braun",
    xpRate: 650,
    health: 60000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "EARTH",
      directAmount: 88,
    },
    loot: {
      creditRange: [3000, 6000],
      drops: [
        {
          name: "Air Rune",
          rate: "ALWAYS",
        },
        {
          name: "Pridion Key of Flight",
          rate: "ALWAYS",
        },
        {
          name: "Pridion Embryo",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Skelcy",
    level: 19,
    aggro: true,
    race: "Eldion",
    xpRate: 600,
    health: 50000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "EARTH",
      directAmount: 88,
    },
    loot: {
      creditRange: [3000, 6000],
      drops: [
        {
          name: "Fire Rune",
          rate: "ALWAYS",
        },
        {
          name: "Skelcy Key of Flight",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Frube",
    level: 19,
    aggro: true,
    race: "Frube",
    xpRate: 500,
    health: 45000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "EARTH",
      directAmount: 88,
    },
    loot: {
      creditRange: [3000, 6000],
      drops: [
        {
          name: "Bio Rune",
          rate: "ALWAYS",
        },
        {
          name: "Frube Key of Flight",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Shipron",
    level: 19,
    aggro: true,
    race: "Gid",
    xpRate: 575,
    health: 45000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "EARTH",
      directAmount: 88,
    },
    loot: {
      creditRange: [3000, 6000],
      drops: [
        {
          name: "Earth Rune",
          rate: "ALWAYS",
        },
        {
          name: "Shipron Key of Flight",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Slate",
    level: 19,
    aggro: true,
    race: "Hijon",
    xpRate: 600,
    health: 55000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "EARTH",
      directAmount: 88,
    },
    loot: {
      creditRange: [3000, 6000],
      drops: [
        {
          name: "Grey Stone Rune",
          rate: "ALWAYS",
        },
        {
          name: "Slate Key of Flight",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Brike",
    level: 19,
    aggro: true,
    race: "Hijon",
    xpRate: 600,
    health: 55000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "EARTH",
      directAmount: 88,
    },
    loot: {
      creditRange: [3000, 6000],
      drops: [
        {
          name: "Blue Stone Rune",
          rate: "ALWAYS",
        },
        {
          name: "Brike Key of Flight",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Zorphion",
    level: 19,
    aggro: true,
    race: "Norion",
    xpRate: 600,
    health: 50000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "EARTH",
      directAmount: 88,
    },
    loot: {
      creditRange: [3000, 6000],
      drops: [
        {
          name: "Water Rune",
          rate: "ALWAYS",
        },
        {
          name: "Zorphion Key of Flight",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Destroyer01",
    level: 19,
    aggro: true,
    race: "Quantbion",
    xpRate: 600,
    health: 50000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "EARTH",
      directAmount: 88,
    },
    loot: {
      creditRange: [3000, 6000],
      drops: [
        {
          name: "Tech Rune",
          rate: "ALWAYS",
        },
        {
          name: "Destroyer01 Key of Flight",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Lord Shraderix",
    level: 19,
    aggro: true,
    race: "Utron",
    xpRate: 500,
    health: 30000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "EARTH",
      directAmount: 88,
    },
    loot: {
      creditRange: [3000, 6000],
      drops: [
        {
          name: "Living Rune",
          rate: "ALWAYS",
        },
      ],
    },
  },
  {
    name: "Zeth",
    level: 19,
    aggro: true,
    race: "Zon",
    xpRate: 600,
    health: 55000,
    defenses: {
      NORMAL: 50,
      FIRE: 50,
      WATER: 50,
      RUNE: 50,
      RELIC: 50,
      EARTH: 0,
      AIR: 90,
      DEATH: 0,
    },
    damage: {
      directElement: "EARTH",
      directAmount: 88,
    },
    loot: {
      creditRange: [3000, 6000],
      drops: [
        {
          name: "Future Rune",
          rate: "ALWAYS",
        },
        {
          name: "Zeth Key of Flight",
          rate: "ALWAYS",
        },
        {
          name: "Tourmaline (Green)",
          rate: "ALWAYS",
        },
      ],
    },
  },
];
