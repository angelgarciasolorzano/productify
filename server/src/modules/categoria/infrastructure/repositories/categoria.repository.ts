import { 
  Categoria,
  CategoriaCreate,
  CategoriaUpdate,
  ICategoriaRepository,
  ICategoriaFinderRepository,
  ICategoriaCrudRepository
} from "@categoria/domain";

/**
 * Implementacion concreta del repositorio de la tabla categorias que actua como fachada para las
 * operaciones de busqueda y CRUD, delegando a los repositorios especializados.
 * 
 * @class CategoriaRepository
 * @implements ICategoriaRepository
 * @see ICategoriaFinderRepository Para operaciones de consulta/busqueda
 * @see ICategoriaCrudRepository Para operaciones CRUD basicas
*/
export class CategoriaRepository implements ICategoriaRepository {
  private finder: ICategoriaFinderRepository;
  private crud: ICategoriaCrudRepository;

  /**
   * @param {ICategoriaFinderRepository} finder Implementacion del repositorio de busqueda
   * @param {ICategoriaCrudRepository} crud Implementacion del repositorio Crud
  */
  constructor(finder: ICategoriaFinderRepository, crud: ICategoriaCrudRepository) {
    this.finder = finder;
    this.crud = crud;
  };

  public async getCategoriaId(id: number): Promise<Categoria | null> {
    return await this.finder.getCategoriaId(id);
  };

  public async getCategoriaNombre(nombre: string): Promise<Categoria | null> {
    return await this.finder.getCategoriaNombre(nombre);
  };

  public async getCategorias(): Promise<Categoria[]> {
    return await this.crud.getCategorias();
  };

  public async createCategoria(data: CategoriaCreate): Promise<Categoria> {
    return await this.crud.createCategoria(data);
  };

  public async updateCategoria(id: number, data: CategoriaUpdate): Promise<Categoria> {
    return await this.crud.updateCategoria(id, data);
  };
};