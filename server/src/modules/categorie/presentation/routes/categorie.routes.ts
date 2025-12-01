import { Router } from "express";

import { validateRequest } from "@productify/infrastructure/index.js";
import { asyncWrapper, IdParamSchema, RequestPart } from "@productify/shared/index.js";

import type { ICategorieController } from "../controller/controller.interface.js";
import { CategorieCreateSchema } from "../schemas/categorieCreate.schema.js";
import { CategorieUpdateSchema } from "../schemas/categorieUpdate.schema.js";

/**
 * Construye un router Express con las rutas de la API de categorías.
 *
 * Define endpoints para operaciones CRUD: obtener todas, obtener por ID, crear y actualizar.
 *
 * @param controller Implementación del controlador de categorías
 * @returns Router configurado con las rutas
 */
export function categoriaBuildRouter(controller: ICategorieController): Router {
  const router = Router();

  router.get("/obtener-categorias", asyncWrapper(controller.getCategories));

  router.get("/obtener-categoria/:id", asyncWrapper(controller.getCategorieId));

  router.post(
    "/registrar-categoria",
    validateRequest(CategorieCreateSchema),
    asyncWrapper(controller.createCategory),
  );

  router.put(
    "/actualizar-categoria/:id",
    validateRequest(IdParamSchema, RequestPart.PARAMS),
    validateRequest(CategorieUpdateSchema),
    asyncWrapper(controller.updateCategory),
  );

  return router;
}
