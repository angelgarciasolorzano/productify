import { 
  CategoriaRepository, 
  CategoriaFinderRepositorySequelize, 
  CategoriaCrudRepositorySequelize 
} from "./infrastructure"

import { 
  CategoriaService, 
  CategoriaFinderService, 
  CategoriaCrudService 
} from "./application";

import { CategoriaController, categoriaBuildRouter } from "./presentation";

const categoriaFinderRepository = new CategoriaFinderRepositorySequelize();
const categoriaCRUDRepository = new CategoriaCrudRepositorySequelize();

const categoriaRepository = new CategoriaRepository(
  categoriaFinderRepository, categoriaCRUDRepository
);

const categoriaFinderService = new CategoriaFinderService(categoriaRepository);
const categoriaCRUDService = new CategoriaCrudService(categoriaRepository);

const categoriaService = new CategoriaService(categoriaFinderService, categoriaCRUDService);

const categoriaController = new CategoriaController(categoriaService);

const router = categoriaBuildRouter(categoriaController);

export default router;