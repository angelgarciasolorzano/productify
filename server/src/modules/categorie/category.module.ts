import {
  CategoryCrudService,
  CategoryFinderService,
  CategoryService,
} from "./application/index.js";
import {
  CategoryCrudRepository,
  CategoryFinderRepository,
  CategoryRepository,
} from "./infrastructure/index.js";
import { categoryBuildRouter, CategoryController } from "./presentation/index.js";

const categoryFinderRepository = new CategoryFinderRepository();
const categoryCRUDRepository = new CategoryCrudRepository();

const categoryRepository = new CategoryRepository(categoryFinderRepository, categoryCRUDRepository);

const categoryFinderService = new CategoryFinderService(categoryRepository);
const categoryCRUDService = new CategoryCrudService(categoryRepository);

const categoryService = new CategoryService(categoryFinderService, categoryCRUDService);

const categoryController = new CategoryController(categoryService);

const categoryRouter = categoryBuildRouter(categoryController);

export { categoryRouter };
