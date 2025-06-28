import { CategoriaSequelize } from "@/modules/categoria/infrastructure";
import { Categoria, ICategoriaFinderRepository } from "@/modules/categoria/domain";
import { CategoriaSequelizeMapper } from "@/modules/categoria/infrastructure";
import { ServerError } from "@/errors";

/**
 * Clase que encapsula la lógica para operaciones de consulta y busqueda de la tabla Categoria
 * @class CategoriaFinder
 * @implements ICategoriaFinder
 * @description Crea una instancia de CategoriaFinderRepository
*/
class CategoriaFinderRepository implements ICategoriaFinderRepository {
  public async getCategoriaId(id: number): Promise<Categoria | null> {
    try {
      const categoriaModel = await CategoriaSequelize.findByPk(id);

      return categoriaModel ? CategoriaSequelizeMapper.toDomain(categoriaModel) : null;
    } catch (error) {
      throw new ServerError("Error al obtener la categoria");
    }
  };

  public async getCategoriaNombre(nombre: string): Promise<Categoria | null> {
    try {
      const categoriaModel = await CategoriaSequelize.findOne({ 
        where: { nombre_categoria: nombre } 
      });

      return categoriaModel ? CategoriaSequelizeMapper.toDomain(categoriaModel) : null;
    } catch (error) {
      throw new ServerError("Error al obtener el nombre de la categoria");
    }
  };
};

export default CategoriaFinderRepository;