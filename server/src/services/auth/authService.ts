import { Usuario } from "@/models/usuarios";
import { LoginType } from "@/schemas/auth";
import { AuthRepository } from "@/repositories/auth";
import { NotFoundError, DatosError } from "@/errors";

class AuthService {
  public async loginUsuario(data: LoginType): Promise<Usuario> {
    try {
      const usuario = await AuthRepository.getUsuario(data.correo_usuario);

      if (!usuario) throw new NotFoundError("No se encontro el usuario");

      if (usuario.contra_usuario !== data.contra_usuario || usuario.estado_usuario !== "activo") {
        throw new DatosError("Usuario o contraseña incorrectos");
      };

      return usuario;
    } catch (error) {
      throw new NotFoundError("Error al iniciar sesion");
    }
  };
};

export default new AuthService();