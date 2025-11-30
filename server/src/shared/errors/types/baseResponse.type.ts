import type {
  CodeError,
  FieldError,
  HttpStatusCode,
} from "@productify/shared/index.js";

export interface IBaseResponseError {
  statusCode: HttpStatusCode;
  body: {
    success: false;
    error: {
      code: CodeError;
      message: string;
      details?: FieldError[];
    };
  };
}
