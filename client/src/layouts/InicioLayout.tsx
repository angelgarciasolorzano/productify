import Navbar from "../components/Navbar";
import Inicio from "../views/Inicio";

interface Props {
  darkMode: () => void
  toggleDarkMode: boolean;
};

function InicioLayout({darkMode, toggleDarkMode}: Props) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Inicio />
      <footer className="row-span-1 bg-gray-700">
        <p className="text-center text-white">Todos los derechos reservados &copy; 2023</p>
      </footer>
    </div>
  )
}

export default InicioLayout;