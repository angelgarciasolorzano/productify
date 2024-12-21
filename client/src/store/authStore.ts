import { create } from "zustand";
import { persist } from "zustand/middleware"
import { loginUsuario } from "../api/authApi";
import { LoginTypeSchema } from "../schemas/authSchema";
import { AxiosError } from "axios";

import toast from "react-hot-toast";
import Usuario from "../types/usuarioType";
import RespuestaBackend from "../types/respuestaType";

interface AuthStoreState {
  usuario: Usuario | null;
  isAuthenticated: boolean;
  loading: boolean;
};

interface AuthStoreActions {
  login: (usuario: LoginTypeSchema) => Promise<void>;
};

const authStore = create<AuthStoreState & AuthStoreActions>()(
  persist(
    (set) => ({
      loading: false,
      usuario: null,
      isAuthenticated: false,
      login: async (usuario: LoginTypeSchema): Promise<void> => {
        set((state) => ({ loading: !state.loading }));

        try {
          const data = await loginUsuario(usuario);

          set(() => ({
            isAuthenticated: true,
            usuario: data
          }));

          toast.success("Bienvenido usuario");
        } catch (error) {
          let mensaje: string;

          switch(true) {
            case error instanceof AxiosError: {
              const { response } = error as AxiosError<RespuestaBackend>;
              mensaje = response?.data.message || "Ocurrio un error";
              break;
            }
            case error instanceof Error: {
              mensaje = error.message;
              break;
            }
            default: {
              mensaje = "Ha ocurrido un error desconocido";
            }
          };

          toast.error(mensaje);
        } finally {
          set((state) => ({ loading: !state.loading }));
        }
      }
    }),
    {
      name: "authUsuario"
    }
  ),
)

export default authStore;