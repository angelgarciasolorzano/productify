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
      updateTheme: () => {
        set((state) => {
          const htmlElement = document.documentElement;
          const newTheme = !state.theme;

          if (newTheme) {
            htmlElement.classList.add("dark");
          } else {
            htmlElement.classList.remove("dark");
          }

          return { theme: newTheme };
        })
      }
    }),
    {
      name: "theme-store",
      onRehydrateStorage: () => (state) => {
        const htmlElement = document.documentElement;
        
        if (state?.theme) {
          htmlElement.classList.add("dark");
        } else {
          htmlElement.classList.remove("dark");
        }
      },
    }
  )
);

export default themeStore;