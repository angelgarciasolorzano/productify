import { 
  ICategoriaService, ICategoriaFinderService, ICategoriaCRUDService,
  CategoriaResponseDto, CreateCategoriaDto, UpdateCategoriaDto 
} from "@/modules/categoria/application";
import { DatosError } from "@/errors";

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
  private finder: ICategoriaFinderService;
  private crud: ICategoriaCRUDService;

  /**
   * @constructor CategoriaService
   * @description Crea una instancia de CategoriaService
   * @param {ICategoriaFinderService} finder Instancia de CategoriaFinderService
   * @param {ICategoriaCRUDService} crud Instancia de CategoriaCRUDService
  */
  constructor(finder: ICategoriaFinderService, crud: ICategoriaCRUDService) {
    this.finder = finder;
    this.crud = crud;
  };

  /**
   * @param id_Categoria El id de la categoria
   * @returns No devuelve nada
   * @throws {DatosError} Si el id de la categoria no es valido
  */
  private validateCategoriaId(id_Categoria: number): void {
    if (!id_Categoria || id_Categoria < 1 || isNaN(id_Categoria)) {
      throw new DatosError("El id de la categoria no es valido");
    };
  };

  public async getCategoriaId(id: number): Promise<CategoriaResponseDto> {
    this.validateCategoriaId(id);

    return await this.finder.getCategoriaId(id);
  };

  public async getCategorias(): Promise<CategoriaResponseDto[]> {
    return await this.crud.getCategorias();
  };

  public async createCategoria(data: CreateCategoriaDto): Promise<CategoriaResponseDto> {
    return await this.crud.createCategoria(data);
  };

  public async updateCategoria(id: number, data: UpdateCategoriaDto): Promise<CategoriaResponseDto> {
    this.validateCategoriaId(id);

    return await this.crud.updateCategoria(id, data);
  };
};

export default CategoriaService;