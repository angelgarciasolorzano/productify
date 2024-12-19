import { create } from "zustand";

interface ThemeState {
  theme: boolean;
  updateTheme: () => void
};

const useThemeStore = create<ThemeState>((set) => ({
  theme: false,
  updateTheme: () => set((state) => ({
    theme: !state.theme
  })),
}));

export default useThemeStore;