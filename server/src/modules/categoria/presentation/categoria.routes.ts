import { Router } from "express";
import { categoriaModuleController } from "@/modules/categoria";

const router = Router();

router
  .get("/obtener-categorias", categoriaModuleController.getCategorias)
  .get("/obtener-categoria/:id", categoriaModuleController.getCategoriaId);

router
  .post("/registrar-categoria",  categoriaModuleController.createCategoria);

router
  .put("/actualizar-categoria/:id",  categoriaModuleController.updateCategoria);

export default router;