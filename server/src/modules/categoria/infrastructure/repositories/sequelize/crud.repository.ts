import { CategoriaSequelize, CategoriaSequelizeMapper } from "@/modules/categoria/infrastructure";
import { Categoria, ICategoriaCRUDRepository } from "@/modules/categoria/domain";
import { ServerError } from "@/errors";

/**
 * Esta clase encapsula la logica de acceso a datos para realizar operaciones CRUD
 * sobre la entidad categorias.
 * 
 * Mapea los resultados de la consulta a un objeto de dominio.
 * 
 * @class CategoriaCRUDRepository
 * @implements ICategoriaCRUDRepository
*/
class CategoriaCRUDRepository implements ICategoriaCRUDRepository {
  public async getCategorias(): Promise<Categoria[] | null> {
    try {
      const categorias = await CategoriaSequelize.findAll();

      return categorias ? CategoriaSequelizeMapper.toDomainList(categorias) : null;
    } catch (error) {
      throw new ServerError("Error al obtener las categorias");
    }
  };

  public async createCategoria(data: Categoria): Promise<Categoria | null> {
    try {
      const categoriaModel = CategoriaSequelizeMapper.toPersistence(data);

      const categoria = await CategoriaSequelize.create(categoriaModel);

      return categoria ? CategoriaSequelizeMapper.toDomain(categoria) : null;
    } catch (error) {
      throw new ServerError("Error al crear la categoria");
    }
  };

  public async updateCategoria(id: number, data: Categoria): Promise<Categoria | null> {
    try {
      const categoriaModel = CategoriaSequelizeMapper.toPersistence(data);

      const [affectedRows] = await CategoriaSequelize.update(categoriaModel, {
        where: { id_categoria: id }
      });

      if (affectedRows === 0) return null;

      const categoria = await CategoriaSequelize.findByPk(id);

      return categoria ? CategoriaSequelizeMapper.toDomain(categoria) : null;
    } catch (error) {
      throw new ServerError("Error al actualizar la categoria");
    }
  };
};

export default CategoriaCRUDRepository;