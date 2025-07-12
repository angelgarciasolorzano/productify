import { ValidationError } from "yup";

import {
  AppError, 
  formatYupErrors, 
  getMessageError, 
  CodeError, 
  HttpStatusCode, 
  createResponseError, 
  ErrorResponse 
} from "@/shared";

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
    return createResponseError(error.statusCode, error.code, messageError);
  };

  if (error instanceof ValidationError) {
    return createResponseError(
      HttpStatusCode.BAD_REQUEST, 
      CodeError.VALIDATION_ERROR, 
      messageError, 
      formatYupErrors(error)
    )
  };

  return createResponseError(
    HttpStatusCode.INTERNAL_SERVER_ERROR, 
    CodeError.INTERNAL_SERVER_ERROR, 
    messageError
  );
};