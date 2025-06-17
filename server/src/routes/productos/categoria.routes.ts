import { Router } from "express";
import { CategoriaRepository, CategoriaFinder, CategoriaCRUD } from "@/repositories/categorias";
import { CategoriaService, CategoriaFinderService, CategoriaCRUDService } from "@/services/categorias";
import { CategoriaController } from "@/controllers/productos";
import { CategoriaSchema } from "@/schemas/productos";
import { validarDatos } from "@/middleware";

const categoriaRepository = new CategoriaRepository(CategoriaFinder, CategoriaCRUD);

const categoriaFinderService = new CategoriaFinderService(categoriaRepository);
const categoriaCRUDService = new CategoriaCRUDService(categoriaRepository);

const categoriaService = new CategoriaService(categoriaFinderService, categoriaCRUDService);

const categoriaController = new CategoriaController(categoriaService);

const router = Router();

router
  .get("/obtener-categorias", categoriaController.getCategorias)
  .get("/obtener-categoria/:id", categoriaController.getCategoriaId);

router
  .post("/registrar-categoria", validarDatos(CategoriaSchema), categoriaController.createCategoria);

router
  .put("/actualizar-categoria/:id", validarDatos(CategoriaSchema), categoriaController.updateCategoria);

export default router;