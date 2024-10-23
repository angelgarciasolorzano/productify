import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./views/Login";

function App() {
  return (
    <BrowserRouter>
      <main className="w-full min-h-screen mx-auto">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;