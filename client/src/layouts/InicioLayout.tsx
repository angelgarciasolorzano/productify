import { useEffect } from "react";
import { FooterInicio } from "../components/footer";
import { MainInicio } from "../components/main";
import { NavbarInicio } from "../components/navbar";

import Aox from "aos";

function InicioLayout() {
  useEffect(() => {
    Aox.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarInicio />
      <MainInicio />
      <FooterInicio />
    </div>
  )
}

export default InicioLayout;