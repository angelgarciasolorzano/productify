import { Router } from "express";
import { CategoriaRepository } from "@/repositories/productos";
import { CategoriaService } from "@/services/productos";
import { CategoriaController } from "@/controllers/productos";
import { CategoriaSchema } from "@/schemas/productos";
import { validarDatos } from "@/middleware";

const categoriaRepository = new CategoriaRepository();
const categoriaService = new CategoriaService(categoriaRepository);
const categoriaController = new CategoriaController(categoriaService);

const router = Router();

router
  .get("/obtener-categoria/:id", categoriaController.getCategoriaId)
  .get("/obtener-categorias", categoriaController.getCategorias);

router
  .post("/registrar-categoria", validarDatos(CategoriaSchema), categoriaController.createCategoria)

router
  .put("/actualizar-categoria/:id", validarDatos(CategoriaSchema), categoriaController.updateCategoria);

export default router;