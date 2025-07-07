/**
 * Define las propiedades requeridas de un error personalizado.
 * 
 * @interface AppErrorAttributes
*/
interface AppErrorAttributes {
  message: string;
  statusCode: number;
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

  /**
   * Crea una nueva instancia de AppError
   * 
   * @param {string} name Nombre del error personalizado
   * @param {number} statusCode Codigo de estado del error personalizado
   * @param {string} message Mensaje del error personalizado
  */
  constructor(name: string, statusCode: number, message: string) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }
};

/**
 * Error utilizado para representar errores de validación de datos.
 * 
 * @class DatosError
 * @extends AppError
*/
class DatosError extends AppError {
  /**
   * 
   * @param {string} message Mensaje del error (por defecto `Error de validación de datos`)
  */
  constructor(message: string = "Error de validación de datos") {
    super("DatosError", 400, message);
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
    super("NotFoundError", 404, message);
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
    super("ServerError", 500, message);
  }
};

export { AppError, DatosError, NotFoundError, ServerError };