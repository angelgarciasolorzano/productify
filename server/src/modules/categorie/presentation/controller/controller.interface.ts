import type { Response } from "express";

import type { PublicRequest, PublicRequestWithBody } from "@productify/shared/index.js";

import type {
  CategorieCreateDTO,
  CategorieUpdateDTO,
} from "../../application/dtos/categorieInput.dto.js";

/**
 * Contrato del controlador para gestionar operaciones HTTP de categorías.
 */
export interface ICategorieController {
  /**
   * Obtiene todas las categorías.
   *
   * @param request Petición Express
   * @param response Respuesta Express
   */
  getCategories(request: PublicRequest, response: Response): Promise<void>;

  /**
   * Obtiene una categoría por ID.
   *
   * @param request Petición con ID en params
   * @param response Respuesta Express
   */
  getCategorieId(
    request: PublicRequestWithBody<never, { id: string }>,
    response: Response,
  ): Promise<void>;

  /**
   * Crea una nueva categoría.
   *
   * @param request Petición con datos en body
   * @param response Respuesta Express
   */
  createCategory(
    request: PublicRequestWithBody<CategorieCreateDTO>,
    response: Response,
  ): Promise<void>;

  /**
   * Actualiza una categoría existente.
   *
   * @param request Petición con ID en params y datos en body
   * @param response Respuesta Express
   */
  updateCategory(
    request: PublicRequestWithBody<CategorieUpdateDTO, { id: string }>,
    response: Response,
  ): Promise<void>;
}
