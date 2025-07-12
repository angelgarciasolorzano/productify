import { AppError, ServerError } from "@/shared";
import { ValidationError } from "yup";

/**
 * Procesa un objeto de error desconocido y devuelve un mensaje de error legible para el usuario.
 * 
 * Esta funcion evalua si el error es una instancia de errores conocidos como `AppError` o `ValidationError`.
 * Si es así, devuelve un mensaje de error específico para ese tipo de error. Si el error es desconocido, 
 * devuelve un mensaje de error genérico.
 * 
 * @param {unknown} error El objeto de error capturado.
 * @returns {string} Mensaje de error dependiendo del tipo de error capturado.
*/
export function getMessageError(error: unknown): string {
  if (error instanceof AppError) {
    return error instanceof ServerError
      ? "Ha ocurrido un error interno del servidor. Por favor, intente nuevamente más tarde."
    : error.message;
  };

  if (error instanceof ValidationError) {
    return "Los datos enviados no son válidos";
  };

  return "Ocurrio un error inesperado. Intente nuevamente más tarde.";
};