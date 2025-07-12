import { AppError, formatYupErrors, getMessageError, CodeError, HttpStatusCode } from "@/shared";
import { ValidationError } from "yup";

/**
 * Define la estructura de un objeto de respuesta de error HTTP.
*/
type ErrorResponse = {
  statusCode: HttpStatusCode;
  body: {
    success: false;
    error: {
      code: CodeError;
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
export function formatResponseError(error: unknown): ErrorResponse {
  const messageError = getMessageError(error);

  if (error instanceof AppError) {
    return {
      statusCode: error.statusCode,
      body: {
        success: false,
        error: {
          code: error.type,
          message: messageError
        }
      }
    }
  };

  if (error instanceof ValidationError) {
    return {
      statusCode: HttpStatusCode.BAD_REQUEST,
      body: {
        success: false,
        error: {
          code: CodeError.VALIDATION_ERROR,
          message: messageError,
          details: formatYupErrors(error)
        }
      }
    }
  };

  return {
    statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
    body: {
      success: false,
      error: {
        code: CodeError.INTERNAL_SERVER_ERROR,
        message: messageError
      }
    }
  };
};