import { Router } from "express";
import { validateRequest } from "@/infrastructure";
import { asyncWrapper, IdParamSchema } from "@/shared";

import { 
  ICategoriaController,
  CategoriaCreateSchema,
  CategoriaUpdateSchema
} from "@categoria/presentation";

/**
 * Construye un router de express con las rutas relacionadas a la API de Categoria.
 * 
 * @param {ICategoriaController} controller Implementacion del controlador de Categoria.
 * @returns {Router} Router de express con las rutas de la API de Categoria.
*/
export function categoriaBuildRouter(controller: ICategoriaController): Router {
  const router = Router();

  router.get("/obtener-categorias", 
    asyncWrapper(controller.getCategorias)
  );

  router.get("/obtener-categoria/:id", 
    asyncWrapper(controller.getCategoriaId)
  );

  router.post("/registrar-categoria", 
    validateRequest(CategoriaCreateSchema), 
    asyncWrapper(controller.createCategoria)
  );

  router.put("/actualizar-categoria/:id", 
    validateRequest(IdParamSchema, "params"),
    validateRequest(CategoriaUpdateSchema), 
    asyncWrapper(controller.updateCategoria)
  );

  return router;
};