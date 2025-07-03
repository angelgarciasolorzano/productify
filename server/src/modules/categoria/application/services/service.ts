import { DatosError } from "@/errors";

import { 
  IService, 
  IFinderService, 
  ICrudService,
  ResponseDto, 
  CreateDto, 
  UpdateDto
} from "@/modules/categoria/application";

/**
 * Implementacion concreta del servicio de la aplicacion que actua como fachada para las
 * operaciones de busqueda y CRUD, delegando a los servicios especializados.
 * 
 * @class Service
 * @implements IService
 * @see IFinderService Para operaciones de consulta/busqueda
 * @see ICrudService Para operaciones CRUD basicas
*/
class Service implements IService {
  private finder: IFinderService;
  private crud: ICrudService;

  /**
   * @param {IFinderService} finder Implementacion del servicio de busqueda.
   * @param {ICrudService} crud Implementacion del servicio Crud.
  */
  constructor(finder: IFinderService, crud: ICrudService) {
    this.finder = finder;
    this.crud = crud;
  };

  /**
   * Valida que el id de la categoria sea valido.
   * 
   * @param {number} id El id de la categoria
   * @returns {void} No devuelve nada
   * @throws {DatosError} Si el id de la categoria no es valido
  */
  private validateCategoriaId(id: number): void {
    if (!id || id < 1 || isNaN(id)) {
      throw new DatosError("El id de la categoria no es valido");
    };
  };

  public async getCategoriaId(id: number): Promise<ResponseDto> {
    this.validateCategoriaId(id);

    return await this.finder.getCategoriaId(id);
  };

  public async getCategorias(): Promise<ResponseDto[]> {
    return await this.crud.getCategorias();
  };

  public async createCategoria(data: CreateDto): Promise<ResponseDto> {
    return await this.crud.createCategoria(data);
  };

  public async updateCategoria(id: number, data: UpdateDto): Promise<ResponseDto> {
    this.validateCategoriaId(id);

    return await this.crud.updateCategoria(id, data);
  };
};

export default Service;