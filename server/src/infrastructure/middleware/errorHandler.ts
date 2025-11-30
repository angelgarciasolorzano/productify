import type { NextFunction, Request, Response } from "express";

import { formatResponseError } from "@productify/shared/index.js";

/**
 * Middleware global para manejar errores en Express.
 *
 * Captura errores, los formatea en una respuesta estándar y envía JSON al cliente.
 *
 * @param error - Error capturado.
 * @param _request - Solicitud (no utilizada).
 * @param response - Respuesta para enviar al cliente.
 * @param _next - Siguiente middleware (no utilizada).
 */
export const errorHandler = (
  error: unknown,
  _request: Request,
  response: Response,
  _next: NextFunction,
): void => {
  const { statusCode, body } = formatResponseError(error);
  response.status(statusCode).json(body);
};
