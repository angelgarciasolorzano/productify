import { Response } from "express";
import { PublicRequestWithBody, PublicRequest } from "@/shared";
import { CategoriaUpdateDto, CategoriaCreateDto } from "@categoria/application";

/**
 * Define el contrato del controlador de la aplicación para la gestión de las categorías.
 * 
 * Esta interfaz declara los métodos responsables de manejar las operaciones HTTP relacionadas 
 * con la entidad categoría.
 * 
 * @interface ICategoriaController
*/
export interface ICategoriaController {
  /**
   * Maneja la petición HTTP para obtener una lista de todas las categorías.
   * 
   * @param {PublicRequest} request - El objeto de la petición Express.
   * @param {Response} response - El objeto de la respuesta Express.
   * @returns {Promise<void>} Esta función no devuelve un valor directamente; la respuesta se envía a través del objeto `response`.
  */
  getCategorias(request: PublicRequest, response: Response): Promise<void>;

  /**
   * Maneja la petición HTTP para obtener una categoría específica por su ID.
   * 
   * Extrae el ID de la categoría del parámetro de la petición.
   *
   * @param {PublicRequestWithBody<never, { id: string }>} request - El objeto de la petición Express, con `id` en `request.params`.
   * @param {Response} response - El objeto de la respuesta Express.
   * @returns {Promise<void>} Esta función no devuelve un valor directamente; la respuesta se envía a través del objeto `response`.
  */
  getCategoriaId(
    request: PublicRequestWithBody<never, { id: string }>, 
    response: Response
  ): Promise<void>;

  /**
   * Maneja la petición HTTP para crear una nueva categoría.
   * 
   * Recibe los datos de la nueva categoría del cuerpo de la petición.
   *
   * @param {PublicRequestWithBody<CategoriaCreateDto>} request - El objeto de la petición Express, con los datos de la categoría en `request.body`.
   * @param {Response} response - El objeto de la respuesta Express.
   * @returns {Promise<void>} Esta función no devuelve un valor directamente; la respuesta se envía a través del objeto `response`.
  */
  createCategoria(
    request: PublicRequestWithBody<CategoriaCreateDto>, 
    response: Response
  ): Promise<void>;

  /**
   * Maneja la petición HTTP para actualizar una categoría existente.
   * 
   * Extrae el ID de la categoría del parámetro de la petición y los datos de actualización del cuerpo de la petición.
   *
   * @param {PublicRequestWithBody<CategoriaUpdateDto, { id: string }>} request - El objeto de la petición Express, con `id` en `request.params` y los datos de actualización en `request.body`.
   * @param {Response} response - El objeto de la respuesta Express.
   * @returns {Promise<void>} Esta función no devuelve un valor directamente; la respuesta se envía a través del objeto `response`.
  */
  updateCategoria(
    request: PublicRequestWithBody<CategoriaUpdateDto, { id: string }>, 
    response: Response
  ): Promise<void>;
};