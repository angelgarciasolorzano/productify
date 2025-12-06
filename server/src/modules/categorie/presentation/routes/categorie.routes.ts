import { Router } from "express";

import { validateRequest } from "@productify/infrastructure/index.js";
import { asyncWrapper, IdParamSchema, RequestPart } from "@productify/shared/index.js";

import type { ICategoryController } from "../controller/controller.interface.js";
import { CategoryCreateSchema } from "../schemas/categoryCreate.schema.js";
import { CategoryUpdateSchema } from "../schemas/categoryUpdate.schema.js";

/**
 * Construye un router Express con las rutas de la API de categorías.
 *
 * Define endpoints para operaciones CRUD: obtener todas, obtener por ID, crear y actualizar.
 *
 * @param controller Implementación del controlador de categorías
 * @returns Router configurado con las rutas
 */
export function categoryBuildRouter(controller: ICategoryController): Router {
  const router = Router();

  router.get("/obtener-categorias", asyncWrapper(controller.getCategories));

  router.get("/obtener-categoria/:id", asyncWrapper(controller.getCategoryById));

  router.post(
    "/registrar-categoria",
    validateRequest(CategoryCreateSchema),
    asyncWrapper(controller.createCategory),
  );

  router.put(
    "/actualizar-categoria/:id",
    validateRequest(IdParamSchema, RequestPart.PARAMS),
    validateRequest(CategoryUpdateSchema),
    asyncWrapper(controller.updateCategory),
  );

  return router;
}
