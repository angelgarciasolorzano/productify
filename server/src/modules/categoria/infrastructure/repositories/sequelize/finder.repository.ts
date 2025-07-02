import { CategoriaMySQlSequelize, CategoriaSequelizeMapper } from "@/modules/categoria/infrastructure";
import { CategoriaDomain, ICategoriaFinderRepository } from "@/modules/categoria/domain";
import { ServerError } from "@/errors";

/**
 * Esta clase encapsula la logica de acceso a datos para realizar operaciones de consulta y busqueda
 * sobre la entidad categorias.
 * 
 * Mapea los resultados de la consulta a un objeto de dominio.
 *
 * @class CategoriaFinderRepository
 * @implements ICategoriaFinderRepository
*/
class CategoriaFinderRepository implements ICategoriaFinderRepository {
  public async getCategoriaId(id: number): Promise<CategoriaDomain | null> {
    try {
      const categoriaModel = await CategoriaMySQlSequelize.findByPk(id);

      return categoriaModel ? CategoriaSequelizeMapper.toDomain(categoriaModel) : null;
    } catch (error) {
      throw new ServerError("Error al obtener la categoria");
    }
  };

  public async getCategoriaNombre(nombre: string): Promise<CategoriaDomain | null> {
    try {
      const categoriaModel = await CategoriaMySQlSequelize.findOne({ 
        where: { nombre_categoria: nombre } 
      });

      return categoriaModel ? CategoriaSequelizeMapper.toDomain(categoriaModel) : null;
    } catch (error) {
      throw new ServerError("Error al obtener el nombre de la categoria");
    }
  };
};

export default CategoriaFinderRepository;