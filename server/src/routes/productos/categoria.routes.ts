import { Router } from "express";
import { CategoriaController } from "@/controllers/productos";

const router = Router();

router.get("/obtener-categorias", CategoriaController.getCategorias);

router.get("/obtener-categoria/:id", CategoriaController.getCategoriaId);

router.post("/registrar-categoria", CategoriaController.createCategoria);

router.put("/actualizar-categoria/:id", CategoriaController.updateCategoria);

export default router;