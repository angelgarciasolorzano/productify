import { FaMoon, FaSun } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { motion } from "framer-motion";
import { desIzquierdoVariants, desDerechoVariants } from "../../animation/motionVariants";
import useThemeStore from "../../store/themeStore";

function NavbarLogin() {
  const { theme, updateTheme } = useThemeStore();

  return (
    <nav className='w-full border-b fixed top-0 z-50 border-borderPrimary bg-white shadow-sm 
      duration-300 dark:bg-bgPrimary-dark dark:border-borderPrimary-dark'
    >
      <div className='flex items-center justify-between font-medium gap-2 px-6 py-2'>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={desIzquierdoVariants}
          className='flex items-center justify-between space-x-4'
        >
          <span className="text-green-600 text-xl font-bold dark:bg-text-titulo-gradient 
            dark:bg-clip-text dark:text-transparent"
          >
            Productify
          </span>
          
          <button 
            className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700" 
            onClick={updateTheme}
          >
            {theme ? <FaSun /> : <FaMoon />}
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={desDerechoVariants}
        >

          <LinkRouter to={"/"} className="bg-green-500 text-white px-4 py-2 rounded-xl 
            transition duration-200 ease-in-out hover:bg-green-700 active:bg-green-900 
            focus:outline-none" 
          >
            Inicio
          </LinkRouter>
        </motion.div>
      </div>
    </nav>
  )
}

export default NavbarLogin;