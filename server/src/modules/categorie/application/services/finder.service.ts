import { NotFoundError } from "@productify/shared/index.js";

import type { ICategoryFinderRepository } from "../../domain/index.js";
import type { CategoryDTO } from "../dtos/categoryOutput.dto.js";
import type { ICategoryFinderService } from "../interfaces/serviceFinder.interface.js";
import { CategoryMapper } from "../mappers/category.mapper.js";

/**
 * Servicio para operaciones de búsqueda de categorías.
 *
 * Encapsula la lógica de negocio para buscar categorías, comunicándose con el repositorio
 * y transformando los datos en DTOs para el controlador.
 *
 * @see ICategoryFinderRepository Para acceder a los datos
 */
export class CategoryFinderService implements ICategoryFinderService {
  /**
   * Crea una instancia del servicio.
   *
   * @param categoryRepository Implementación del repositorio de búsqueda
   */
  public constructor(private categoryRepository: ICategoryFinderRepository) {}

  public async getCategoryById(id: number): Promise<CategoryDTO> {
    const category = await this.categoryRepository.getCategoryById(id);

    if (!category) throw new NotFoundError("No se encontro la categoria");

    return CategoryMapper.toDataDTO(category);
  }
}
