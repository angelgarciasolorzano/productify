import { Usuario } from "@/models/usuarios";
import { ServerError } from "@/errors";

class AuthRepository {
  public async getUsuarioCorreo(correo_usuario: Usuario["correo_usuario"]): Promise<Usuario | null> {
    try {
      return await Usuario.findOne({ where: { correo_usuario } });
    } catch (error) {
      throw new ServerError("Error al conectar con la base de datos");
    }
  };
};

export default new AuthRepository();