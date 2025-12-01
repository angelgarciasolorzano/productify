import type { CategorieDTO } from "../dtos/index.js";

/**
 * Interfaz para búsqueda de categorías.
 *
 * Define métodos para obtener categorías por ID usando DTOs.
 */
export interface ICategorieFinderService {
  /**
   * Obtiene una categoría por ID.
   *
   * @param id ID de la categoría.
   * @returns Categoría encontrada.
   * @throws {NotFoundError} Si no se encuentra.
   */
  getCategorieId(id: number): Promise<CategorieDTO>;
}
