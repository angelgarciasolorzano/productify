import { Categoria } from "@/models/productos";
import { ServerError } from "@/errors";
import ICategoriaCRUD from "./iCategoriaCRUD";
import { CategoriaType } from "@/schemas/productos";

/**
 * @class CategoriaCRUD
 * @implements ICategoriaCRUD
 * @description Clase que encapsula la lógica para operaciones de creación, lectura, actualización y eliminación de la tabla Categoria
*/
class CategoriaCRUD implements ICategoriaCRUD {
  public async getCategorias(): Promise<Categoria[]> {
    try {
      return await Categoria.findAll();
    } catch (error) {
      throw new ServerError("Error al obtener las categorias");
    }
  };

  public async createCategoria(data: CategoriaType): Promise<Categoria> {
    try {
      return await Categoria.create(data);
    } catch (error) {
      throw new ServerError("Error al crear la categoria");
    }
  };

  public async updateCategoria(categoria: Categoria, data: CategoriaType): Promise<Categoria> {
    try {
      return await categoria.update(data);
    } catch (error) {
      throw new ServerError("Error al actualizar la categoria");
    }
  };
};

export default new CategoriaCRUD();