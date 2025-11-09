import type { FieldError } from "@productify/shared/index.js";
import { CodeError, HttpStatusCode } from "@productify/shared/index.js";

/**
 * Define las propiedades requeridas de un error personalizado.
 *
 */
interface AppErrorAttributes {
  code: CodeError;
  message: string;
  statusCode: HttpStatusCode;
}

/**
 * Clase base para todos los errores personalizados.
 *
 */
class AppError extends Error implements AppErrorAttributes {
  public statusCode: number;

  public code: CodeError;

  /**
   * Crea una nueva instancia de AppError
   *
   * @param code Codigo del error
   * @param statusCode Codigo de estado del error
   * @param message Mensaje del error
   */
  public constructor(
    code: CodeError,
    statusCode: HttpStatusCode,
    message: string,
  ) {
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
   * @param message Mensaje del error (por defecto `Error de validación de datos`)
   * @param details Detalles del error (opcional)
   */
  public constructor(
    message = "Error de validación de datos",
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
   * @param message Mensaje del error (por defecto `El recurso ya existe`)
   */
  public constructor(message = "El recurso ya existe") {
    super(CodeError.CONFLICT_ERROR, HttpStatusCode.CONFLICT, message);
  }
}

/**
 * Error utilizado cuando no se encuentra el recurso solicitado.
 *
 */
class NotFoundError extends AppError {
  /**
   * @param message Mensaje del error (por defecto `No se encontro el recurso solicitado`)
   */
  public constructor(message = "No se encontro el recurso solicitado") {
    super(CodeError.NOT_FOUND_ERROR, HttpStatusCode.NOT_FOUND, message);
  }
}

/**
 * Error utilizado para representar errores internos del servidor.
 *
 */
class ServerError extends AppError {
  /**
   * @param message Mensaje del error (por defecto `Error interno del servidor`)
   */
  public constructor(message = "Error interno del servidor") {
    super(
      CodeError.INTERNAL_SERVER_ERROR,
      HttpStatusCode.INTERNAL_SERVER_ERROR,
      message,
    );
  }
}

export { AppError, ValidationError, ConflictError, NotFoundError, ServerError };
