import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { toastConfig } from "./config";

import { InicioLayout, LoginLayout }  from "./layouts";

import { 
  ProductoRegistrar, ProductoGestionarCategorias, 
  ProductoInventario 
} from "./pages/productos";

import themeStore from "./store/themeStore";
import Container from "./components/Container";
import DashboardLayout from "./layouts/DashboardLayout";
import HomePage from "./pages/HomePage";

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
              <Route index element={<HomePage />} />
              <Route path="registrar-producto" element={<ProductoRegistrar />} />
              <Route path="gestionar-categorias" element={<ProductoGestionarCategorias />} />
              <Route path="inventario" element={<ProductoInventario />} />
            </Route>
          </Routes>

          <Toaster {...toastConfig({theme, position:"top-right"})} />
        </Container>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;