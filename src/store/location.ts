import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Location = (typeof locations)[keyof typeof locations]; // union of all location objects

interface LocationState {
  activeLocation: Location | null;
  setActiveLocation: (location: Location | null) => void;
}

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create<LocationState>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) =>
      set((state) => {
        state.activeLocation = location;
      }),
  }))
);

export default useLocationStore;
