import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants/index.js";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if(!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        win.isMinimized = false;
        win.isMaximized = false;
        win.prevStyles = null;
        state.nextZIndex++;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if(!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
        win.isMinimized = false;
        win.isMaximized = false;
        win.prevStyles = null;
      }),

    minimizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if(!win) return;
        win.isMinimized = !win.isMinimized;
      }),

    maximizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if(!win) return;
        win.isMaximized = !win.isMaximized;
        win.isMinimized = false;
      }),

    setPrevStyles: (windowKey, styles) =>
      set((state) => {
        const win = state.windows[windowKey];
        if(!win) return;
        win.prevStyles = styles;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
         win.zIndex = state.nextZIndex++;
         win.isMinimized = false;
        
      }),
  }))
);

export default useWindowStore;