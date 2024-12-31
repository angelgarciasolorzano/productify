import { LuMoon, LuSun } from "react-icons/lu";
import { motion } from "framer-motion";
import { createContainerVariantes, createItemVariantes } from "../../animation/motionVariants";

import themeStore from "../../store/themeStore";
import Profile from "./Profile";

function Header() {
  const theme = themeStore((state) => state.theme);
  const updateTheme = themeStore((state) => state.updateTheme);

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={createContainerVariantes({staggerChildren: 0.3, when: "beforeChildren"})}
      className="flex justify-between items-center py-2 px-4 shadow-sm border-b bg-white 
      border-borderPrimary duration-300 dark:bg-bgPrimary-dark dark:border-borderPrimary-dark"
    >
      <motion.div variants={createItemVariantes("arriba")}>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-textPrimary">
          Dashboard
        </h1>
      </motion.div>
    
      <div className="flex items-center gap-10">
        <motion.div 
          variants={createItemVariantes("arriba")} 
          className="flex items-center gap-4"
        >
          <button 
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 
            dark:bg-bgPrimary-darkPrimary dark:text-textPrimary"
            onClick={updateTheme}
          >
            {theme ? <LuSun /> : <LuMoon />}
          </button>

          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 
            dark:bg-bgPrimary-darkPrimary dark:text-textPrimary"
            onClick={updateTheme}
          >
            {theme ? <LuSun /> : <LuMoon />}
          </button>
        </motion.div>

        <motion.div variants={createItemVariantes("arriba")}>
          <Profile />
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header;