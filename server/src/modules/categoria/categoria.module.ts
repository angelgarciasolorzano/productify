import { 
  CategoriaRepository, 
  CategoriaFinderRepositorySequelize, 
  CategoriaCrudRepositorySequelize 
} from "@categoria/infrastructure";

import { 
  CategoriaService, 
  CategoriaFinderService, 
  CategoriaCrudService 
} from "@categoria/application";

import { CategoriaController, categoriaBuildRouter } from "@categoria/presentation";

const categoriaFinderRepository = new CategoriaFinderRepositorySequelize();
const categoriaCRUDRepository = new CategoriaCrudRepositorySequelize();

const categoriaRepository = new CategoriaRepository(
  categoriaFinderRepository, categoriaCRUDRepository
);

const categoriaFinderService = new CategoriaFinderService(categoriaRepository);
const categoriaCRUDService = new CategoriaCrudService(categoriaRepository);

const categoriaService = new CategoriaService(categoriaFinderService, categoriaCRUDService);

const categoriaController = new CategoriaController(categoriaService);

const categoriaRouter = categoriaBuildRouter(categoriaController);

export { categoriaRouter };