import type { UpdateResult } from "@productify/shared/index.js";

import type { CategoryCreateDTO, CategoryDTO, CategoryUpdateDTO } from "../dtos/index.js";

/**
 * Interfaz para operaciones CRUD de categorías.
 *
 * Define métodos para crear, leer y actualizar categorías usando DTOs.
 */
export interface ICategoryCrudService {
  /**
   * Obtiene todas las categorías.
   *
   * @returns Lista de categorías.
   * @throws {NotFoundError} Si no hay categorías.
   */
  getCategories(): Promise<CategoryUpdateDTO[]>;

  /**
   * Crea una nueva categoría.
   *
   * @param data Datos para crear la categoría.
   * @returns Categoría creada.
   * @throws {ConflictError} Si la categoría ya existe.
   */
  createCategory(data: CategoryCreateDTO): Promise<CategoryUpdateDTO>;

  /**
   * Actualiza una categoría por ID.
   *
   * @param id ID de la categoría.
   * @param data Datos para actualizar.
   * @returns Resultado de la actualización.
   * @throws {NotFoundError} Si no se encuentra la categoría.
   */
  updateCategory(id: number, data: CategoryDTO): Promise<UpdateResult<CategoryUpdateDTO>>;
}
