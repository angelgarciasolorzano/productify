import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  desIzquierdoVariants, desDerechoVariants, 
  containerVariants, itemVariants 
} from "../../animation/motionVariants";

import themeStore from "../../store/themeStore";
import { linksInicio } from "./navbarItems";

function Navbar() {
  const theme = themeStore((state) => state.theme);
  const updateTheme = themeStore((state) => state.updateTheme);
  const location = useLocation();

  return (
    <nav className={`${location.pathname === "/" ? "fixed" : "sticky overflow-hidden"}
      w-full border-b top-0 z-50 border-borderPrimary bg-white shadow-sm 
      duration-300 dark:bg-bgPrimary-dark dark:border-borderPrimary-dark`}
    >
      <div className="flex items-center justify-between font-medium gap-2 px-6 py-2">
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
            className="rounded-full p-2 bg-gray-200 hover:bg-gray-300 
            dark:bg-bgPrimary-darkPrimary dark:text-textPrimary" 
            onClick={updateTheme}
          >
            {theme ? <FaSun /> : <FaMoon />}
          </button>
        </motion.div>

        {
          location.pathname === "/" && (
            <motion.ul 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="md:flex hidden items-center gap-8"
            >
              {
                linksInicio.map((link) => (
                  <motion.li key={link.id} variants={itemVariants}>
                    <Link 
                      to={link.id} 
                      smooth={true}
                      duration={100}
                      className="relative group cursor-pointer hover:text-green-700 
                      dark:text-textPrimary dark:hover:bg-text-gradient dark:bg-clip-text 
                        dark:hover:text-transparent
                      "
                    >
                      {link.text}
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 
                        transform scale-x-0 transition-transform duration-300 origin-left 
                        group-hover:scale-x-100 dark:bg-yellow-500"
                      />
                    </Link>
                  </motion.li>
                ))
              }
            </motion.ul>
          )
        }

        <motion.div
          initial="hidden"
          animate="visible"
          variants={desDerechoVariants}
        >

          <LinkRouter 
            to={location.pathname === "/" ? "/login" : "/"} 
            className="bg-green-500 text-white px-4 py-2 rounded-xl 
              transition duration-200 ease-in-out hover:bg-green-700 active:bg-green-900 
              focus:outline-none
            " 
          >
            {location.pathname === "/" ? "Iniciar Sesión" : "Inicio"}
          </LinkRouter>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar;