import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InicioLayout, LoginLayout }  from "./layouts";
import { Toaster } from "react-hot-toast";
import { toastConfig } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import themeStore from "./store/themeStore";
import Container from "./components/Container";
import DashboardLayout from "./layouts/DashboardLayout";
import { InicioPage } from "./pages";

const queryClient = new QueryClient();

function App() {
  const theme = themeStore((state) => state.theme);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<InicioLayout />} />
            <Route path="/login" element={<LoginLayout />} />

            <Route path="/dashboard/*" element={<DashboardLayout />}>
              <Route path="pages" element={<InicioLayout />} />
              <Route path="login" element={<InicioPage />} />
            </Route>
          </Routes>

          <Toaster {...toastConfig({theme, position:"top-right"})} />
        </Container>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;