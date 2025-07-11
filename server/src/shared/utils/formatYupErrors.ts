import { ValidationError } from "yup";

interface FieldError {
  field: string;
  message: string;
};

/**
 * Formatea los errores de validación de yup en un arreglo de objetos devolviendo
 * solor el primer error por cada campo.
 *
 * @param {ValidationError} errores Error de validacion de yup
 * @returns {FieldError[]} Arreglo de objetos con los campos y mensajes de error
*/
const formatYupErrors = (errores: ValidationError): FieldError[] => {
  const uniqueErrors: Record<string, string> = {};

  errores.inner.forEach((error) => {
    if (error.path) uniqueErrors[error.path] = error.message;
  });

  return Object.entries(uniqueErrors).map(([field, message]) => ({
    field,
    message
  }));
};

export default formatYupErrors;