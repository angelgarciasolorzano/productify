import { useEffect } from "react";

import { InicioPage } from "../pages";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Aox from "aos";

function InicioLayout() {
  useEffect(() => {
    Aox.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      <InicioPage />
      <Footer />
    </div>
  )
}

export default InicioLayout;