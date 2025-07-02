import { Router } from "express";
import { ICategoriaController } from "@/modules/categoria/presentation";

/**
 * Construye un router de express con las rutas relacionadas a la API de Categoria.
 * 
 * @param {ICategoriaController} controller Implementacion del controlador de Categoria.
 * @returns {Router} Router de express con las rutas de la API de Categoria.
*/
function buildCategoriaRouter(controller: ICategoriaController): Router {
  const router = Router();

  router
    .get("/obtener-categorias", controller.getCategorias)
    .get("/obtener-categoria/:id", controller.getCategoriaId)
    .post("/registrar-categoria", controller.createCategoria)
    .put("/actualizar-categoria/:id", controller.updateCategoria);

  return router;
};

export default buildCategoriaRouter;