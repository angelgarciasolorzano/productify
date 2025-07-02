import { ServerError } from "@/errors";
import { CategoriaMySQlSequelize, CategoriaMapper } from "@/modules/categoria/infrastructure";

import { 
  ICategoriaCRUDRepository,
  CategoriaDomain, 
  CategoriaCreateDomain, 
  CategoriaUpdateDomain 
} from "@/modules/categoria/domain";

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
  public async getCategorias(): Promise<CategoriaDomain[] | null> {
    try {
      const categorias = await CategoriaMySQlSequelize.findAll();

      return categorias ? CategoriaMapper.toDomainList(categorias) : null;
    } catch (error) {
      throw new ServerError("Error al obtener las categorias");
    }
  };

  public async createCategoria(data: CategoriaCreateDomain): Promise<CategoriaDomain | null> {
    try {
      const categoriaModel = CategoriaMapper.toPersistenceFromCreate(data);

      const categoria = await CategoriaMySQlSequelize.create(categoriaModel);

      return categoria ? CategoriaMapper.toDomain(categoria) : null;
    } catch (error) {
      throw new ServerError("Error al crear la categoria");
    }
  };

  public async updateCategoria(id: number, data: CategoriaUpdateDomain): Promise<CategoriaDomain | null> {
    try {
      const categoriaModel = CategoriaMapper.toPersistenceFromUpdate(data);

      const [affectedRows] = await CategoriaMySQlSequelize.update(categoriaModel, {
        where: { id_categoria: id }
      });

      if (affectedRows === 0) return null;

      const categoria = await CategoriaMySQlSequelize.findByPk(id);

      return categoria ? CategoriaMapper.toDomain(categoria) : null;
    } catch (error) {
      throw new ServerError("Error al actualizar la categoria");
    }
  };
};

export default CategoriaCRUDRepository;