import { create } from "zustand";

type Building = {
  name: string;
  height: number;
  followers: number;
  repos: number;
};

type CityStore = {
  selectedBuilding: Building | null;
  setSelectedBuilding: (building: Building) => void;
};

export const useCityStore = create<CityStore>((set) => ({
  selectedBuilding: null,

  setSelectedBuilding: (building) =>
    set({
      selectedBuilding: building,
    }),
}));