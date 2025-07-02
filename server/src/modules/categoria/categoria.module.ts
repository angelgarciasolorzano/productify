import { 
  CategoriaSequelizeRepository, 
  CategoriaSequelizeFinderRepository, 
  CategoriaSequelizeCRUDRepository 
} from "@/modules/categoria/infrastructure";

import { 
  CategoriaService, 
  CategoriaFinderService, 
  CategoriaCRUDService 
} from "@/modules/categoria/application";

import { CategoriaController, buildCategoriaRouter } from "@/modules/categoria/presentation";

const categoriaFinderRepository = new CategoriaSequelizeFinderRepository();
const categoriaCRUDRepository = new CategoriaSequelizeCRUDRepository();

const categoriaRepository = new CategoriaSequelizeRepository(
  categoriaFinderRepository, categoriaCRUDRepository
);

const categoriaFinderService = new CategoriaFinderService(categoriaRepository);
const categoriaCRUDService = new CategoriaCRUDService(categoriaRepository);

const categoriaService = new CategoriaService(categoriaFinderService, categoriaCRUDService);

const categoriaController = new CategoriaController(categoriaService);

const router = buildCategoriaRouter(categoriaController);

export default router;