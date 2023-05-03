import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Marker, tabs } from "../components/WebsiteContent";
import { getMapMap } from "../data/maps";
import getNpcMap from "../data/npcs";
import { Quest } from "../data/quests";

type ContentState = {
  selectedTab: number;
  selectedMap: string;
  markers: Marker[];
  lines: any;
  selectTab: (tab: number | string) => void;
  selectMap: (map: string) => void;
  clearMap: () => void;
  plotQuest: (quest: Quest) => void;
  setMarkerComplete: (index: number, complete: boolean) => void;
};

function selectTab(tab: number | string) {
  if (typeof tab === "string") {
    return { selectedTab: tabs.indexOf(tab) };
  } else {
    return { selectedTab: tab };
  }
}

function selectMap(map: string) {
  return { selectedMap: map };
}

function clearMap() {
  return { markers: [], lines: [] };
}

function plotQuest(quest: Quest) {
  const npcs = getNpcMap();
  const markers = quest.steps.map((step) => ({
    location: npcs[step.npcName].location,
    icon: npcs[step.npcName].icon,
  }));
  return { markers, selectedMap: markers[0].location.map };
}

function setMarkerComplete(
  state: ContentState,
  index: number,
  complete: boolean
) {
  state.markers[index].complete = complete;
  if (complete) {
    if (state.markers.length > index + 1) {
      state.selectedMap = state.markers[index + 1].location.map;
    } else {
      state.selectedMap = state.markers[index].location.map;
    }
  } else {
    const lastCompletedMarker = state.markers
      .slice()
      .reverse()
      .find((marker: Marker) => marker.complete);
    if (lastCompletedMarker) {
      const lastCompletedMarkerIndex =
        state.markers.indexOf(lastCompletedMarker);
      if (state.markers.length > lastCompletedMarkerIndex + 1) {
        state.selectedMap =
          state.markers[lastCompletedMarkerIndex + 1].location.map;
      } else {
        state.selectedMap =
          state.markers[lastCompletedMarkerIndex].location.map;
      }
    } else {
      state.selectedMap = state.markers[0].location.map;
    }
  }
}

const useContentStore = create<ContentState>()(
  immer(
    persist(
      (set) => ({
        selectedTab: 0,
        selectedMap: Object.keys(getMapMap())[0],
        markers: [],
        lines: [],
        selectTab: (tab) => set(() => selectTab(tab)),
        selectMap: (map) => set(() => selectMap(map)),
        clearMap: () => set(() => clearMap()),
        plotQuest: (quest) => set(() => plotQuest(quest)),
        setMarkerComplete: (index, complete) =>
          set((state) => setMarkerComplete(state, index, complete)),
      }),
      { name: "eadb-content-storage" }
    )
  )
);

export default useContentStore;
