import { Request, Response, NextFunction } from "express";
import { ValidationError } from "yup";
import { AppError, ServerError, formatYupErrors } from "@/shared";

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
  if (error instanceof AppError) {
    if (error instanceof ServerError) {
      response.status(error.statusCode).json({
        success: false,
        error: {
          code: error.name,
          message: "Ha ocurrido un error interno del servidor. Por favor, intente nuevamente más tarde."
        }
      });
    } else {
      response.status(error.statusCode).json({
        success: false,
        error: {
          code: error.name,
          message: error.message
        }
      });
    };

    return;
  };

  if (error instanceof ValidationError) {
    const details = formatYupErrors(error);

    response.status(400).json({
      success: false,
      error: {
        code: "VALIDATION_ERROR",
        message: "Los datos enviados no son válidos",
        details
      }
    });

    return;
  };

  response.status(500).json({
    success: false,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "Ocurrio un error inesperado. Intente nuevamente más tarde."
    }
  });
};

export default errorHandler;