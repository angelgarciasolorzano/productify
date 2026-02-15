import type { ICategoryCrudRepository } from "./categoryRepositoryCrud.interface.js";
import type { ICategoryFinderRepository } from "./categoryRepositoryFinder.interface.js";

/**
 * Interfaz principal del repositorio de categorías.
 *
 * Combina métodos de búsqueda y operaciones CRUD para gestionar categorías.
 */
export interface ICategoryRepository extends ICategoryFinderRepository, ICategoryCrudRepository {}
