import { axios } from "../config";
import Usuario from "../types/usuarioType";

import { LoginTypeSchema } from "../schemas/auth/authSchema";

export const loginUsuario = async (usuario: LoginTypeSchema): Promise<Usuario> => {
  const { data } = await axios.post<Usuario>("/login", usuario);
  return data;
}; 