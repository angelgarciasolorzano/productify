import { 
  CategoriaRepository, 
  CategoriaFinderRepositorySequelize, 
  CategoriaCrudRepositorySequelize 
} from "@/modules/categoria/infrastructure";

import { 
  CategoriaService, 
  CategoriaFinderService, 
  CategoriaCrudService 
} from "@/modules/categoria/application";

import { CategoriaController, categoriaBuilRouter } from "@/modules/categoria/presentation";

const categoriaFinderRepository = new CategoriaFinderRepositorySequelize();
const categoriaCRUDRepository = new CategoriaCrudRepositorySequelize();

const categoriaRepository = new CategoriaRepository(
  categoriaFinderRepository, categoriaCRUDRepository
);

const categoriaFinderService = new CategoriaFinderService(categoriaRepository);
const categoriaCRUDService = new CategoriaCrudService(categoriaRepository);

const categoriaService = new CategoriaService(categoriaFinderService, categoriaCRUDService);

const categoriaController = new CategoriaController(categoriaService);

const router = categoriaBuilRouter(categoriaController);

export default router;