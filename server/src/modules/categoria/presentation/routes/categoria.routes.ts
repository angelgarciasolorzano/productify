import { Router } from "express";

import { validateRequestBody } from "@/infrastructure";

import ICategoriaController from "../controller/controller.interface";
import CategoriaCreateSchema from "../schemas/categoriaCreate.schema";
import CategoriaUpdateSchema from "../schemas/categoriaUpdate.schema";

/**
 * Construye un router de express con las rutas relacionadas a la API de Categoria.
 * 
 * @param {ICategoriaController} controller Implementacion del controlador de Categoria.
 * @returns {Router} Router de express con las rutas de la API de Categoria.
*/
function categoriaBuildRouter(controller: ICategoriaController): Router {
  const router = Router();

  router
    .get("/obtener-categorias", controller.getCategorias)
    .get("/obtener-categoria/:id", controller.getCategoriaId)
    .post("/registrar-categoria", validateRequestBody(CategoriaCreateSchema), controller.createCategoria)
    .put("/actualizar-categoria/:id", validateRequestBody(CategoriaUpdateSchema), controller.updateCategoria);

  return router;
};

export default categoriaBuildRouter;