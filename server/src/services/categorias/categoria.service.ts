import { Categoria } from "@/models/productos";
import { CategoriaType } from "@/schemas/productos";
import { DatosError } from "@/errors";

import ICategoriaService from "./iCategoria.service";
import ICategoriaFinder from "./finder/iCategoriaFinder.service";
import ICategoriaCRUD from "./crud/iCategoriaCRUD.service";

/**
 * Esta clase es la encargada de recibir los datos de la categoría desde el controlador y mandarlos al repositorio para su manipulación.
 * Realiza operaciones de la logica de negocio, es parte del módulo de categoria del sistema.
 * Interactua con la capa mas baja del sistema (CategoriaRepository)
 * 
 * @class CategoriaService
 * @implements ICategoriaService
 * @description Clase que encapsula la logica de negocio para las operaciones Categorias
*/
class CategoriaService implements ICategoriaService {
  private finder: ICategoriaFinder;
  private crud: ICategoriaCRUD;

  /**
   * @constructor CategoriaService
   * @description Crea una instancia de CategoriaService
   * @param {ICategoriaFinder} finder Instancia de CategoriaFinderService
   * @param {ICategoriaCRUD} crud Instancia de CategoriaCRUDService
   * @example
   * import { CategoriaRepository, CategoriaFinderRepository, CategoriaCRUDRepository } from "@/repositories/categorias";
   * import { CategoriaService, CategoriaFinderService, CategoriaCRUDService } from "@/services/categorias";
   * 
   * const categoriaFinderRepository = new CategoriaFinderRepository();
   * const categoriaCRUDRepository = new CategoriaCRUDRepository();
   * 
   * const categoriaRepository = new CategoriaRepository(CategoriaFinderRepository, CategoriaCRUDRepository);
   * 
   * const categoriaFinderService = new CategoriaFinderService(CategoriaRepository);
   * const categoriaCRUDService = new CategoriaCRUDService(CategoriaRepository);
   * 
   * const categoriaService = new CategoriaService(categoriaFinderService, categoriaCRUDService);
  */
  constructor(finder: ICategoriaFinder, crud: ICategoriaCRUD) {
    this.finder = finder;
    this.crud = crud;
  };

  /**
   * @param id_Categoria El id de la categoria
   * @returns No devuelve nada
   * @throws {DatosError} Si el id de la categoria no es valido
  */
  private validateCategoriaId(id_Categoria: Categoria["id_categoria"]): void {
    if (!id_Categoria || id_Categoria < 1 || isNaN(id_Categoria)) {
      throw new DatosError("El id de la categoria no es valido");
    };
  };

  public async getCategoriaId(id_Categoria: Categoria["id_categoria"]): Promise<Categoria> {
    this.validateCategoriaId(id_Categoria);

    return await this.finder.getCategoriaId(id_Categoria);
  };
  
  public async getCategorias(): Promise<Categoria[]> {
    return await this.crud.getCategorias();
  };

  public async createCategoria(data: CategoriaType): Promise<Categoria> {
    return await this.crud.createCategoria(data);
  };

  public async updateCategoria(id_Categoria: Categoria["id_categoria"], data: CategoriaType): Promise<Categoria> {
    this.validateCategoriaId(id_Categoria);

    return await this.crud.updateCategoria(id_Categoria, data);
  };
};

export default CategoriaService;