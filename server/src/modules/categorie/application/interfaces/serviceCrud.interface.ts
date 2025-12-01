import type { UpdateResult } from "@productify/shared/index.js";

import type { CategorieCreateDTO, CategorieDTO, CategorieUpdateDTO } from "../dtos/index.js";

/**
 * Interfaz para operaciones CRUD de categorías.
 *
 * Define métodos para crear, leer y actualizar categorías usando DTOs.
 */
export interface ICategorieCrudService {
  /**
   * Obtiene todas las categorías.
   *
   * @returns Lista de categorías.
   * @throws {NotFoundError} Si no hay categorías.
   */
  getCategories(): Promise<CategorieDTO[]>;

  /**
   * Crea una nueva categoría.
   *
   * @param data Datos para crear la categoría.
   * @returns Categoría creada.
   * @throws {ConflictError} Si la categoría ya existe.
   */
  createCategory(data: CategorieCreateDTO): Promise<CategorieDTO>;

  /**
   * Actualiza una categoría por ID.
   *
   * @param id ID de la categoría.
   * @param data Datos para actualizar.
   * @returns Resultado de la actualización.
   * @throws {NotFoundError} Si no se encuentra la categoría.
   */
  updateCategory(id: number, data: CategorieUpdateDTO): Promise<UpdateResult<CategorieDTO>>;
}
