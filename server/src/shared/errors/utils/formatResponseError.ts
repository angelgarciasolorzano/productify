import { ValidationError as ValidationErrorYup } from "yup";

import { Logger } from "@productify/shared/utils/logger.js";

import { HttpStatusCode } from "../../constants/index.js";
import { CodeError, ResponseMessagesError } from "../constants/index.js";
import { AppError, ServerError } from "../errors.js";
import { ResponseErrorBuilder } from "../response/responseBuilder.js";
import type { IBaseResponseError } from "../types/baseResponse.type.js";
import { formatYupErrors } from "../utils/formatYupErrors.js";

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
      error instanceof ServerError ? ResponseMessagesError.INTERNAL_SERVER_ERROR : error.message;

    Logger.error(error.message, {
      error,
      stack: error.stack,
    });

    return ResponseErrorBuilder.baseResponse(error.statusCode, error.code, message);
  }

  if (error instanceof ValidationErrorYup) {
    Logger.error(error.message, {
      error,
      stack: error.stack,
    });

    return ResponseErrorBuilder.baseResponse(
      HttpStatusCode.BAD_REQUEST,
      CodeError.VALIDATION_ERROR,
      ResponseMessagesError.UNPROCESSABLE_ENTITY,
      formatYupErrors(error),
    );
  }

  Logger.error("Error desconocido capturado en el middleware de manejo de errores", {
    value: error,
  });

  return ResponseErrorBuilder.baseResponse(
    HttpStatusCode.INTERNAL_SERVER_ERROR,
    CodeError.INTERNAL_SERVER_ERROR,
    ResponseMessagesError.INTERNAL_SERVER_ERROR,
  );
}
