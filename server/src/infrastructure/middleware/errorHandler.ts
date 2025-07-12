import { Request, Response, NextFunction } from "express";
import { formatResponseError } from "@/shared";

/**
 * Middleware de manejo de errores global para Express.
 * 
 * Este middleware maneja errores personalizados y cualquier otro error inesperado.
 *
 * @param {unknown} error El objeto de error que fue lanzado por la aplicación
 * @param {Request} _request Objeto de la petición (no se usa en este caso)
 * @param {Response} response Objeto de la respuesta, para enviar una respuesta al cliente
 * @param {NextFunction} _next Objeto de la siguiente función (no se usa en este caso)
 * @returns {void} No devuelve nada directamente, sino que envia una respuesta al cliente
*/
export const errorHandler = (
  error: unknown, 
  _request: Request, 
  response: Response, _next: NextFunction
): void => {
  const { statusCode, body } = formatResponseError(error);
  response.status(statusCode).json(body);
};