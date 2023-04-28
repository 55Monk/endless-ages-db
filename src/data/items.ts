export type Race = "AP" | "BL" | "HF" | "HM";
export type ItemType = "ARMOR" | "GUN" | "SWORD" | "QI";
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
type Element = "NORMAL" | "RUNE" | "DEATH" | "HEAL";
type Bonus = Stat | "HEALTH";

export type Item = {
  name: string;
  itemType?: ItemType;
  iconLocation?: [x: number, y: number];
  drops?: boolean;
  marketCost?: number;
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
  race?: Race;
  requirements?: Partial<Record<Requirement, number>>;
  defenses?: Partial<Record<Element, number>>;
  bonuses?: Partial<Record<Bonus, number>>;
  damage?: {
    element: Element;
    direct?: number;
    splash?: number;
    reloadDuration: number;
  };
  flight?: number;
};

const items: Item[] = [
  {
    name: "[AP] Ontroytag",
    iconLocation: [14, 9],
    drops: false,
    fromVendor: "Multiple",
    race: "AP",
    requirements: {
      STR: 10,
      DEX: 10,
      WIS: 20,
    },
    damage: {
      element: "NORMAL",
      direct: 12,
      reloadDuration: 0.5,
    },
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
      element: "HEAL",
      direct: 180,
      reloadDuration: 6,
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
    flight: 51,
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
      element: "DEATH",
      direct: 120,
      splash: 60,
      reloadDuration: 1.93,
    },
  },
  {
    name: "[HF] Ring of Power -20",
    iconLocation: [8, 6],
    drops: false,
    rewardFrom: "Dominion Egg Quest",
    race: "HF",
    bonuses: {
      STR: 20,
    },
  },
];

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
  return item.marketCost ? Math.floor(item.marketCost / 3) : 0;
}

export function getItemDps(item: Item) {
  if (item.damage) {
    const totalDamage = (item.damage.direct ?? 0) + (item.damage.splash ?? 0);
    const dps = totalDamage / item.damage.reloadDuration;
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
