import { Request, Response, NextFunction } from "express";
import { SchemaType } from "@/shared";

/**
 * Middleware para validar los datos del cuerpo de las solicitudes HTTP.
 * 
 * El middleware valida los datos del cuerpo de las solicitudes HTTP utilizando el esquema de validacion proporcionado.
 * Si los datos no son válidos, los errores de validacion se pasan a la funcion `next` para ser 
 * manejadas por el middleware de manejo de errores `errorHandler`.
 * 
 * Si los datos son válidos, se agrega el resultado de la validación al objeto `request.body`.
 *
 * @param {SchemaType<T>} schema Esquema de validacion para los datos del request body
 * @example 
 * router.post("/categoria", validateRequestBody(categoriaSchema), controlador);
*/
export const validateRequestBody = <
  T extends object
>(schema: SchemaType<T>) => async (
  request: Request, 
  _response: Response, 
  next: NextFunction
): Promise<void> => {
  try {
    const result = await schema.validate(request.body, { abortEarly: false, stripUnknown: true });
    request.body = result;
    
    next();
  } catch (error) {
    next(error);
  }
};