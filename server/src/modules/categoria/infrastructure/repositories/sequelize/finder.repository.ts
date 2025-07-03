import { ModelSequelize, Mapper } from "@/modules/categoria/infrastructure";
import { Domain, IFinderRepository } from "@/modules/categoria/domain";
import { ServerError } from "@/errors";

/**
 * Esta clase encapsula la logica de acceso a datos para realizar operaciones de consulta y busqueda
 * sobre la tabla categorias.
 * 
 * Mapea los resultados de la consulta a un objeto de dominio.
 *
 * @class FinderRepository
 * @implements IFinderRepository
*/
class FinderRepository implements IFinderRepository {
  public async getCategoriaId(id: number): Promise<Domain | null> {
    try {
      const categoriaModel = await ModelSequelize.findByPk(id);

      return categoriaModel ? Mapper.toDomain(categoriaModel) : null;
    } catch (error) {
      throw new ServerError("Error al obtener la categoria");
    }
  };

  public async getCategoriaNombre(nombre: string): Promise<Domain | null> {
    try {
      const categoriaModel = await ModelSequelize.findOne({ 
        where: { nombre_categoria: nombre } 
      });

      return categoriaModel ? Mapper.toDomain(categoriaModel) : null;
    } catch (error) {
      throw new ServerError("Error al obtener el nombre de la categoria");
    }
  };
};

export default FinderRepository;