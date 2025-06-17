import { Categoria } from "@/models/productos";
import { ICategoriaRepository } from "@/repositories/categorias";
import { NotFoundError } from "@/errors";

import ICategoriaFinderService from "./iCategoriaFinder.service";

/**
 * @class CategoriaFinderService
 * @implements ICategoriaFinderService
 * @description Clase que encapsula la logica de negocio para operaciones de busqueda de Categorias
*/
class CategoriaFinderService implements ICategoriaFinderService {
  /**
   * @constructor CategoriaFinderService
   * @description Crea una instancia de CategoriaFinderService
   * @param categoriaRepository Instancia de CategoriaRepository
   * @example
   * import { CategoriaRepository, CategoriaFinderRepository, CategoriaCRUDRepository } from "@/repositories/categorias";
   * import { CategoriaFinderService } from "@/services/categorias";
   * 
   * const categoriaFinderRepository = new CategoriaFinderRepository();
   * const categoriaCRUDRepository = new CategoriaCRUDRepository();
   * 
   * const categoriaRepository = new CategoriaRepository(CategoriaFinderRepository, CategoriaCRUDRepository);
   *
   * const categoriaFinderService = new CategoriaFinderService(categoriaRepository);
  */
  constructor(private categoriaRepository: ICategoriaRepository) {};

  public async getCategoriaId(id_Categoria: Categoria["id_categoria"]): Promise<Categoria> {
    const categoria = await this.categoriaRepository.getCategoriaId(id_Categoria);

    if (!categoria) throw new NotFoundError("No se encontro la categoria");

    return categoria;
  };
};

export default CategoriaFinderService;