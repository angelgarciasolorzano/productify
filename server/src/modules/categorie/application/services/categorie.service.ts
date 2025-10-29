import { ValidationError, UpdateResult } from "@/shared";

import { 
  ICategoriaService,
  ICategoriaFinderService,
  ICategoriaCrudService,
  CategoriaCreateDto,
  CategoriaUpdateDto,
  CategoriaDto
} from "@categoria/application";

/**
 * Implementacion concreta del servicio de la aplicacion que actua como fachada para las
 * operaciones de busqueda y CRUD, delegando a los servicios especializados.
 * 
 * @class CategoriaService
 * @implements ICategoriaService
 * @see ICategoriaFinderService Para operaciones de consulta/busqueda
 * @see ICategoriaCrudService Para operaciones CRUD basicas
*/
export class CategoriaService implements ICategoriaService {
  private finder: ICategoriaFinderService;
  private crud: ICategoriaCrudService;

  /**
   * @param {ICategoriaFinderService} finder Implementacion del servicio de busqueda.
   * @param {ICategoriaCrudService} crud Implementacion del servicio Crud.
  */
  constructor(finder: ICategoriaFinderService, crud: ICategoriaCrudService) {
    this.finder = finder;
    this.crud = crud;
  };

  /**
   * Valida que el id de la categoria sea valido.
   * 
   * @param {number} id El id de la categoria
   * @returns {void} No devuelve nada
   * @throws {ValidationError} Si el id de la categoria no es valido
  */
  private validateCategoriaId(id: number): void {
    if (!id || id < 1 || isNaN(id)) {
      throw new ValidationError("El id de la categoria no es valido");
    };
  };

  public async getCategoriaId(id: number): Promise<CategoriaDto> {
    this.validateCategoriaId(id);

    return await this.finder.getCategoriaId(id);
  };

  public async getCategorias(): Promise<CategoriaDto[]> {
    return await this.crud.getCategorias();
  };

  public async createCategoria(data: CategoriaCreateDto): Promise<CategoriaDto> {
    return await this.crud.createCategoria(data);
  };

  public async updateCategoria(id: number, data: CategoriaUpdateDto): Promise<UpdateResult<CategoriaDto>> {
    this.validateCategoriaId(id);

    return await this.crud.updateCategoria(id, data);
  };
};