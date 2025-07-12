import { ValidationError } from "yup";

/**
 * Define la estructura de un objeto que representa un error de validación de un campo.
 * 
 * @interface FieldError
 * @property field: Nombre del campo que contiene el error.
 * @property message: Mensaje de error asociado al campo.
*/
interface FieldError {
  field: string;
  message: string;
};

/**
 * Formatea los errores de validación de yup en un arreglo de objetos devolviendo
 * solo el primer error por cada campo.
 *
 * @param {ValidationError} errores Error de validacion de yup
 * @returns {FieldError[]} Arreglo de objetos con los campos y mensajes de error
*/
export const formatYupErrors = (errores: ValidationError): FieldError[] => {
  const uniqueErrors: Record<string, string> = {};

  errores.inner.forEach((error) => {
    if (error.path) uniqueErrors[error.path] = error.message;
  });

  return Object.entries(uniqueErrors).map(([field, message]) => ({
    field,
    message
  }));
};