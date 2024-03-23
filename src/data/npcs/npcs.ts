import { keyBy } from "lodash-es";
import { ItemQuantity } from "../items/items.ts";
import { MapEntity, MapLocation } from "../shared.ts";

export type Action = {
  interaction: string;
  requires?: ItemQuantity[];
  gives?: ItemQuantity[];
  teleport?: MapLocation;
};

export type NPC = MapEntity & {
  name: string;
  actions?: Record<string, Action>;
};

export const npcs: NPC[] = [
  {
    name: "Dominion Drout Egg",
    location: {
      map: "mainworld",
      coordinates: [7159, -855, -5],
      description: "Underwater under The Rig",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Drout Egg", 1]] },
    },
  },
  {
    name: "Dominion Cripton Egg",
    location: {
      map: "mainworld",
      coordinates: [7906, -3554, 8079],
      description: "Underwater between The Rig and AP near the big plants",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Cripton Egg", 1]] },
    },
  },
  {
    name: "Dominion Briscore Egg",
    location: {
      map: "mainworld",
      coordinates: [8426, 1983, 16121],
      description: "On top of a big leaf on AP",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Briscore Egg", 1]] },
    },
  },
  {
    name: "Dominion Gratute Egg",
    location: {
      map: "mainworld",
      coordinates: [-7924, 302, 12287],
      description: "Inside the Trendor sewer pipe",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Gratute Egg", 1]] },
    },
  },
  {
    name: "Dominion Grison Egg",
    location: {
      map: "mainworld",
      coordinates: [-17717, -1692, -887],
      description: "Underwater near the Trisk Hive",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Grison Egg", 1]] },
    },
  },
  {
    name: "Dominion Flisk Egg",
    location: {
      map: "mainworld",
      coordinates: [-9598, 332, 1857],
      description: "Inside AMC deep cave",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Flisk Egg", 1]] },
    },
  },
  {
    name: "Dominion Powlong Egg",
    location: {
      map: "mainworld",
      coordinates: [-14872, 1192, -9936],
      description: "On top of BC bridge",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Powlong Egg", 1]] },
    },
  },
  {
    name: "Dominion Ligton Egg",
    location: {
      map: "mainworld",
      coordinates: [-10758, -1936, -21222],
      description: "Underwater near the BC and Oracle map edge",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Ligton Egg", 1]] },
    },
  },
  {
    name: "Dominion Briging Egg",
    location: {
      map: "mainworld",
      coordinates: [4660, 460, -14266],
      description: "Inside the large stone hut on MR",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Briging Egg", 1]] },
    },
  },
  {
    name: "Trendor From IIA",
    location: {
      map: "mainworld",
      coordinates: [-7975, 726, 12385],
      description: "Inside the tower at the end of the bridge",
    },
    actions: {
      teleport: {
        interaction: "Teleport to",
        teleport: {
          map: "trendor",
          coordinates: [-57, -206, 47],
          description: "Main entrance",
        },
      },
    },
  },
  {
    name: "G'fron",
    location: {
      map: "trendor",
      coordinates: [229, 212, 1605],
      description: "Near the main bar",
    },
    actions: {
      strRingQuest: {
        interaction: "Talk to",
        requires: [
          ["Dominion Drout Egg", 1],
          ["Dominion Cripton Egg", 1],
          ["Dominion Briscore Egg", 1],
          ["Dominion Gratute Egg", 1],
          ["Dominion Grison Egg", 1],
          ["Dominion Flisk Egg", 1],
          ["Dominion Powlong Egg", 1],
          ["Dominion Ligton Egg", 1],
          ["Dominion Briging Egg", 1],
        ],
        gives: [["Str Ring", 1]],
      },
    },
  },
];

export const npcMap = keyBy(npcs, (npc) => npc.name);
