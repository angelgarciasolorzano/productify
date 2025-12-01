import type { Categorie } from "../categorie.js";

/**
 * Interfaz para consultas de categorías.
 *
 * Define métodos para buscar categorías por ID o nombre.
 */
export interface ICategorieFinderRepository {
  /**
   * Busca una categoría por ID.
   *
   * @param id ID de la categoría.
   * @returns Categoría encontrada o null.
   * @throws {ServerError} Si falla la consulta.
   */
  getCategorieId(id: number): Promise<Categorie | null>;

  /**
   * Busca una categoría por nombre.
   *
   * @param name Nombre de la categoría.
   * @returns Categoría encontrada o null.
   * @throws {ServerError} Si falla la consulta.
   */
  getCategorieName(name: string): Promise<Categorie | null>;
}
