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
  // Eggs
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
  // Buck Buck
  "BuckBuck Crate #1": {
    location: {
      map: "ak",
      coordinates: [2840, -14410],
      description:
        "Quadoty Island (Cave under the island, from the farm look to the south east at 3 Peaks, the cave entrance is off that edge)",
    },
    icon: "qi",
    actions: {
      loot: { interaction: "Loot", gives: [["BuckBuck Crate #1", 1]] },
    },
  },
  "BuckBuck Crate #2": {
    location: {
      map: "ak",
      coordinates: [5855, 11000],
      description: "Link B",
    },
    icon: "qi",
    actions: {
      loot: { interaction: "Loot", gives: [["BuckBuck Crate #2", 1]] },
    },
  },
  "BuckBuck Crate #3": {
    location: {
      map: "ak",
      coordinates: [7460, 16049],
      description: "Farm B",
    },
    icon: "qi",
    actions: {
      loot: { interaction: "Loot", gives: [["BuckBuck Crate #3", 1]] },
    },
  },
  "BuckBuck Crate #4": {
    location: {
      map: "ak",
      coordinates: [-5757, -5818],
      description:
        "SS Entrance (Approach really low off the island from the south, in the room with the portal)",
    },
    icon: "qi",
    actions: {
      loot: { interaction: "Loot", gives: [["BuckBuck Crate #4", 1]] },
    },
  },
  "BuckBuck Crate #5": {
    location: {
      map: "ak",
      coordinates: [5525, 692],
      description: "Embassy",
    },
    icon: "qi",
    actions: {
      loot: { interaction: "Loot", gives: [["BuckBuck Crate #5", 1]] },
    },
  },
  "BuckBuck Crate #6": {
    location: {
      map: "ak",
      coordinates: [15159, 3736],
      description: "Quadune (Really high up)",
    },
    icon: "qi",
    actions: {
      loot: { interaction: "Loot", gives: [["BuckBuck Crate #6", 1]] },
    },
  },
  "BuckBuck Crate #7": {
    location: {
      map: "ak",
      coordinates: [-19274, 54],
      description: "Link K",
    },
    icon: "qi",
    actions: {
      loot: { interaction: "Loot", gives: [["BuckBuck Crate #7", 1]] },
    },
  },
  "BuckBuck Crate #8": {
    location: {
      map: "ak",
      coordinates: [-15176, 10504],
      description: "Link H",
    },
    icon: "qi",
    actions: {
      loot: { interaction: "Loot", gives: [["BuckBuck Crate #8", 1]] },
    },
  },
  "BuckBuck Crate #9": {
    location: {
      map: "ak",
      coordinates: [-11172, 23296],
      description: "Link G",
    },
    icon: "qi",
    actions: {
      loot: { interaction: "Loot", gives: [["BuckBuck Crate #9", 1]] },
    },
  },
  "BuckBuck Crate #10": {
    location: {
      map: "ak",
      coordinates: [-3487, -3825],
      description:
        "3Peaks Caves (Approach really low off the island north east of the marker, enter the cave, left at the split, cross the gap, turn around and its on a high ledge over the gap to the north west)",
    },
    icon: "qi",
    actions: {
      loot: { interaction: "Loot", gives: [["BuckBuck Crate #10", 1]] },
    },
  },
  "BuckBuck Crate #11": {
    location: {
      map: "ak",
      coordinates: [-4091, -2732],
      description: "Nest C",
    },
    icon: "qi",
    actions: {
      loot: { interaction: "Loot", gives: [["BuckBuck Crate #11", 1]] },
    },
  },
  "BuckBuck Crate #12": {
    location: {
      map: "ak",
      coordinates: [-17324, -19106],
      description: "Debri H",
    },
    icon: "qi",
    actions: {
      loot: { interaction: "Loot", gives: [["BuckBuck Crate #12", 1]] },
    },
  },
  "BuckBuck Crate #13": {
    location: {
      map: "ak",
      coordinates: [-5919, 1950],
      description: "Commerce",
    },
    icon: "qi",
    actions: {
      loot: { interaction: "Loot", gives: [["BuckBuck Crate #13", 1]] },
    },
  },
  BuckBuck: {
    location: {
      map: "ak",
      coordinates: [-4096, 6019],
      description: "Inside the building",
    },
    actions: {
      buckBuckQuest: {
        interaction: "Talk to",
        requires: [
          ["BuckBuck Crate #1", 1],
          ["BuckBuck Crate #2", 1],
          ["BuckBuck Crate #3", 1],
          ["BuckBuck Crate #4", 1],
          ["BuckBuck Crate #5", 1],
          ["BuckBuck Crate #6", 1],
          ["BuckBuck Crate #7", 1],
          ["BuckBuck Crate #8", 1],
          ["BuckBuck Crate #9", 1],
          ["BuckBuck Crate #10", 1],
          ["BuckBuck Crate #11", 1],
          ["BuckBuck Crate #12", 1],
          ["BuckBuck Crate #13", 1],
        ],
        gives: [["Jetpack", 1]],
      },
    },
  },
  // Teleporters
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
  // NPC
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
