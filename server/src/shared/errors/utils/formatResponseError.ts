import { ValidationError as ValidationErrorYup } from "yup";

import type { IBaseResponseError } from "@productify/shared/index.js";
import {
  AppError,
  CodeError,
  formatYupErrors,
  HttpStatusCode,
  ResponseErrorBuilder,
  ResponseMessagesError,
  ServerError,
} from "@productify/shared/index.js";

/**
 * Convierte un error capturado en una respuesta estándar para la API.
 *
 * Identifica el tipo de error y genera una respuesta con el código HTTP,
 * código interno y mensaje correspondiente.
 *
 * @param error - El error capturado que será formateado.
 * @returns Respuesta estándar con código de estado y cuerpo de error.
 */
export function formatResponseError(error: unknown): IBaseResponseError {
  if (error instanceof AppError) {
    const message =
      error instanceof ServerError
        ? ResponseMessagesError.INTERNAL_SERVER_ERROR
        : error.message;

    return ResponseErrorBuilder.baseResponse(
      error.statusCode,
      error.code,
      message,
    );
  }

  if (error instanceof ValidationErrorYup) {
    return ResponseErrorBuilder.baseResponse(
      HttpStatusCode.BAD_REQUEST,
      CodeError.VALIDATION_ERROR,
      ResponseMessagesError.UNPROCESSABLE_ENTITY,
      formatYupErrors(error),
    );
  }

  return ResponseErrorBuilder.baseResponse(
    HttpStatusCode.INTERNAL_SERVER_ERROR,
    CodeError.INTERNAL_SERVER_ERROR,
    ResponseMessagesError.INTERNAL_SERVER_ERROR,
  );
}
