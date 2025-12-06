import type { Category, CategoryCreate, CategoryUpdate } from "../category.js";

/**
 * Interfaz para operaciones CRUD en categorías.
 *
 * Define métodos para crear, leer y actualizar categorías en la base de datos.
 */
export interface ICategoryCrudRepository {
  /**
   * Obtiene todas las categorías.
   *
   * @returns Lista de categorías.
   * @throws {ServerError} Si falla la consulta.
   */
  getCategories(): Promise<Category[]>;

  /**
   * Crea una nueva categoría.
   *
   * @param data Datos para crear la categoría.
   * @returns Categoría creada.
   * @throws {ServerError} Si falla la consulta.
   */
  createCategory(data: CategoryCreate): Promise<Category>;

  /**
   * Actualiza una categoría por ID.
   *
   * @param id ID de la categoría.
   * @param data Datos para actualizar.
   * @returns Categoría actualizada.
   * @throws {ServerError} Si falla la consulta.
   */
  updateCategory(id: number, data: CategoryUpdate): Promise<Category>;
}
