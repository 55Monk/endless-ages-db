import { keyBy } from "lodash-es";
import { DamageType, Element, Race } from "../shared.ts";
import apAccessories from "./ap/accessories.ts";
import apArmor from "./ap/armor";
import apGuns from "./ap/guns.ts";
import apMelee from "./ap/melee.ts";
import blArmor from "./bl/armor.ts";
import hfArmor from "./hf/armor.ts";
import hmArmor from "./hm/armor.ts";
import magics from "./magic.ts";

export const tags = [
  "ARMOR",
  "BODY",
  "LEGS",
  "HANDS",
  "HEAD/FEET",
  "ACCESSORY",
  "RING",
  "AMULET",
  "BADGE",
  "MISCACCESSORY",
  "COSMETIC",
  "GUN",
  "DIRECTDAMAGEONLYGUN",
  "AOEDAMAGEONLYGUN",
  "BOTHDAMAGEGUN",
  "UTILITYGUN",
  "MELEE",
  "PILOT",
  "JETPACK",
  "VEHICLE",
  "FAMILIAR",
  "MAGIC",
  "DIRECTDAMAGEONLYSPELL",
  "AOEDAMAGEONLYSPELL",
  "BOTHDAMAGESPELL",
  "HEALSPELL",
  "UTILITYSPELL",
  "SS",
  "POTION",
  "ALCH",
  "ENG",
  "SMITH",
  "QI",
  "JUNK",
] as const;
export type Tag = (typeof tags)[number];

type Stat = "STR" | "DEX" | "WIS";
type Bonus = Stat | "HEALTH";

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

export type ItemQuantity = [name: string, quantity: number];

export type Item = {
  name: string;
  tags: Tag[];
  level?: number; // this is a soft level, e.g. armor doesn't have wt requirement but is called lv11, 12, etc. For many items this will just match SS, WT, etc requirements
  iconLocation?: [x: number, y: number];
  drops?: boolean;
  marketCost?: number;
  // Requirements to equip/use
  race?: Race;
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
    dps?: number;
  };
  flightDurationSeconds?: number;
  useCost?: ItemQuantity[];
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

export const items: Item[] = [
  {
    name: "Peroxi Rebuilder Heal",
    tags: ["POTION", "ALCH"],
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
    tags: ["QI"],
  },
  {
    name: "Agate",
    tags: ["JUNK"],
    iconLocation: [5, 1],
    drops: true,
    marketCost: 150,
    droppedBy: {
      name: "Flob",
      rate: 5,
    },
  },
  {
    name: "[AP] Wings of Crom",
    tags: ["PILOT", "JETPACK"],
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
    tags: ["GUN", "BOTHDAMAGEGUN"],
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
    tags: ["ACCESSORY", "RING"],
    iconLocation: [8, 6],
    drops: false,
    rewardFrom: "Dominion Egg Quest",
    race: "HF",
    bonuses: {
      STR: 20,
    },
  },
  ...apArmor,
  ...apAccessories,
  ...apGuns,
  ...apMelee,
  ...blArmor,
  ...hfArmor,
  ...hmArmor,
  ...magics,
];

function getItemDps(item: Item) {
  if (item.damage) {
    const totalDamage =
      (item.damage.directAmount ?? 0) + (item.damage.splashAmount ?? 0);
    const dps = totalDamage / item.damage.reloadDurationSeconds;
    return Math.floor(dps);
  }
  return undefined;
}

items.forEach((item) => {
  if (!item.iconLocation) {
    if (item.tags.includes("QI")) {
      item.iconLocation = [0, 1];
    }
  }

  if (item.damage) {
    item.damage.dps = getItemDps(item);
  }
});

export function getItemSalePrice(item: Item) {
  return item.marketCost ? Math.floor(item.marketCost / 4) : 0;
}

export const itemMap = keyBy(items, (item) => item.name);
