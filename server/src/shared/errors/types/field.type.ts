/**
 * Define la estructura de un objeto que representa un error de validación de un campo.
 *
 * field: Nombre del campo que contiene el error.
 *
 * message: Mensaje de error asociado al campo.
 */
export interface FieldError {
  field: string;
  message: string;
}
