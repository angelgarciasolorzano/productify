import { fondoPrimary } from "../../assets/";
import { LuMoon, LuSun } from "react-icons/lu";
import themeStore from "../../store/themeStore";

function Header() {
  const theme = themeStore((state) => state.theme);
  const updateTheme = themeStore((state) => state.updateTheme);

  return (
    <header className="flex justify-between items-center py-2 px-4 shadow-sm border-b bg-white 
      border-borderPrimary duration-300 dark:bg-bgPrimary-dark dark:border-borderPrimary-dark"
    >
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-textPrimary">
        Dashboard
      </h1>

      <div className="flex items-center gap-10">
        <button 
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 
          dark:bg-bgPrimary-darkPrimary dark:text-textPrimary"
          onClick={updateTheme}
        >
          {theme ? <LuSun /> : <LuMoon />}
        </button>

        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <span className="text-sm dark:text-textPrimary">
              Angel Garcia
            </span>
            
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Administrador
            </span>
          </div>

          <div className="flex-shrink-0">
            <img src={fondoPrimary} className="h-10 w-10 rounded-full"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;