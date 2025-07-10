import { Request, Response, NextFunction } from "express";
import { ValidationError } from "yup";
import { AppError, formatYupErrors } from "@/shared";

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

  // 2. Manejar errores de validación de esquemas de yup
  // 
  if (error instanceof ValidationError) {
    const formattedErrors = formatYupErrors(error);
    response.status(400).json({ errors: formattedErrors });

    return;
  };

  // 2. Manejar cualquier otro error inesperado
  // Estos son errores que no son instancias de AppError
  response.status(500).json({ message: "Error interno del servidor" });
};

export default errorHandler;