import { Categoria } from "@/models/productos";
import { CategoriaType } from "@/schemas/productos"
import { ServerError } from "@/errors";

class CategoriaRepository {
  public async getCategorias(): Promise<Categoria[]> {
    try {
      return await Categoria.findAll();
    } catch (error) {
      throw new ServerError("Error al conectar con la base de datos");
    }
  };

  public async getCategoriaId(id_Categoria: Categoria["id_categoria"]): Promise<Categoria | null> {
    try {
      return await Categoria.findByPk(id_Categoria);
    } catch (error) {
      throw new ServerError("Error al conectar con la base de datos");
    }
  };

  public async getCategoriaNombre(nombre_categoria: Categoria["nombre_categoria"]): Promise<Categoria | null> {
    try {
      return await Categoria.findOne({ where: { nombre_categoria } });
    } catch (error) {
      throw new ServerError("Error al conectar con la base de datos");
    }
  };

  public async createCategoria(data: CategoriaType): Promise<Categoria> {
    try {
      return await Categoria.create(data);
    } catch (error) {
      throw new ServerError("Error al insertar en la base de datos");
    }
  };

  public async updateCategoria(categoria: Categoria, data: CategoriaType): Promise<Categoria | null> {
    try {
      const updateData: CategoriaType = {
        nombre_categoria: data.nombre_categoria || categoria.nombre_categoria,
        descripcion_categoria: data.descripcion_categoria || categoria.descripcion_categoria,
        estado_categoria: data.estado_categoria || categoria.estado_categoria,
      };

      return await categoria.update(updateData);
    } catch (error) {
      throw new ServerError("Error al actualizar en la base de datos");
    }
  };
};

export default new CategoriaRepository();