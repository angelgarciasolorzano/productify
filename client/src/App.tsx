import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InicioLayout, LoginLayout }  from "./layouts";
import { Toaster } from "react-hot-toast";
import { toastConfig } from "./config";
import useThemeStore from "./store/themeStore";
import Container from "./components/Container";

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<InicioLayout />} />
          <Route path="/login" element={<LoginLayout />} />
        </Routes>

        <Toaster {...toastConfig({theme, position:"top-right"})} />
      </Container>
    </BrowserRouter>
  )
}

export default App;