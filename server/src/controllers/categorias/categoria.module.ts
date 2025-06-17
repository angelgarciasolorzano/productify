import { 
  CategoriaRepository, CategoriaFinderRepository, CategoriaCRUDRepository 
} from "@/repositories/categorias";

import { 
  CategoriaService, CategoriaFinderService, CategoriaCRUDService 
} from "@/services/categorias";

import CategoriaController from "./categoria.controller";

const categoriaFinderRepository = new CategoriaFinderRepository();
const categoriaCRUDRepository = new CategoriaCRUDRepository();

const categoriaRepository = new CategoriaRepository(categoriaFinderRepository, categoriaCRUDRepository);

const categoriaFinderService = new CategoriaFinderService(categoriaRepository);
const categoriaCRUDService = new CategoriaCRUDService(categoriaRepository);

const categoriaService = new CategoriaService(categoriaFinderService, categoriaCRUDService);

const categoriaController = new CategoriaController(categoriaService);

export default categoriaController;