import { LuMoon, LuSun } from "react-icons/lu";

import themeStore from "../store/themeStore";

function DarkMode() {
  const theme = themeStore((state) => state.theme);
  const updateTheme = themeStore((state) => state.updateTheme);

  return (
    <button
      onClick={updateTheme}
      className="p-2 rounded-lg border border-white-200 hover:border-gray-500
        dark:text-white dark:border-dark-800 dark:hover:border-white-200
      "
    >
      {theme ? <LuSun /> : <LuMoon />}
    </button>
  )
}

export default DarkMode;