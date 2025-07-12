import { CodeError, HttpStatusCode, FieldError } from "@/shared";

/**
 * Define la estructura de un objeto de respuesta de error HTTP.
*/
export type ErrorResponse = {
  statusCode: HttpStatusCode;
  body: {
    success: false;
    error: {
      code: CodeError;
      message: string;
      details?: FieldError[];
    };
  };
};