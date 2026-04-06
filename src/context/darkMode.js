import { create } from "zustand";

const getInitialDarkMode = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme !== null) {
    return savedTheme === 'dark';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const useGlobalState = create((set) => ({
  darkMode: getInitialDarkMode(),
  toggleDarkMode: () => set((state) => {
    const newDarkMode = !state.darkMode;
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    return { darkMode: newDarkMode };
  }),
  setDarkMode: (value) => set(() => {
    localStorage.setItem('theme', value ? 'dark' : 'light');
    return { darkMode: value };
  }),
}));
