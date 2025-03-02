import { Response } from "express";
import { DatosError, NotFoundError, ServerError } from "./index";

interface ErrorResponse {
  message: string;
  statusCode: number;
};

class HandleError {
  private isErrorInstanceOf(error: unknown): error is ErrorResponse {
    const errors = [DatosError, NotFoundError, ServerError];

    return errors.some(errorType => error instanceof errorType);
  };

  protected handleError(error: unknown, message: string = "Error interno del servidor"): never {
    if (this.isErrorInstanceOf(error)) throw error;

    throw new ServerError(message);
  };

  protected responseError(error: unknown, response: Response): void {
    if (this.isErrorInstanceOf(error)) {
      response.status(error.statusCode).json({ message: error.message });
      return;
    };

    response.status(500).json({ message: "Error interno del servidor" });
  };
};

export default HandleError;