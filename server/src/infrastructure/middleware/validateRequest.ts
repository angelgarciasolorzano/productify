import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "yup";

type RequestPart = "params" | "query" | "body";

/**
 * Middleware para validar los datos de las solicitudes HTTP.
 * 
 * Valida los datos de la parte especificada del request (params, query o body) utilizando el esquema de validacion proporcionado.
 * Normaliza los datos de la parte especificada y los agrega al objeto `request` específico.
 * 
 * Si los datos no son validos, se lanza un error que es manejado por el middleware de error `errorHandler`.
 *
 * @template T Tipo de objeto que se desea validar
 * @param {SchemaType<T>} schema Esquema de validacion para los datos
 * @param {RequestPart} requestPart Parte del request que se desea validar (body por defecto)
 * @example 
 * // validacion de body
 * router.post("/categoria", validateRequest(categoriaSchema), controlador);
 * 
 * // validacion de params
 * router.get("/categoria/:id", validateRequest(idParamSchema, "params"), controlador);
 * 
 * // validacion de query
 * router.get("/categoria", validateRequest(querySchema, "query"), controlador);
*/
export const validateRequest = <
  T extends object
>(
  schema: ObjectSchema<T>,
  requestPart: RequestPart = "body"
) => async (
  request: Request, 
  _response: Response, 
  next: NextFunction
): Promise<void> => {
  try {
    const result = await schema.validate(request[requestPart], { 
      abortEarly: false, 
      stripUnknown: true,
    });

    request[requestPart] = result;
    
    next();
  } catch (error) {
    next(error);
  }
};