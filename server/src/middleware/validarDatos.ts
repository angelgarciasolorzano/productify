import { Request, Response, NextFunction } from "express";
import { ValidationError } from "yup";
import { SchemaType } from "../types";

import formatoErrors from "../helpers/formatoErrors";

const validarDatos = <T extends object>(schema: SchemaType<T>) => 
  async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.validate(request.body, { abortEarly: false });
      next();
    } catch (error) {
      const errores = error as ValidationError;
      const formato = formatoErrors(errores);

      response.status(400).json({ errors: formato });
    }
  };
  
export default validarDatos;