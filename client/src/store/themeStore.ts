import { create } from "zustand";
import { persist } from "zustand/middleware"

interface ThemeStoreState {
  theme: boolean;
};

interface ThemeStoreActions {
  updateTheme: () => void
};

const themeStore = create<ThemeStoreState & ThemeStoreActions>()(
  persist(
    (set) => ({
      theme: false,
      updateTheme: () => set((state) => ({
        theme: !state.theme
      })),
    }),
    {
      name: "theme-store",
    }
  )
);

export default themeStore;