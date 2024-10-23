import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./views/Login";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <main className={`w-full min-h-screen mx-auto ${darkMode && "dark"}`}>
      <div className="text-gray-500 bg-gray-100 
      translate-all duration-300 mt-14 dark:bg-gray-800"
    >
        <Navbar darkMode={toggleDarkMode}  toggleDarkMode={darkMode}/>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App;