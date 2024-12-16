import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  titleVariants, buttonVariants, 
  containerVariants, itemVariants 
} from "../../animation/motionVariants";

interface Props {
  darkMode: () => void
  toggleDarkMode: boolean;
};

function NavbarInicio({ darkMode, toggleDarkMode }: Props) {
  return (
    <nav className='w-full border-b fixed top-0 z-50 border-borderPrimary bg-white shadow-sm 
      duration-300 dark:bg-bgPrimary-dark dark:border-borderPrimary-dark'
    >
      <div className='flex items-center justify-between font-medium gap-2 px-6 py-2'>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants} 
          className='flex items-center justify-between space-x-4'
        >
          <span className="text-green-600 text-xl font-bold dark:bg-text-titulo-gradient 
            dark:bg-clip-text dark:text-transparent"
          >
            Productify
          </span>
          
          <button 
            className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700" 
            onClick={darkMode}
          >
            {toggleDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </motion.div>

        <motion.ul 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="md:flex hidden items-center gap-8"
        >
          <motion.li variants={itemVariants} >
            <Link 
              to="inicio" 
              smooth={true}
              duration={100}
              className="relative group cursor-pointer hover:text-green-700 dark:text-textPrimary
                dark:hover:bg-text-gradient dark:bg-clip-text dark:hover:text-transparent
              "
            >
              Inicio
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transform 
                scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100
                dark:bg-yellow-500"
              />
            </Link>
          </motion.li>

          <motion.li variants={itemVariants}>
            <Link 
              to="identidad" 
              smooth={true}
              duration={100}
              className="relative group cursor-pointer hover:text-green-700 dark:text-textPrimary
                dark:hover:bg-text-gradient dark:bg-clip-text dark:hover:text-transparent
              "
            >
              Conocenos
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transform 
                scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100
                dark:bg-yellow-500"
              />
            </Link>
          </motion.li>

          <motion.li variants={itemVariants}>
            <Link 
              to="servicios"
              smooth={true}
              duration={100}
              className="relative group cursor-pointer hover:text-green-700 dark:text-textPrimary
                dark:hover:bg-text-gradient dark:bg-clip-text dark:hover:text-transparent
              "
            >
              Servicios
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transform 
                scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100
                dark:bg-yellow-500"
              />
            </Link>
          </motion.li>

          <motion.li variants={itemVariants}>
            <Link 
              to="comunidad" 
              smooth={true}
              duration={100}
              className="relative group cursor-pointer hover:text-green-700 dark:text-textPrimary
                dark:hover:bg-text-gradient dark:bg-clip-text dark:hover:text-transparent
              "
            >
              Comunidad
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transform 
                scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100
                dark:bg-yellow-500"
              />
            </Link>
          </motion.li>
        </motion.ul>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >

          <LinkRouter to={"/login"} className="bg-green-500 text-white px-4 py-2 rounded-xl 
            transition duration-200 ease-in-out hover:bg-green-700 active:bg-green-900 
            focus:outline-none" 
          >
            Iniciar Sesion
          </LinkRouter>
        </motion.div>
      </div>
    </nav>
  )
}

export default NavbarInicio;