import { ServerError } from "@/shared";

import { Categoria, ICategoriaFinderRepository } from "../../../domain";

import CategoriaModel from "../../database/sequelize/categoria.model";
import CategoriaPersistenceMapper from "../../mappers/categoriaPersis.mapper";

/**
 * Esta clase encapsula la logica de acceso a datos para realizar operaciones de consulta y busqueda
 * sobre la tabla categorias.
 * 
 * Utiliza la ORM Sequelize para realizar las consultas.
 * 
 * Mapea los resultados de la consulta a un objeto de dominio de categoria.
 *
 * @class CategoriaFinderRepository
 * @implements ICategoriaFinderRepository
*/
class CategoriaFinderRepository implements ICategoriaFinderRepository {
  public async getCategoriaId(id: number): Promise<Categoria | null> {
    try {
      const categoriaModel = await CategoriaModel.findByPk(id);

      return categoriaModel ? CategoriaPersistenceMapper.toDomain(categoriaModel) : null;
    } catch (error) {
      throw new ServerError("Error al obtener la categoria");
    }
  };

  public async getCategoriaNombre(nombre: string): Promise<Categoria | null> {
    try {
      const categoriaModel = await CategoriaModel.findOne({ 
        where: { nombre_categoria: nombre } 
      });

      return categoriaModel ? CategoriaPersistenceMapper.toDomain(categoriaModel) : null;
    } catch (error) {
      throw new ServerError("Error al obtener el nombre de la categoria");
    }
  };
};

export default CategoriaFinderRepository;