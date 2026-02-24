import type { HttpStatusCodeType } from "../../constants/httpStatusCode.js";
import type { CodeError } from "../constants/codeError.js";
import type { IBaseResponseError } from "../types/baseResponse.type.js";
import type { FieldError } from "../types/field.type.js";

export class ResponseErrorBuilder {
  /**
   * Construye una respuesta de error estándar para las solicitudes HTTP.
   *
   * @param statusCode - Código de estado HTTP de la respuesta.
   * @param code - Código de error interno de la aplicación.
   * @param message - Mensaje descriptivo del error.
   * @param details - (Opcional) Detalles adicionales sobre el error.
   * @returns Un objeto que representa la respuesta de error estándar.
   */
  public static baseResponse(
    statusCode: HttpStatusCodeType,
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
}
