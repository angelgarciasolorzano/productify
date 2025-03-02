import { Usuario } from "@/models/usuarios";
import { LoginType } from "@/schemas/auth";
import { UsuarioRepository } from "@/repositories/usuarios";
import { NotFoundError, DatosError, HandleError } from "@/errors";

class AuthService extends HandleError {
  private validateCorreoContra(usuario: Usuario, data: LoginType): void {
    if (usuario.correo_usuario !== data.correo_usuario || usuario.contra_usuario !== data.contra_usuario) {
      throw new DatosError("Usuario o contraseña incorrectos");
    }
  };

  public async loginUsuario(data: LoginType): Promise<Usuario> {
    try {
      const usuario = await UsuarioRepository.auth.getUsuarioCorreo(data.correo_usuario);

      if (!usuario) throw new NotFoundError("El usuario no existe");

      this.validateCorreoContra(usuario, data);

      return usuario;
    } catch (error) {
      this.handleError(error, "Error al autenticar el usuario");
    }
  };
};

export default new AuthService();