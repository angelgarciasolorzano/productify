import { useEffect } from "react";
import { FooterInicio } from "../components/footer";
import { MainInicio } from "../components/main";
import { NavbarInicio } from "../components/navbar";

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
      <NavbarInicio darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainInicio />
      <FooterInicio />
    </div>
  )
}

export default InicioLayout;