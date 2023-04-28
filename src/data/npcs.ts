import { MapEntity, MapLocation } from "./shared";

export type ItemCount = [itemName: string, quantity: number];

export type Action = {
  interaction: string;
  requires?: ItemCount[];
  gives?: ItemCount[];
  teleport?: MapLocation;
};

export type NPC = MapEntity & {
  actions?: Record<string, Action>;
};

const npcs: Record<string, NPC> = {
  "Dominion Drout Egg": {
    location: {
      map: "mainworld",
      coordinates: [-4, 7157],
      description: "Underwater under The Rig",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Drout Egg", 1]] },
    },
  },
  "Dominion Cripton Egg": {
    location: {
      map: "mainworld",
      coordinates: [8090, 7901],
      description: "Underwater between The Rig and AP near the big plants",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Cripton Egg", 1]] },
    },
  },
  "Dominion Briscore Egg": {
    location: {
      map: "mainworld",
      coordinates: [16136, 8431],
      description: "On top of a big leaf on AP",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Briscore Egg", 1]] },
    },
  },
  "Dominion Gratute Egg": {
    location: {
      map: "mainworld",
      coordinates: [12284, -7931],
      description: "Inside the Trendor sewer pipe",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Gratute Egg", 1]] },
    },
  },
  "Dominion Grison Egg": {
    location: {
      map: "mainworld",
      coordinates: [-877, -17704],
      description: "Underwater near the Trisk Hive",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Grison Egg", 1]] },
    },
  },
  "Dominion Flisk Egg": {
    location: {
      map: "mainworld",
      coordinates: [1866, -9615],
      description: "Inside AMC deep cave",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Flisk Egg", 1]] },
    },
  },
  "Dominion Powlong Egg": {
    location: {
      map: "mainworld",
      coordinates: [-9923, -14856],
      description: "On top of BC bridge",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Powlong Egg", 1]] },
    },
  },
  "Dominion Ligton Egg": {
    location: {
      map: "mainworld",
      coordinates: [-21234, -10756],
      description: "Underwater near the BC and Oracle map edge",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Ligton Egg", 1]] },
    },
  },
  "Dominion Briging Egg": {
    location: {
      map: "mainworld",
      coordinates: [-14283, 4671],
      description: "Inside the large stone hut on MR",
    },
    icon: "egg",
    actions: {
      loot: { interaction: "Loot", gives: [["Dominion Briging Egg", 1]] },
    },
  },
  "Trendor From IIA": {
    location: {
      map: "mainworld",
      coordinates: [12371, -7937],
      description: "Inside the tower at the end of the bridge",
    },
    actions: {
      teleport: {
        interaction: "Teleport to",
        teleport: {
          map: "trendor",
          coordinates: [0, 0],
          description: "Main entrance",
        },
      },
    },
  },
  "G'fron": {
    location: {
      map: "trendor",
      coordinates: [0, 0],
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
};

export default function getNpcMap() {
  return npcs;
}
