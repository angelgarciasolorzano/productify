import { Request, Response, NextFunction } from "express";

/**
 * @file iCategoria.controller.ts
 * @description Archivo que define la interface para la clase CategoriaController
 * @author Angel Noe Garcia Solorzano
 * @version 1.0
*/

/**
 * @interface ICategoriaController
 * @description Interfaz para definir los métodos de la clase CategoriaController
 */
interface ICategoriaController {
  /**
   * @method getCategorias
   * @description Maneja la petición HTTP para obtener una lista de todas las categorías.
   * @param {Request} request - El objeto de la petición Express.
   * @param {Response} response - El objeto de la respuesta Express.
   * @param {NextFunction} next - La función para pasar el control al siguiente middleware.
   * @returns {void} Esta función no devuelve un valor directamente; la respuesta se envía a través del objeto `response`.
  */
  getCategorias(request:Request, response: Response, next: NextFunction): void;

  /**
   * Maneja la petición HTTP para obtener una categoría específica por su ID.
   * @method getCategoriaId
   * @description Extrae el ID de los parámetros de la petición
   * @param {Request} request - El objeto de la petición Express, con `id` en `request.params`.
   * @param {Response} response - El objeto de la respuesta Express.
   * @param {NextFunction} next - La función para pasar el control al siguiente middleware.
   * @returns {void} Esta función no devuelve un valor directamente; la respuesta se envía a través del objeto `response`.
  */
  getCategoriaId(request: Request, response: Response, next: NextFunction): void;

  /**
   * Maneja la petición HTTP para crear una nueva categoría.
   * @method createCategoria
   * @description Recibe los datos de la nueva categoría del cuerpo de la petición
   * @param {Request} request - El objeto de la petición Express, con los datos de la categoría en `request.body`.
   * @param {Response} response - El objeto de la respuesta Express.
   * @param {NextFunction} next - La función para pasar el control al siguiente middleware.
   * @returns {void} Esta función no devuelve un valor directamente; la respuesta se envía a través del objeto `response`.
  */
  createCategoria(request: Request, response: Response, next: NextFunction): void;

  /**
   * Maneja la petición HTTP para actualizar una categoría existente.
   * @method updateCategoria
   * @description Extrae el ID de los parámetros y los datos de actualización del cuerpo de la petición
   * @param {Request} request - El objeto de la petición Express, con `id` en `request.params` y los datos de actualización en `request.body`.
   * @param {Response} response - El objeto de la respuesta Express.
   * @param {NextFunction} next - La función para pasar el control al siguiente middleware.
   * @returns {void} Esta función no devuelve un valor directamente; la respuesta se envía a través del objeto `response`.
  */
  updateCategoria(request: Request, response: Response, next: NextFunction): void;
};

export default ICategoriaController;