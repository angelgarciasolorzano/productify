import { useEffect } from "react";

import FooterInicio from "../components/FooterInicio";
import Navbar from "../components/Navbar";
import MainInicio from "../components/MainInicio";
import Aox from "aos";

interface Props {
  darkMode: () => void
  toggleDarkMode: boolean;
};

function InicioLayout({darkMode, toggleDarkMode}: Props) {
  useEffect(() => {
    Aox.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainInicio />
      <FooterInicio />
    </div>
  )
}

export default InicioLayout;