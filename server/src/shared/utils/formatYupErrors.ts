import { ValidationError } from "yup";

/**
 * Convierte un error de validacion de yup en un objeto plano con los campos y mensajes de error.
 * 
 * @param {ValidationError} errores Error de validacion de yup
 * @returns Objeto con clave-valor donde la clave es el campo y el valor es el mensaje de error.
*/
const formatYupErrors = (errores: ValidationError): { [key: string]: string } => {
  const errorFormat: { [key: string]: string } = {};

  errores.inner.forEach((error) => {
    if (error.path) errorFormat[error.path] = error.message;
  });

  return errorFormat;
};

export default formatYupErrors;