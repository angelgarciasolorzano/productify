import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";

interface RequestParamsType extends ParamsDictionary {
  id: string;
};

interface RequestType<T> extends Request<RequestParamsType> {
  usuario?: T;
  body: T;
};

export default RequestType;