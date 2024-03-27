import { ReactNode } from "react";

export type Misc = {
  name: string;
  description: string;
  content: ReactNode;
};

export const miscs: Misc[] = [
  {
    name: "Commands List",
    description: "Chat commands to delete quests, leave groups, etc",
    content: (
      <div>
        Note the &quot;:&quot; at the beginning to specify a command
        <ul className="pl-2 font-mono">
          <li>:DESTROYJNLENTRY [npc name]</li>
          <li>:DESTORYMYSKILL [skill name]</li>
          <li>:WHERE (gives coordinates)</li>
          <li>:WHISPER [message] (small proximity)</li>
          <li>:CREATECLAN [clan name]</li>
          <li>:DISBANCLAN</li>
          <li>:REQUESTJOIN [clan name]</li>
          <li>:VIEWROSTER</li>
          <li>:BANK</li>
          <li>:LOOT</li>
          <li>:REBIRTH</li>
          <li>:TRADE [player name]</li>
          <li>:TRADEACCEPT</li>
        </ul>
      </div>
    ),
  },
  {
    name: "About",
    description: "endless ages db info",
    content:
      "Made by 55 Monk. A big thanks to plasticAiredale for allowing me to use his work from EA Monster Bytes as a starting point to expand on.",
  },
];
