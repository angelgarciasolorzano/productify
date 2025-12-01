import type { UpdateResult } from "@productify/shared/index.js";
import { ValidationError } from "@productify/shared/index.js";

import type { CategorieCreateDTO, CategorieDTO, CategorieUpdateDTO } from "../dtos/index.js";
import type {
  ICategorieCrudService,
  ICategorieFinderService,
  ICategorieService,
} from "../interfaces/index.js";

/**
 * Servicio principal de categorías que actúa como fachada.
 *
 * Delega operaciones de búsqueda y CRUD a servicios especializados.
 *
 * @see ICategorieFinderService
 * @see ICategorieCrudService
 */
export class CategorieService implements ICategorieService {
  private finder: ICategorieFinderService;

  private crud: ICategorieCrudService;

  /**
   * Crea una instancia del servicio.
   *
   * @param finder Servicio de búsqueda
   * @param crud Servicio CRUD
   */
  public constructor(finder: ICategorieFinderService, crud: ICategorieCrudService) {
    this.finder = finder;
    this.crud = crud;
  }

  /**
   * Valida que el ID de la categoría sea válido.
   *
   * @param id ID de la categoría
   * @throws {ValidationError} Si el ID no es válido
   */
  private validateCategorieId(id: number): void {
    if (!id || id < 1 || isNaN(id)) {
      throw new ValidationError("El id de la categoria no es valido");
    }
  }

  public async getCategorieId(id: number): Promise<CategorieDTO> {
    this.validateCategorieId(id);

    return await this.finder.getCategorieId(id);
  }

  public async getCategories(): Promise<CategorieDTO[]> {
    return await this.crud.getCategories();
  }

  public async createCategory(data: CategorieCreateDTO): Promise<CategorieDTO> {
    return await this.crud.createCategory(data);
  }

  public async updateCategory(
    id: number,
    data: CategorieUpdateDTO,
  ): Promise<UpdateResult<CategorieDTO>> {
    this.validateCategorieId(id);
    return await this.crud.updateCategory(id, data);
  }
}
