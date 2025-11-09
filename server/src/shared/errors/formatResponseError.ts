import { ValidationError as ValidationErrorYup } from "yup";

import type { FieldError } from "@productify/shared/index.js";
import {
  AppError,
  CodeError,
  formatYupErrors,
  HttpStatusCode,
  ServerError,
} from "@productify/shared/index.js";

/**
 * Contrato que define la estructura base de una respuesta de error.
 */
type IBaseResponseError = {
  statusCode: HttpStatusCode;
  body: {
    success: false;
    error: {
      code: CodeError;
      message: string;
      details?: FieldError[];
    };
  };
};

/**
 * Construye la estructura base de una respuesta de error.
 *
 * @param statusCode Codigo de estado HTTP.
 * @param code Codigo de error.
 * @param message Mensaje de error.
 * @param details Detalles del error (opcional).
 * @returns Objeto de respuesta de error HTTP.
 */
function buildBaseResponseError(
  statusCode: HttpStatusCode,
  code: CodeError,
  message: string,
  details?: FieldError[],
): IBaseResponseError {
  return {
    statusCode,
    body: {
      success: false,
      error: {
        code,
        message,
        details,
      },
    },
  };
}

/**
 * Formatea un error en una respuesta estándar para la API.
 *
 * Determina el tipo de error y construye una respuesta con código HTTP, código interno
 * y mensajes adecuados.
 *
 * @param error El objeto de error capturado.
 * @returns Un objeto con codigo de estado (statusCode) y cuerpo de respuesta (body).
 */
export function formatResponseError(error: unknown): IBaseResponseError {
  if (error instanceof AppError) {
    const message =
      error instanceof ServerError
        ? "Ha ocurrido un error interno del servidor. Por favor, intente nuevamente más tarde."
        : error.message;

    return buildBaseResponseError(error.statusCode, error.code, message);
  }

  if (error instanceof ValidationErrorYup) {
    return buildBaseResponseError(
      HttpStatusCode.BAD_REQUEST,
      CodeError.VALIDATION_ERROR,
      "Los datos enviados no son válidos",
      formatYupErrors(error),
    );
  }

  return buildBaseResponseError(
    HttpStatusCode.INTERNAL_SERVER_ERROR,
    CodeError.INTERNAL_SERVER_ERROR,
    "Ocurrio un error inesperado. Intente nuevamente más tarde.",
  );
}
