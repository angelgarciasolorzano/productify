import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./views/Login";
import InicioLayout from "./layouts/InicioLayout";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <div className={`${darkMode && "dark"}`}>
        <div className="flex flex-col h-screen duration-300 bg-gray-200 dark:bg-gray-800">
          <Routes>
            <Route path="/" element={<InicioLayout darkMode={toggleDarkMode} toggleDarkMode={darkMode} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;