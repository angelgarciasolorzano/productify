import { 
  ICategoriaCrudRepository,
  Categoria, 
  CategoriaCreateDomain, 
  CategoriaUpdateDomain 
} from "@/modules/categoria/domain";

import { CategoriaModel, CategoriaPersistenceMapper } from "@/modules/categoria/infrastructure";
import { ServerError } from "@/shared";

/**
 * Esta clase encapsula la logica de acceso a datos para realizar operaciones CRUD
 * sobre la tabla categorias.
 * 
 * Utiliza la ORM Sequelize para realizar las consultas.
 * 
 * Mapea los resultados de la consulta a un objeto de dominio de categoria.
 * 
 * @class CategoriaCrudRepository
 * @implements ICategoriaCrudRepository
*/
class CategoriaCrudRepository implements ICategoriaCrudRepository {
  public async getCategorias(): Promise<Categoria[] | null> {
    try {
      const categorias = await CategoriaModel.findAll();

      return categorias ? CategoriaPersistenceMapper.toDomainList(categorias) : null;
    } catch (error) {
      throw new ServerError("Error al obtener las categorias");
    }
  };

  public async createCategoria(data: CategoriaCreateDomain): Promise<Categoria | null> {
    try {
      const categoriaModel = CategoriaPersistenceMapper.toPersistenceFromCreate(data);

      const categoria = await CategoriaModel.create(categoriaModel);

      return categoria ? CategoriaPersistenceMapper.toDomain(categoria) : null;
    } catch (error) {
      throw new ServerError("Error al crear la categoria");
    }
  };

  public async updateCategoria(id: number, data: CategoriaUpdateDomain): Promise<Categoria | null> {
    try {
      const categoriaModel = CategoriaPersistenceMapper.toPersistenceFromUpdate(data);

      const [affectedRows] = await CategoriaModel.update(categoriaModel, {
        where: { id_categoria: id }
      });

      if (affectedRows === 0) return null;

      const categoria = await CategoriaModel.findByPk(id);

      return categoria ? CategoriaPersistenceMapper.toDomain(categoria) : null;
    } catch (error) {
      throw new ServerError("Error al actualizar la categoria");
    }
  };
};

export default CategoriaCrudRepository;