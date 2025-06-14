import { Usuario } from "@/models/usuarios";
import { ServerError } from "@/errors";

class BaseRepository {
  public async getUsuarios(): Promise<Usuario[]> {
    try {
      return await Usuario.findAll();
    } catch (error) {
      throw new ServerError("Error al obtener los usuarios");
    }
  };

  public async getUsuarioId(id_usuario: Usuario["id_usuario"]): Promise<Usuario | null> {
    try {
      return await Usuario.findOne({ where: { id_usuario: id_usuario } });
    } catch (error) {
      throw new ServerError("Error al obtener el usuario");
    }
  };
};

export default new BaseRepository();