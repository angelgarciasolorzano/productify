import { Categoria } from "@/models/productos";
import { CategoriaType } from "@/schemas/productos";
import { ServerError } from "@/errors";

import ICategoriaCRUDRepository from "./iCategoriaCRUD";

/**
 * Clase que encapsula la lógica para operaciones de creación, lectura, actualización y eliminación de la tabla Categoria
 * @class CategoriaCRUD
 * @implements ICategoriaCRUD
 * @description Crea una instancia de CategoriaCRUDRepository
*/
class CategoriaCRUDRepository implements ICategoriaCRUDRepository {
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

export default CategoriaCRUDRepository;