import { Request, Response, NextFunction } from "express";
import { AppError } from "@/errors"

/**
 * @function errorHandler
 * @description Middleware de manejo de errores global para Express
 * @param {unknown} error El objeto de error que fue lanzado por la aplicación
 * @param {Request} _request Objeto de la petición (no se usa en este caso)
 * @param {Response} response Objeto de la respuesta, para enviar una respuesta al cliente
 * @param {NextFunction} _next Objeto de la siguiente función (no se usa en este caso)
 * @returns {void} No devuelve nada directamente, sino que envia una respuesta al cliente
 */
const errorHandler = (error: unknown, _request: Request, response: Response, _next: NextFunction): void => {
  // 1. Manejar errores personalizados que heredan de AppError
  // Estos errores ya tienen un código de estado y un mensaje propio
  if (error instanceof AppError) {
    response.status(error.statusCode).json({ 
      message: error.message,
      errorType: error.name
    });

    return;
  };

  // 2. Manejar cualquier otro error inesperado
  // Estos son errores que no son instancias de AppError
  response.status(500).json({ message: "Error interno del servidor" });
};

export default errorHandler;