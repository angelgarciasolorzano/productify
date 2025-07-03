import { ICrudRepository,Domain, CreateDomain, UpdateDomain } from "@/modules/categoria/domain";
import { CategoriaSequelize, Mapper } from "@/modules/categoria/infrastructure";
import { ServerError } from "@/errors";

/**
 * Esta clase encapsula la logica de acceso a datos para realizar operaciones CRUD
 * sobre la tabla categorias.
 * 
 * Mapea los resultados de la consulta a un objeto de dominio.
 * 
 * @class CrudRepository
 * @implements ICrudRepository
*/
class CrudRepository implements ICrudRepository {
  public async getCategorias(): Promise<Domain[] | null> {
    try {
      const categorias = await CategoriaSequelize.findAll();

      return categorias ? Mapper.toDomainList(categorias) : null;
    } catch (error) {
      throw new ServerError("Error al obtener las categorias");
    }
  };

  public async createCategoria(data: CreateDomain): Promise<Domain | null> {
    try {
      const categoriaModel = Mapper.toPersistenceFromCreate(data);

      const categoria = await CategoriaSequelize.create(categoriaModel);

      return categoria ? Mapper.toDomain(categoria) : null;
    } catch (error) {
      throw new ServerError("Error al crear la categoria");
    }
  };

  public async updateCategoria(id: number, data: UpdateDomain): Promise<Domain | null> {
    try {
      const categoriaModel = Mapper.toPersistenceFromUpdate(data);

      const [affectedRows] = await CategoriaSequelize.update(categoriaModel, {
        where: { id_categoria: id }
      });

      if (affectedRows === 0) return null;

      const categoria = await CategoriaSequelize.findByPk(id);

      return categoria ? Mapper.toDomain(categoria) : null;
    } catch (error) {
      throw new ServerError("Error al actualizar la categoria");
    }
  };
};

export default CrudRepository;