import { create } from "zustand";

export const useGlobalState = create((set) => ({
    darkMode: false,
    modoDark: () => set(state => ({ darkMode: state.darkMode = true})),
    modoWhite: () => set(state => ({ darkMode: state.darkMode = false}))
  }));