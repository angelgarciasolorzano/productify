import { ServerError } from "@/shared";
import { Categoria, ICategoriaFinderRepository } from "@categoria/domain";
import { CategoriaSequelize, CategoriaPersistenceMapper } from "@categoria/infrastructure";

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
      const categoriaModel = await CategoriaSequelize.findByPk(id);

      return categoriaModel ? CategoriaPersistenceMapper.toDomain(categoriaModel) : null;
    } catch (error) {
      throw new ServerError("Error al obtener la categoria");
    }
  };

  public async getCategoriaNombre(nombre: string): Promise<Categoria | null> {
    try {
      const categoriaModel = await CategoriaSequelize.findOne({ 
        where: { nombre_categoria: nombre } 
      });

      return categoriaModel ? CategoriaPersistenceMapper.toDomain(categoriaModel) : null;
    } catch (error) {
      throw new ServerError("Error al obtener el nombre de la categoria");
    }
  };
};

export { CategoriaFinderRepository as CategoriaFinderRepositorySequelize };