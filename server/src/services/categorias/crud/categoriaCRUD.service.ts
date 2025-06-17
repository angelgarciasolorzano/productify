import { Categoria } from "@/models/productos";
import { ICategoriaRepository } from "@/repositories/categorias";
import { CategoriaType } from "@/schemas/productos";
import { NotFoundError, DatosError } from "@/errors";

import ICategoriaCRUDService from "./iCategoriaCRUD.service";

/**
 * @class CategoriaCRUDService
 * @implements ICategoriaCRUDService
 * @description Clase que encapsula la logica de negocio para operaciones CRUD de Categorias
*/
class CategoriaCRUDService implements ICategoriaCRUDService {
  /**
   * @constructor CategoriaCRUDService
   * @description Crea una instancia de CategoriaCRUDService
   * @param categoriaRepository Instancia de CategoriaRepository
   * @example
   * import { CategoriaRepository, CategoriaFinder, CategoriaCRUD } from "@/repositories/categorias";
   * import { CategoriaCRUDService } from "@/services/categorias";
   *
   * const categoriaRepository = new CategoriaRepository(CategoriaFinder, CategoriaCRUD);
   * 
   * const categoriaCRUDService = new CategoriaCRUDService(categoriaRepository);
  */
  constructor(private categoriaRepository: ICategoriaRepository) {};

  public async getCategorias(): Promise<Categoria[]> {
    const categorias = await this.categoriaRepository.getCategorias();

    if (!categorias || categorias.length === 0) {
      throw new NotFoundError("No se encontraron categorias");
    };

    return categorias;
  };

  public async createCategoria(data: CategoriaType): Promise<Categoria> {
    const categoriaExiste = await this.categoriaRepository.getCategoriaNombre(data.nombre_categoria);

    if (categoriaExiste) throw new DatosError("La categoria ya existe");

    const categoria = await this.categoriaRepository.createCategoria(data);

    if (!categoria) throw new NotFoundError("No se pudo crear la categoria");

    return categoria;
  };

  public async updateCategoria(id_Categoria: Categoria["id_categoria"], data: CategoriaType): Promise<Categoria> {
    const categoriaExiste = await this.categoriaRepository.getCategoriaId(id_Categoria);

    if (!categoriaExiste) throw new NotFoundError("La categotia no existe");

    const hasNoChanges = Object.keys(data).every(key => {
      const typedKey = key as keyof CategoriaType;
      return categoriaExiste[typedKey] === data[typedKey];
    });

    if (hasNoChanges) throw new DatosError("No hay cambios en los datos proporcionados");

    const categoria = await this.categoriaRepository.updateCategoria(categoriaExiste, data);

    if (!categoria) throw new NotFoundError("No se pudo actualizar la categoria");

    return categoria;
  };
};

export default CategoriaCRUDService;