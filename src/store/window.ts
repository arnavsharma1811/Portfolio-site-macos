import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants";

// Define the shape of a single window
export type WindowData = {
  isOpen: boolean;
  zIndex: number;
  data: unknown | null;
};

// Define the store state + actions
export type WindowStore = {
  windows: Record<string, WindowData>;
  nextZIndex: number;
  openWindow: (windowKey: string, data?: unknown | null) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
};

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG as Record<string, WindowData>,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey: string, data: unknown | null = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),

    closeWindow: (windowKey: string) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX - 1;
        win.data = null;
        state.nextZIndex++;
      }),

    focusWindow: (windowKey: string) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.zIndex = state.nextZIndex++;
      }),
  }))
);

export default useWindowStore;