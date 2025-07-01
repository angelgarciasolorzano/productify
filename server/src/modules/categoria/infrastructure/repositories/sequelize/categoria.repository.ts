import { 
  Categoria, 
  ICategoriaRepository, 
  ICategoriaFinderRepository, 
  ICategoriaCRUDRepository 
} from "@/modules/categoria/domain";

/**
 * Implementacion concreta del repositorio de la entidad categorias que actua como fachada para las
 * operaciones de busqueda y CRUD, delegando a los repositorios especializados.
 * 
 * @class CategoriaRepository
 * @implements ICategoriaRepository
 * @see ICategoriaFinderRepository Para operaciones de consulta/busqueda
 * @see ICategoriaCRUDRepository Para operaciones CRUD basicas
*/
class CategoriaRepository implements ICategoriaRepository {
  private finder: ICategoriaFinderRepository;
  private crud: ICategoriaCRUDRepository;

  /**
   * @param {ICategoriaFinderRepository} finder Implementacion del repositorio de busqueda de categorias
   * @param {ICategoriaCRUDRepository} crud Implementacion del repositorio de CRUD de categorias
  */
  constructor(finder: ICategoriaFinderRepository, crud: ICategoriaCRUDRepository) {
    this.finder = finder;
    this.crud = crud;
  };

  public async getCategoriaId(id: number): Promise<Categoria | null> {
    return await this.finder.getCategoriaId(id);
  };

  public async getCategoriaNombre(nombre: string): Promise<Categoria | null> {
    return await this.finder.getCategoriaNombre(nombre);
  };

  public async getCategorias(): Promise<Categoria[] | null> {
    return await this.crud.getCategorias();
  };

  public async createCategoria(data: Categoria): Promise<Categoria | null> {
    return await this.crud.createCategoria(data);
  };

  public async updateCategoria(id: number, data: Categoria): Promise<Categoria | null> {
    return await this.crud.updateCategoria(id, data);
  };
};

export default CategoriaRepository;