import { Categoria } from "@/models/productos";
import { CategoriaType } from "@/schemas/productos";

import ICategoriaRepository from "./iCategoriaRepository";
import ICategoriaFinder from "./finder/iCategoriaFinder";
import ICategoriaCRUD from "./crud/iCategoriaCRUD";

/**
 * Esta clase es la encargada de recibir los datos de la categoria desde la capa service e interactuar con la base de datos.
 * Realiza operaciones con la ORM de la base de datos, es parte del módulo de categoria del sistema.
 * 
 * @class CategoriaRepository
 * @implements ICategoriaRepository
 * @description Clase que encapsula la lógica de la base de datos para el modelo Categoria
*/
class CategoriaRepository implements ICategoriaRepository {
  private finder: ICategoriaFinder;
  private crud: ICategoriaCRUD;

  /**
   * @constructor CategoriaRepository
   * @description Crea una instancia de CategoriaRepository
   * @param {ICategoriaFinder} finder Instancia de CategoriaFinderRepository
   * @param {ICategoriaCRUD} crud Instancia de CategoriaCRUDRepository
   * @example
   * import { CategoriaRepository, CategoriaFinderRepository, CategoriaCRUDRepository } from "@/repositories/categorias";
   *
   * const categoriaFinderRepository = new CategoriaFinderRepository();
   * const categoriaCRUDRepository = new CategoriaCRUDRepository();
   * 
   * const categoriaRepository = new CategoriaRepository(categoriaFinderRepository, categoriaCRUDRepository);
  */
  constructor(finder: ICategoriaFinder, crud: ICategoriaCRUD) {
    this.finder = finder;
    this.crud = crud;
  };

  public async getCategoriaId(id_Categoria: Categoria["id_categoria"]): Promise<Categoria | null> {
    return await this.finder.getCategoriaId(id_Categoria);
  };

  public async getCategoriaNombre(nombre_categoria: Categoria["nombre_categoria"]): Promise<Categoria | null> {
    return await this.finder.getCategoriaNombre(nombre_categoria);
  };

  public async getCategorias(): Promise<Categoria[]> {
    return await this.crud.getCategorias();
  };

  public async createCategoria(data: CategoriaType): Promise<Categoria> {
    return await this.crud.createCategoria(data);
  };

  public async updateCategoria(categoria: Categoria, data: CategoriaType): Promise<Categoria> {
    return await this.crud.updateCategoria(categoria, data);
  };
};

export default CategoriaRepository;