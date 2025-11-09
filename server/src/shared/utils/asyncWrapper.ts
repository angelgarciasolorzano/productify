import type { NextFunction, Request, Response } from "express";

export const asyncWrapper = <
  Req extends Request = Request,
  Res extends Response = Response,
>(
  fn: (request: Req, response: Res, next: NextFunction) => Promise<void>,
) => {
  return (request: Req, response: Res, next: NextFunction): void => {
    fn(request, response, next).catch(next);
  };
};
