import { Link } from "react-scroll";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { navbarContainerVariants, navbarItemVariants, navbarVariants } from "./navbarVariants";
import { linksInicio } from "./navbarItems";

import DarkMode from "../DarkMode";

function Navbar() {
  const location = useLocation();

  return (
    <nav className={`sticky w-full border-b top-0 z-50 border-white-200 bg-white shadow-sm 
      overflow-hidden duration-300 dark:bg-dark-700 dark:border-dark-800`}
    >
      <div className="flex items-center justify-between font-medium gap-2 px-6 py-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navbarVariants("Izquierda")} 
          className='flex items-center justify-between space-x-4'
        >
          <span className="text-green-600 text-xl font-bold dark:bg-text-titulo-gradient 
            dark:bg-clip-text dark:text-transparent"
          >
            Productify
          </span>
          
          <DarkMode />
        </motion.div>

        {
          location.pathname === "/" && (
            <motion.ul 
              initial="hidden"
              animate="visible"
              variants={navbarContainerVariants}
              className="md:flex hidden items-center gap-8"
            >
              {
                linksInicio.map((link) => (
                  <motion.li key={link.id} variants={navbarItemVariants}>
                    <Link 
                      to={link.id} 
                      smooth={true}
                      duration={100}
                      offset={link.offset}
                      className="relative group cursor-pointer hover:text-green-700 
                      dark:text-white dark:hover:bg-text-gradient dark:bg-clip-text 
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
          variants={navbarVariants("Derecha")}
        >

          <LinkRouter 
            to={location.pathname === "/" ? "/login" : "/"} 
            className="bg-green-500 text-white px-4 py-2 rounded-xl border border-transparent
              transition duration-200 ease-in-out hover:bg-emerald-700 active:bg-green-900 
              focus:outline-none dark:bg-transparent dark:text-white dark:border-white-200
              dark:hover:border-green-500 dark:hover:text-green-500 dark:hover:shadow-sm
              dark:hover:shadow-green-500
            " 
          >
            {location.pathname === "/" ? "Iniciar sesión" : "Inicio"}
          </LinkRouter>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar;