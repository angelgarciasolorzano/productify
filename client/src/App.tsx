import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { InicioLayout, LoginLayout }  from "./layouts";
import { Toaster } from "react-hot-toast";
import { toastConfig } from "./config";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <div className={`${darkMode && "dark"}`}>
        <div className="flex flex-col h-screen duration-300 bg-bgPrimary dark:bg-bgPrimary-dark">
          <Routes>
            <Route path="/" element={<InicioLayout darkMode={toggleDarkMode} toggleDarkMode={darkMode} />} />
            <Route path="/login" element={<LoginLayout darkMode={toggleDarkMode} toggleDarkMode={darkMode} />} />
          </Routes>

          <Toaster {...toastConfig({darkMode, position:"top-right"})} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;