/**
 * @interface AppErrorAtributes
 * @description Define las propiedades de un error personalizado
 */
interface AppErrorAtributes {
  message: string;
  statusCode: number;
};

/**
 * @class AppError
 * @extends Error
 * @implements AppErrorAtributes
 * @description Clase base para todos los errores personalizados
 */
class AppError extends Error implements AppErrorAtributes {
  public statusCode: number;

  /**
   * Crea una nueva instancia de AppError
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
 * @class DatosError
 * @extends AppError
 * @description Error de validación de datos
 */
class DatosError extends AppError {
  constructor(message: string = "Error de validación de datos") {
    super("DatosError", 400, message);
  }
};

/**
 * @class NotFoundError
 * @extends AppError
 * @description Error de no encontrado
 */
class NotFoundError extends AppError {
  constructor(message: string = "No se encontro el recurso solicitado") {
    super("NotFoundError", 404, message);
  }
};

/**
 * @class ServerError
 * @extends AppError
 * @description Error interno del servidor
 */
class ServerError extends AppError {
  constructor(message: string = "Error interno del servidor") {
    super("ServerError", 500, message);
  }
};

export { AppError, DatosError, NotFoundError, ServerError };