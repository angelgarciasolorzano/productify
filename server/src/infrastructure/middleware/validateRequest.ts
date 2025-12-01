import type { NextFunction, Request, Response } from "express";
import type { ObjectSchema } from "yup";

import { RequestPart } from "@productify/shared/index.js";

/**
 * Middleware para validar partes de la solicitud HTTP con Yup.
 *
 * Valida y normaliza datos de params, query o body usando un esquema.
 * Si falla, pasa el error al siguiente middleware.
 *
 * @param schema - Esquema de validación Yup.
 * @param requestPart - Parte a validar ('body' por defecto).
 * @returns Función middleware que valida la solicitud.
 * @example
 * router.post("/categoria", validateRequest(categoriaSchema));
 * router.get("/categoria/:id", validateRequest(idParamSchema, "params"));
 */
export const validateRequest =
  <T extends object>(schema: ObjectSchema<T>, requestPart: RequestPart = RequestPart.BODY) =>
  async (request: Request, _response: Response, next: NextFunction): Promise<void> => {
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
