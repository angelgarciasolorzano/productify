import { DatosError, NotFoundError, ServerError } from "./index";

class HandleError {
  protected handleError(error: unknown, message: string = "Error interno del servidor"): never {
    const errors = [DatosError, NotFoundError, ServerError];

    if (errors.some(errorType => error instanceof errorType)) throw error;

    throw new ServerError(message);
  }
};

export default HandleError;