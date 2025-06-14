import { Categoria } from "@/models/productos";
import { CategoriaType } from "@/schemas/productos"
import { ServerError } from "@/errors";

class CategoriaRepository {
  public async getCategorias(): Promise<Categoria[]> {
    try {
      return await Categoria.findAll();
    } catch (error) {
      throw new ServerError("Error al obtener las categorias");
    }
  };

  public async getCategoriaId(id_Categoria: Categoria["id_categoria"]): Promise<Categoria | null> {
    try {
      return await Categoria.findByPk(id_Categoria);
    } catch (error) {
      throw new ServerError("Error al obtener la categoria");
    }
  };

  public async getCategoriaNombre(nombre_categoria: Categoria["nombre_categoria"]): Promise<Categoria | null> {
    try {
      return await Categoria.findOne({ where: { nombre_categoria } });
    } catch (error) {
      throw new ServerError("Error al obtener el nombre de la categoria");
    }
  };

  public async createCategoria(data: CategoriaType): Promise<Categoria> {
    try {
      return await Categoria.create(data);
    } catch (error) {
      throw new ServerError("Error al crear la categoria");
    }
  };

  public async updateCategoria(categoria: Categoria, data: CategoriaType): Promise<Categoria | null> {
    try {
      return await categoria.update(data);
    } catch (error) {
      throw new ServerError("Error al actualizar la categoria");
    }
  };
};

export default new CategoriaRepository();