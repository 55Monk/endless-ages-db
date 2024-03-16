import apArmor from "./ap/armor";

export const playerRaces = ["AP", "BL", "HF", "HM"] as const;
export type PlayerRace = (typeof playerRaces)[number];

export const races = [...playerRaces, "SS", "Other"] as const;
export type Race = (typeof races)[number];

export type ItemType = "ARMOR" | "GUN" | "MELEE" | "QI" | "MISC";
type Stat = "STR" | "DEX" | "WIS";
type CraftSkill = "ALCH" | "ENG" | "SMITH";
type Skill =
  | "WT"
  | "MC"
  | "MELEE"
  | "PILOT"
  | "SS"
  | "MAGIC"
  | "FAMILIARS"
  | CraftSkill;
type Requirement = Stat | Skill;
export const elements = [
  "NORMAL",
  "FIRE",
  "WATER",
  "RUNE",
  "RELIC",
  "EARTH",
  "AIR",
  "DEATH",
] as const;
export type Element = (typeof elements)[number];
type DamageType = Element | "HEAL";
type Bonus = Stat | "HEALTH";

export type Item = {
  name: string;
  itemType?: ItemType;
  iconLocation?: [x: number, y: number];
  drops?: boolean;
  marketCost?: number;
  // Requirements to equip/use
  race?: PlayerRace;
  requirements?: Partial<Record<Requirement, number>>;
  // Stats
  defenses?: Partial<Record<Element, number>>;
  bonuses?: Partial<Record<Bonus, number>>;
  damage?: {
    directElement?: DamageType;
    directAmount?: number;
    splashElement?: DamageType;
    splashAmount?: number;
    reloadDurationSeconds: number;
  };
  flightDurationSeconds?: number;
  // How to get, eventually remove and generate from mobs, npcs, and quests
  rewardFrom?: string;
  fromVendor?: string;
  craftedBy?: {
    skill: CraftSkill;
    level: number;
    ingredients: {
      name: string;
      quantity: number;
    }[];
  };
  droppedBy?: {
    name: string;
    rate: number;
  };
};

const items: Item[] = [
  {
    name: "[AP] Ontroytag",
    iconLocation: [14, 9],
    drops: false,
    race: "AP",
    requirements: {
      STR: 10,
      DEX: 10,
      WIS: 20,
    },
    damage: {
      directElement: "NORMAL",
      directAmount: 12,
      reloadDurationSeconds: 0.5,
    },
    fromVendor: "Multiple",
  },
  {
    name: "Peroxi Rebuilder Heal",
    iconLocation: [3, 1],
    drops: true,
    marketCost: 60,
    craftedBy: {
      skill: "ALCH",
      level: 13,
      ingredients: [
        { name: "Perox Flower", quantity: 1 },
        {
          name: "Gena Root",
          quantity: 18,
        },
      ],
    },
    damage: {
      directElement: "HEAL",
      directAmount: 180,
      reloadDurationSeconds: 6,
    },
  },
  {
    name: "Quest Item",
    itemType: "QI",
  },
  {
    name: "Agate",
    iconLocation: [5, 1],
    drops: true,
    marketCost: 150,
    droppedBy: {
      name: "Flob",
      rate: 5,
    },
  },
  {
    name: "[HF] Phision Torso Armor",
    itemType: "ARMOR",
    iconLocation: [0, 13],
    drops: false,
    marketCost: 250000,
    rewardFrom: "11 Armor Quest",
    race: "HF",
    requirements: {
      STR: 165,
      DEX: 155,
      WIS: 78,
    },
    defenses: {
      NORMAL: 22,
      RUNE: 7,
    },
  },
  {
    name: "[AP] Wings of Crom",
    iconLocation: [12, 5],
    drops: false,
    rewardFrom: "Crom Keys",
    race: "AP",
    requirements: {
      PILOT: 2,
    },
    flightDurationSeconds: 51,
  },
  {
    name: "[HF] Netlauncher",
    iconLocation: [5, 4],
    drops: false,
    rewardFrom: "Netlauncher Quest",
    race: "HF",
    requirements: {
      WT: 16,
      STR: 130,
      DEX: 110,
      WIS: 80,
    },
    damage: {
      directElement: "DEATH",
      directAmount: 120,
      splashElement: "NORMAL",
      splashAmount: 60,
      reloadDurationSeconds: 1.93,
    },
  },
  {
    name: "[HF] Ring of Power +20",
    iconLocation: [8, 6],
    drops: false,
    rewardFrom: "Dominion Egg Quest",
    race: "HF",
    bonuses: {
      STR: 20,
    },
  },
];

items.push(...apArmor);

items.forEach((item) => {
  if (!item.iconLocation) {
    switch (item.itemType) {
      case "QI": {
        item.iconLocation = [0, 1];
        break;
      }
    }
  }
});

export function getItemSalePrice(item: Item) {
  return item.marketCost ? Math.floor(item.marketCost / 4) : 0;
}

export function getItemDps(item: Item) {
  if (item.damage) {
    const totalDamage =
      (item.damage.directAmount ?? 0) + (item.damage.splashAmount ?? 0);
    const dps = totalDamage / item.damage.reloadDurationSeconds;
    return Math.floor(dps);
  }
  return undefined;
}

const itemMap: Partial<Record<string, Item>> = {};
items.reduce((map, item) => {
  map[item.name] = item;
  return map;
}, itemMap);

export function getItemMap() {
  return itemMap;
}

export default function getItems() {
  return items;
}
