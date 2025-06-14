import { NextFunction, Request, Response } from "express";

/**
 * @function asyncWrapper
 * @description Envoltorio (Wrapper) para manejar la gestión de errores en las funciones asíncronas
 * @param fn Función asíncrona del controlador que se va a envolver
 * @returns Funcion compatible con express que maneja las excepciones asíncronas
 * 
 * @example
 * import asyncWrapper from "@/utils/asyncWrapper";
 * 
 * router.get("/categorias", asyncWrapper(async (req, res) => {
 *   const categorias = await CategoriaService.getCategorias();
 *   res.json(categorias);
 * }));
 */
const asyncWrapper = <
  Req extends Request = Request, 
  Res extends Response = Response, 
  Next extends NextFunction = NextFunction
>(
  fn: (request: Req, response: Res, next: Next) => Promise<void>
) => {
  return (request: Req, response: Res, next: Next) => {
    fn(request, response, next).catch(next);
  };
};

export default asyncWrapper;