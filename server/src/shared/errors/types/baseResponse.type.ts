import type { HttpStatusCodeType } from "../../constants/httpStatusCode.js";
import type { CodeError } from "../constants/codeError.js";
import type { FieldError } from "./field.type.js";

export interface IBaseResponseError {
  statusCode: HttpStatusCodeType;
  body: {
    success: false;
    error: {
      code: CodeError;
      message: string;
      details?: FieldError[];
    };
  };
}
