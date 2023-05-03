export type QuestStep = {
  npcName: string;
  action: string;
  complete?: boolean;
};

export type Quest = {
  name: string;
  shortDesc: string;
  preface: string;
  steps: QuestStep[];
};

const quests: Record<string, Quest> = {
  "Dominion Egg Quest": {
    name: "Dominion Egg Quest",
    shortDesc: "Collect eggs from around Mainworld",
    preface:
      "There are no requirements for this quest, you do not need to talk to G'fron to start, just begin at the closest egg. Eggs are like chests and can be looted without any key. There are a few other quests that use these eggs, check if you might need them later to save some time.",
    steps: [
      { npcName: "Dominion Briscore Egg", action: "loot" },
      { npcName: "Dominion Cripton Egg", action: "loot" },
      { npcName: "Dominion Drout Egg", action: "loot" },
      { npcName: "Dominion Briging Egg", action: "loot" },
      { npcName: "Dominion Ligton Egg", action: "loot" },
      { npcName: "Dominion Powlong Egg", action: "loot" },
      { npcName: "Dominion Flisk Egg", action: "loot" },
      { npcName: "Dominion Grison Egg", action: "loot" },
      { npcName: "Dominion Gratute Egg", action: "loot" },
      { npcName: "Trendor From IIA", action: "teleport" },
      { npcName: "G'fron", action: "strRingQuest" },
    ],
  },
  "BuckBuck Quest": {
    name: "BuckBuck Quest",
    shortDesc: "Collect crates from around AK",
    preface: "",
    steps: [
      { npcName: "BuckBuck Crate #2", action: "loot" },
      { npcName: "BuckBuck Crate #3", action: "loot" },
      { npcName: "BuckBuck Crate #6", action: "loot" },
      { npcName: "BuckBuck Crate #5", action: "loot" },
      { npcName: "BuckBuck Crate #1", action: "loot" },
      { npcName: "BuckBuck Crate #10", action: "loot" },
      { npcName: "BuckBuck Crate #11", action: "loot" },
      { npcName: "BuckBuck Crate #4", action: "loot" },
      { npcName: "BuckBuck Crate #12", action: "loot" },
      { npcName: "BuckBuck Crate #7", action: "loot" },
      { npcName: "BuckBuck Crate #8", action: "loot" },
      { npcName: "BuckBuck Crate #9", action: "loot" },
      { npcName: "BuckBuck Crate #13", action: "loot" },
      { npcName: "BuckBuck", action: "buckBuckQuest" },
    ],
  },
};

export default function getQuestMap() {
  return quests;
}
