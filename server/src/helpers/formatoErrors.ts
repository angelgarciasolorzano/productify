import { ValidationError } from "yup";

const formatoErrors = (errores: ValidationError): { [key: string]: string } => {
  const errorFormato: { [key: string]: string } = {};

  errores.inner.forEach((error) => {
    if (error.path) errorFormato[error.path] = error.message;
  });

  return errorFormato;
};

export default formatoErrors;