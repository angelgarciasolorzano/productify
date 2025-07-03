import { 
  Domain, 
  CreateDomain,
  UpdateDomain,
  IFacadeRepository, 
  IFinderRepository, 
  ICrudRepository, 
} from "@/modules/categoria/domain";

/**
 * Implementacion concreta del repositorio de la tabla categorias que actua como fachada para las
 * operaciones de busqueda y CRUD, delegando a los repositorios especializados.
 * 
 * @class FacadeRepository
 * @implements IFacadeRepository
 * @see IFinderRepository Para operaciones de consulta/busqueda
 * @see ICrudRepository Para operaciones CRUD basicas
*/
class FacadeRepository implements IFacadeRepository {
  private finder: IFinderRepository;
  private crud: ICrudRepository;

  /**
   * @param {IFinderRepository} finder Implementacion del repositorio de busqueda
   * @param {ICrudRepository} crud Implementacion del repositorio Crud
  */
  constructor(finder: IFinderRepository, crud: ICrudRepository) {
    this.finder = finder;
    this.crud = crud;
  };

  public async getCategoriaId(id: number): Promise<Domain | null> {
    return await this.finder.getCategoriaId(id);
  };

  public async getCategoriaNombre(nombre: string): Promise<Domain | null> {
    return await this.finder.getCategoriaNombre(nombre);
  };

  public async getCategorias(): Promise<Domain[] | null> {
    return await this.crud.getCategorias();
  };

  public async createCategoria(data: CreateDomain): Promise<Domain | null> {
    return await this.crud.createCategoria(data);
  };

  public async updateCategoria(id: number, data: UpdateDomain): Promise<Domain | null> {
    return await this.crud.updateCategoria(id, data);
  };
};

export default FacadeRepository;