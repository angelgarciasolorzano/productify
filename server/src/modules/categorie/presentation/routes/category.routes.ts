import { Router } from "express";

import { validateRequest } from "@productify/infrastructure/middleware/index.js";
import { RequestPart } from "@productify/shared/constants/index.js";
import { IdParamSchema } from "@productify/shared/schemas/index.js";
import { asyncWrapper } from "@productify/shared/utils/index.js";

import type { ICategoryController } from "../controller/categoryController.interface.js";
import { CategoryCreateSchema, CategoryUpdateSchema } from "../schemas/index.js";

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

  router.get("/categories", asyncWrapper(controller.getCategories));

  router.post(
    "/categories",
    validateRequest(CategoryCreateSchema),
    asyncWrapper(controller.createCategory),
  );

  router.get("/categories/:id", asyncWrapper(controller.getCategoryById));

  router.put(
    "/categories/:id",
    validateRequest(IdParamSchema, RequestPart.PARAMS),
    validateRequest(CategoryUpdateSchema),
    asyncWrapper(controller.updateCategory),
  );

  return router;
}
