import { CodeError, FieldError, HttpStatusCode } from "@/shared";

/**
 * Define las propiedades requeridas de un error personalizado.
 * 
 * @interface AppErrorAttributes
*/
interface AppErrorAttributes {
  code: CodeError;
  message: string;
  statusCode: HttpStatusCode;
};

/**
 * Clase base para todos los errores personalizados.
 *
 * @class AppError
 * @extends Error
 * @implements AppErrorAttributes
*/
class AppError extends Error implements AppErrorAttributes {
  public statusCode: number;
  public code: CodeError;

  /**
   * Crea una nueva instancia de AppError
   * 
   * @param {CodeError} code Codigo del error
   * @param {HttpStatusCode} statusCode Codigo de estado del error
   * @param {string} message Mensaje del error
  */
  constructor(code: CodeError, statusCode: HttpStatusCode, message: string) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
  }
};

/**
 * Error utilizado para representar errores de validación de datos.
 * 
 * @class ValidationError
 * @extends AppError
*/
class ValidationError extends AppError {
  public details?: FieldError[];

  /**
   * @param {string} message Mensaje del error (por defecto `Error de validación de datos`)
   * @param {FieldError[]} details Detalles del error (opcional)
  */
  constructor(message: string = "Error de validación de datos", details?: FieldError[]) {
    super(CodeError.VALIDATION_ERROR, HttpStatusCode.BAD_REQUEST, message);
    this.details = details;
  }
};

/**
 * Error utilizado cuando ya se encuentra un recurso con el mismo identificador.
 *
 * @class ConflictError
 * @extends AppError
*/
class ConflictError extends AppError {
  /**
   * @param {string} message Mensaje del error (por defecto `El recurso ya existe`)
  */
  constructor(message: string = "El recurso ya existe") {
    super(CodeError.CONFLICT_ERROR, HttpStatusCode.CONFLICT, message);
  }
};

/**
 * Error utilizado cuando no se encuentra el recurso solicitado.
 *
 * @class NotFoundError
 * @extends AppError
*/
class NotFoundError extends AppError {
  /**
   * @param {string} message Mensaje del error (por defecto `No se encontro el recurso solicitado`)
  */
  constructor(message: string = "No se encontro el recurso solicitado") {
    super(CodeError.NOT_FOUND_ERROR, HttpStatusCode.NOT_FOUND, message);
  }
};

/**
 * Error utilizado para representar errores internos del servidor.
 *
 * @class ServerError
 * @extends AppError
*/
class ServerError extends AppError {
  /**
   * @param {string} message Mensaje del error (por defecto `Error interno del servidor`)
  */
  constructor(message: string = "Error interno del servidor") {
    super(CodeError.INTERNAL_SERVER_ERROR, HttpStatusCode.INTERNAL_SERVER_ERROR, message);
  }
};

export { AppError, ValidationError, ConflictError, NotFoundError, ServerError };