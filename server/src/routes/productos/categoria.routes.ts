import { Router } from "express";
import { 
  CategoriaRepository, CategoriaFinderRepository, CategoriaCRUDRepository 
} from "@/repositories/categorias";

import { 
  CategoriaService, CategoriaFinderService, CategoriaCRUDService 
} from "@/services/categorias";

import { CategoriaController } from "@/controllers/categorias";
import { CategoriaSchema } from "@/schemas/productos";
import { validarDatos } from "@/middleware";

const categoriaFinderRepository = new CategoriaFinderRepository();
const categoriaCRUDRepository = new CategoriaCRUDRepository();

const categoriaRepository = new CategoriaRepository(categoriaFinderRepository, categoriaCRUDRepository);

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