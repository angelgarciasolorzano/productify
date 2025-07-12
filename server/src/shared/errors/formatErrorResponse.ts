import { AppError, formatYupErrors, getErrorMessage, ErrorCode } from "@/shared";
import { ValidationError } from "yup";

/**
 * Define la estructura de un objeto de respuesta de error HTTP.
*/
type ErrorResponse = {
  statusCode: number;
  body: {
    success: false;
    error: {
      code: string;
      message: string;
      details?: { field: string; message: string }[];
    };
  };
};

/**
 * Convierte un error capturado en un formato de respuesta HTTP estándar para la API.
 * 
 * Esta función evalúa el tipo de error (AppError, ValidationError de Yup o errores inesperados) 
 * y genera una respuesta consistente con el código de estado HTTP adecuado y un cuerpo 
 * de error estructurado.
 * 
 * @param {unknown} error El objeto de error capturado.
 * @returns {ErrorResponse} Un objeto que representa la respuesta de error HTTP.
*/
export function formatErrorResponse(error: unknown): ErrorResponse {
  const messageError = getErrorMessage(error);

  if (error instanceof AppError) {
    return {
      statusCode: error.statusCode,
      body: {
        success: false,
        error: {
          code: error.name,
          message: messageError
        }
      }
    }
  };

  if (error instanceof ValidationError) {
    return {
      statusCode: 400,
      body: {
        success: false,
        error: {
          code: ErrorCode.VALIDATION_ERROR,
          message: messageError,
          details: formatYupErrors(error)
        }
      }
    }
  };

  return {
    statusCode: 500,
    body: {
      success: false,
      error: {
        code: ErrorCode.INTERNAL_SERVER_ERROR,
        message: messageError
      }
    }
  };
};