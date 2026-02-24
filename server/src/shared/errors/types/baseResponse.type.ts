import type { HttpStatusCodeType } from "../../constants/httpStatusCode.js";
import type { CodeErrorType } from "../constants/codeError.js";
import type { FieldError } from "./field.type.js";

export interface IBaseResponseError {
  statusCode: HttpStatusCodeType;
  body: {
    success: false;
    error: {
      code: CodeErrorType;
      message: string;
      details?: FieldError[];
    };
  };
}
