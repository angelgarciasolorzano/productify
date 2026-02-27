import { ValidationError } from "@productify/shared/errors/errors.js";
import type { UpdateResult } from "@productify/shared/types/updateResult.type.js";

import type { CategoryCreateDTO, CategoryDTO, CategoryUpdateDTO } from "../dtos/index.js";
import type {
  ICategoryCrudService,
  ICategoryFinderService,
  ICategoryService,
} from "../interfaces/index.js";

/**
 * Servicio principal de categorías que actúa como fachada.
 *
 * Delega operaciones de búsqueda y CRUD a servicios especializados.
 *
 * @see ICategoryFinderService
 * @see ICategoryCrudService
 */
export class CategoryService implements ICategoryService {
  private finder: ICategoryFinderService;

  private crud: ICategoryCrudService;

  /**
   * Crea una instancia del servicio.
   *
   * @param finder Servicio de búsqueda
   * @param crud Servicio CRUD
   */
  public constructor(finder: ICategoryFinderService, crud: ICategoryCrudService) {
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

  public async getCategoryById(id: number): Promise<CategoryDTO> {
    this.validateCategorieId(id);

    return await this.finder.getCategoryById(id);
  }

  public async getCategories(): Promise<CategoryDTO[]> {
    return await this.crud.getCategories();
  }

  public async createCategory(data: CategoryCreateDTO): Promise<CategoryDTO> {
    return await this.crud.createCategory(data);
  }

  public async updateCategory(
    id: number,
    data: CategoryUpdateDTO,
  ): Promise<UpdateResult<CategoryDTO>> {
    this.validateCategorieId(id);
    return await this.crud.updateCategory(id, data);
  }
}
