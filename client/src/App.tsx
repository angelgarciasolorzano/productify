import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";

import { themeMantine, toastConfig } from "@/config";
import { InicioLayout, DashboardLayout }  from "@/layouts";
import { Home } from "@/pages/admin/home";
import { ProductoRegistrar, ProductoCategoria, ProductoInventario } from "@/pages/admin/productos";
import { Container } from "@/components";
import { Login } from "@/views/login";

const queryClient = new QueryClient();

function App() {
  return (
    <MantineProvider theme={themeMantine}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Container>
            <Routes>
              <Route path="/" element={<InicioLayout />} />
              <Route path="/login" element={<Login />} />

              <Route path="/dashboard/*" element={<DashboardLayout />}>
                <Route index element={<Home />} />
                <Route path="registrar-producto" element={<ProductoRegistrar />} />
                <Route path="gestionar-categorias" element={<ProductoCategoria />} />
                <Route path="inventario" element={<ProductoInventario />} />
              </Route>
            </Routes>

            <Toaster {...toastConfig()} />
          </Container>
        </BrowserRouter>
      </QueryClientProvider>
    </MantineProvider>
  )
}

export default App;