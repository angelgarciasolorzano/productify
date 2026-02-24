import type { CodeErrorType, FieldError, HttpStatusCodeType } from "@productify/shared/index.js";
import { CodeError, HttpStatusCode, ResponseMessagesError } from "@productify/shared/index.js";

/**
 * Define las propiedades requeridas de un error personalizado.
 *
 */
interface AppErrorAttributes {
  code: CodeErrorType;
  message: string;
  statusCode: HttpStatusCodeType;
}

/**
 * Clase base para todos los errores personalizados.
 *
 */
class AppError extends Error implements AppErrorAttributes {
  public statusCode: HttpStatusCodeType;

  public code: CodeErrorType;

  /**
   * Crea una nueva instancia de AppError
   *
   * @param code Codigo del error
   * @param statusCode Codigo de estado del error
   * @param message Mensaje del error
   */
  public constructor(code: CodeErrorType, statusCode: HttpStatusCodeType, message: string) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
  }
}

/**
 * Error utilizado para representar errores de validación de datos.
 *
 */
class ValidationError extends AppError {
  public details?: FieldError[];

  /**
   * @param message Mensaje del error (por defecto: ResponseMessagesError.UNPROCESSABLE_ENTITY)
   * @param details Detalles del error (opcional)
   */
  public constructor(
    message: string = ResponseMessagesError.UNPROCESSABLE_ENTITY,
    details?: FieldError[],
  ) {
    super(CodeError.VALIDATION_ERROR, HttpStatusCode.BAD_REQUEST, message);
    this.details = details;
  }
}

/**
 * Error utilizado cuando ya se encuentra un recurso con el mismo identificador.
 *
 */
class ConflictError extends AppError {
  /**
   * @param message Mensaje del error (por defecto: ResponseMessagesError.CONFLICT)
   */
  public constructor(message: string = ResponseMessagesError.CONFLICT) {
    super(CodeError.CONFLICT_ERROR, HttpStatusCode.CONFLICT, message);
  }
}

/**
 * Error utilizado cuando no se encuentra el recurso solicitado.
 *
 */
class NotFoundError extends AppError {
  /**
   * @param message Mensaje del error (por defecto: ResponseMessagesError.NOT_FOUND)
   */
  public constructor(message: string = ResponseMessagesError.NOT_FOUND) {
    super(CodeError.NOT_FOUND_ERROR, HttpStatusCode.NOT_FOUND, message);
  }
}

/**
 * Error utilizado para representar errores internos del servidor.
 *
 */
class ServerError extends AppError {
  /**
   * @param message Mensaje del error (por defecto: ResponseMessagesError.INTERNAL_SERVER_ERROR)
   */
  public constructor(message: string = ResponseMessagesError.INTERNAL_SERVER_ERROR) {
    super(CodeError.INTERNAL_SERVER_ERROR, HttpStatusCode.INTERNAL_SERVER_ERROR, message);
  }
}

export { AppError, ValidationError, ConflictError, NotFoundError, ServerError };
