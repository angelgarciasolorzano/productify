import { FaMoon, FaSun } from "react-icons/fa";

interface Props {
  darkMode: () => void
  toggleDarkMode: boolean;
};

function Navbar({ darkMode, toggleDarkMode }: Props) {
  return (
    <nav className='w-full border-b fixed top-0 z-50 border-gray-200 bg-white dark:bg-gray-800 
      dark:border-gray-700 shadow-sm'
    >
      <div className='flex items-center justify-between font-medium px-6 py-2'>
        <div className='flex items-center justify-between space-x-4'>
          <span className="text-green-600 text-xl font-bold dark:text-white">Productify</span>
          
          <button 
            className="dark:bg-slate-50 dark:text-slate-700 rounded-full p-2" 
            onClick={darkMode}
          >
            {toggleDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <ul className="md:flex hidden items-center gap-8">
          <li>
            <a href="#inicio" className="dark:text-white hover:underline">Inicio</a>
          </li>
          <li>
            <a href="#identidad" className="dark:text-white hover:underline">Quienes somos</a>
          </li>
          <li>
            <a href="#servicios" className="dark:text-white hover:underline">Nuestros servicios</a>
          </li>
          <li>
            <a href="#comunidad" className="dark:text-white hover:underline">Comunidad</a>
          </li>
        </ul>

        <button className="bg-green-500 text-white px-4 py-2 rounded-xl transition duration-200 
          ease-in-out hover:bg-green-700 active:bg-green-900 focus:outline-none" 
        >
          Iniciar Sesion
        </button>
      </div>
    </nav>
  )
}

export default Navbar;