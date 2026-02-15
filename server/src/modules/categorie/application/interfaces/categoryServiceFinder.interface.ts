import type { CategoryDTO } from "../dtos/categoryOutput.dto.js";

/**
 * Interfaz para búsqueda de categorías.
 *
 * Define métodos para obtener categorías por ID usando DTOs.
 */
export interface ICategoryFinderService {
  /**
   * Obtiene una categoría por ID.
   *
   * @param id ID de la categoría.
   * @returns Categoría encontrada.
   * @throws {NotFoundError} Si no se encuentra.
   */
  getCategoryById(id: number): Promise<CategoryDTO>;
}
