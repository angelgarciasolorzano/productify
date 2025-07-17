import { ServerError } from "@/shared";

import { 
  ICategoriaCrudRepository, 
  Categoria, 
  CategoriaCreate, 
  CategoriaUpdate 
} from "@categoria/domain";

import { CategoriaSequelize, CategoriaPersistenceMapper } from "@categoria/infrastructure";

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
  public async getCategorias(): Promise<Categoria[]> {
    try {
      const categorias = await CategoriaSequelize.findAll();

      return CategoriaPersistenceMapper.toDomainList(categorias);
    } catch (error) {
      throw new ServerError("Error al obtener las categorias");
    }
  };

  public async createCategoria(data: CategoriaCreate): Promise<Categoria> {
    try {
      const categoriaModel = CategoriaPersistenceMapper.toPersistenceFromCreate(data);

      const categoria = await CategoriaSequelize.create(categoriaModel);

      return CategoriaPersistenceMapper.toDomain(categoria);
    } catch (error) {
      throw new ServerError("Error al crear la categoria");
    }
  };

  public async updateCategoria(id: number, data: CategoriaUpdate): Promise<Categoria> {
    try {
      const categoriaModel = CategoriaPersistenceMapper.toPersistenceFromUpdate(data);

      await CategoriaSequelize.update(categoriaModel, {
        where: { id_categoria: id }
      });

      const categoria = await CategoriaSequelize.findByPk(id);

      if (!categoria) throw new ServerError("No se pudo recuperar la categoria tras la actualización");

      return CategoriaPersistenceMapper.toDomain(categoria);
    } catch (error) {
      throw new ServerError("Error al actualizar la categoria");
    }
  };
};

export { CategoriaCrudRepository as CategoriaCrudRepositorySequelize };