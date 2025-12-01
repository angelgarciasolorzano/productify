import type { Categorie, CategorieCreate, CategorieUpdate } from "../categorie.js";

/**
 * Interfaz para operaciones CRUD en categorías.
 *
 * Define métodos para crear, leer y actualizar categorías en la base de datos.
 */
export interface ICategorieCrudRepository {
  /**
   * Obtiene todas las categorías.
   *
   * @returns Lista de categorías.
   * @throws {ServerError} Si falla la consulta.
   */
  getCategories(): Promise<Categorie[]>;

  /**
   * Crea una nueva categoría.
   *
   * @param data Datos para crear la categoría.
   * @returns Categoría creada.
   * @throws {ServerError} Si falla la consulta.
   */
  createCategorie(data: CategorieCreate): Promise<Categorie>;

  /**
   * Actualiza una categoría por ID.
   *
   * @param id ID de la categoría.
   * @param data Datos para actualizar.
   * @returns Categoría actualizada.
   * @throws {ServerError} Si falla la consulta.
   */
  updateCategorie(id: number, data: CategorieUpdate): Promise<Categorie>;
}
