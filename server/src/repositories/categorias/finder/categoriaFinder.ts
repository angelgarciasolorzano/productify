import { Categoria } from "@/models/productos";
import { ServerError } from "@/errors";

import ICategoriaFinderRepository from "./iCategoriaFinder";

/**
 * Clase que encapsula la lógica para operaciones de consulta y busqueda de la tabla Categoria
 * @class CategoriaFinder
 * @implements ICategoriaFinder
 * @description Crea una instancia de CategoriaFinderRepository
*/
class CategoriaFinderRepository implements ICategoriaFinderRepository {
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
};

export default CategoriaFinderRepository;