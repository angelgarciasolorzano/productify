import { Router } from "express";
import { CategoriaController } from "@/controllers/productos";
import { CategoriaSchema } from "@/schemas/productos";
import { validarDatos } from "@/middleware";

const router = Router();

router.get("/obtener-categorias", CategoriaController.getCategorias);

router.get("/obtener-categoria/:id", CategoriaController.getCategoriaId);

router.post(
  "/registrar-categoria", 
  validarDatos(CategoriaSchema), 
  CategoriaController.createCategoria
);

router.put("/actualizar-categoria/:id", 
  validarDatos(CategoriaSchema), 
  CategoriaController.updateCategoria
);

export default router;