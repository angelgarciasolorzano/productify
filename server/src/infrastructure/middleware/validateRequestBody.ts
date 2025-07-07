import { Request, Response, NextFunction } from "express";
import { ValidationError } from "yup";
import { SchemaType, formatYupErrors } from "@/shared";

/**
 * Middleware para validar los datos del cuerpo de las solicitudes HTTP.
 * 
 * El middleware valida los datos del cuerpo de las solicitudes HTTP utilizando el esquema de validacion proporcionado.
 * Si los datos no son válidos, se devuelve un error 400 con los errores de validación.
 *
 * @param {SchemaType<T>} schema Esquema de validacion para los datos del request body
 * @example 
 * router.post("/categoria", validateRequestBody(categoriaSchema), controlador);
*/
const validateRequestBody = <T extends object>(schema: SchemaType<T>) => 
  async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.validate(request.body, { abortEarly: false, stripUnknown: true });
      next();
    } catch (error) {
      const errores = error as ValidationError;
      const formato = formatYupErrors(errores);

      response.status(400).json({ errors: formato });
    }
  };
  
export default validateRequestBody;