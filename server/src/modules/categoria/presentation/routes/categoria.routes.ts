import { 
  ICategoriaController, 
  CategoriaCreateSchema, 
  CategoriaUpdateSchema 
} from "@/modules/categoria/presentation";

import { Router } from "express";
import { validarDatos } from "@/middleware";

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
    .post("/registrar-categoria", validarDatos(CategoriaCreateSchema), controller.createCategoria)
    .put("/actualizar-categoria/:id", validarDatos(CategoriaUpdateSchema), controller.updateCategoria);

  return router;
};

export default categoriaBuildRouter;