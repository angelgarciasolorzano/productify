import { Router } from "express";
import { CategoriaSchema } from "@/schemas/productos";
import { CategoriaController } from "@/controllers/categorias";
import { validarDatos } from "@/middleware";

const router = Router();

router
  .get("/obtener-categorias", CategoriaController.getCategorias)
  .get("/obtener-categoria/:id", CategoriaController.getCategoriaId);

router
  .post("/registrar-categoria", validarDatos(CategoriaSchema), CategoriaController.createCategoria);

router
  .put("/actualizar-categoria/:id", validarDatos(CategoriaSchema), CategoriaController.updateCategoria);

export default router;