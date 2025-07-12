/**
 * Define la estructura de un objeto que representa un error de validación de un campo.
 * 
 * @interface FieldError
 * @property field: Nombre del campo que contiene el error.
 * @property message: Mensaje de error asociado al campo.
*/
export interface FieldError {
  field: string;
  message: string;
};