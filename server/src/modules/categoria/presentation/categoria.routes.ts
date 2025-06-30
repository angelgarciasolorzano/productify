import { Router } from "express";
import { ICategoriaController } from "@/modules/categoria/presentation";

/**
 * Construye un router de express con las rutas relacionadas a la API de Categoria
 * @function buildCategoriaRouter
 * @description crea un router de express con las rutas de la API de Categoria
 * @param {ICategoriaController} controller instancia de CategoriaController
 * @returns {Router} router de express con las rutas de la API de Categoria
 * @example
 * const controller = new CategoriaController("dependency injection");
 * const router = buildCategoriaRouter(controller);
 * app.use("/api/categoria", router);
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