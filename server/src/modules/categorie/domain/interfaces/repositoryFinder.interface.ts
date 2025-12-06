import type { Category } from "../category.js";

/**
 * Interfaz para consultas de categorías.
 *
 * Define métodos para buscar categorías por ID o nombre.
 */
export interface ICategoryFinderRepository {
  /**
   * Busca una categoría por ID.
   *
   * @param id ID de la categoría.
   * @returns Categoría encontrada o null.
   * @throws {ServerError} Si falla la consulta.
   */
  getCategoryId(id: number): Promise<Category | null>;

  /**
   * Busca una categoría por nombre.
   *
   * @param name Nombre de la categoría.
   * @returns Categoría encontrada o null.
   * @throws {ServerError} Si falla la consulta.
   */
  getCategoryName(name: string): Promise<Category | null>;
}
