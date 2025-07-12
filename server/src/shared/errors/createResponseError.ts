import { CodeError, HttpStatusCode, ErrorResponse, FieldError } from "@/shared";

/**
 * Crea un objeto de respuesta de error HTTP.
 * 
 * @param {HttpStatusCode} statusCode Codigo de estado HTTP
 * @param {CodeError} code Codigo de error
 * @param {string} message Mensaje de error
 * @param {FieldError[]} details Detalles del error
 * @returns {ErrorResponse} Objeto de respuesta de error HTTP
*/
export function createResponseError(
  statusCode: HttpStatusCode, 
  code: CodeError, 
  message: string, 
  details?: FieldError[]
): ErrorResponse {
  return {
    statusCode,
    body: {
      success: false,
      error: {
        code,
        message,
        details
      }
    }
  }
};