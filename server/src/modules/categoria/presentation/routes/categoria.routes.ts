import { Router } from "express";
import { validateRequestBody } from "@/infrastructure";
import { asyncWrapper } from "@/shared";

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
    validateRequestBody(CategoriaCreateSchema), 
    asyncWrapper(controller.createCategoria)
  );

  router.put("/actualizar-categoria/:id", 
    validateRequestBody(CategoriaUpdateSchema), 
    asyncWrapper(controller.updateCategoria)
  );

  return router;
};