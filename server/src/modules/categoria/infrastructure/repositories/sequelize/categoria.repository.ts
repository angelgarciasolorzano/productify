import { Categoria } from "@/modules/categoria/domain";
import { 
  ICategoriaRepository, ICategoriaFinderRepository, ICategoriaCRUDRepository 
} from "@/modules/categoria/domain";

/**
 * Esta clase es la encargada de recibir los datos de la categoria desde la capa service e interactuar con la base de datos.
 * Realiza operaciones con la ORM de la base de datos, es parte del módulo de categoria del sistema.
 * 
 * @class CategoriaRepository
 * @implements ICategoriaRepository
 * @description Clase que encapsula la lógica de la base de datos para el modelo Categoria
*/
class CategoriaRepository implements ICategoriaRepository {
  private finder: ICategoriaFinderRepository;
  private crud: ICategoriaCRUDRepository;

  /**
   * @constructor CategoriaRepository
   * @description Crea una instancia de CategoriaRepository
   * @param {ICategoriaFinderRepository} finder Instancia de CategoriaFinderRepository
   * @param {ICategoriaCRUDRepository} crud Instancia de CategoriaCRUDRepository
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