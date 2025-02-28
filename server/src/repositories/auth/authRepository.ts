import { Usuario } from "@/models/usuarios";
import { NotFoundError } from "@/errors";

class AuthRepository {
  public async getUsuario(correo_usuario: Usuario["correo_usuario"]): Promise<Usuario | null> {
    try {
      return await Usuario.findOne({ where: { correo_usuario } });
    } catch (error) {
      throw new NotFoundError("Error al obtener usuario");
    }
  };
};

export default new AuthRepository();