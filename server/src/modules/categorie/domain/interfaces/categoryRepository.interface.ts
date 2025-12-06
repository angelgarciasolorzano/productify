import type { ICategoryCrudRepository } from "./repositoryCrud.interface.js";
import type { ICategoryFinderRepository } from "./repositoryFinder.interface.js";

/**
 * Interfaz principal del repositorio de categorías.
 *
 * Combina métodos de búsqueda y operaciones CRUD para gestionar categorías.
 */
export interface ICategoryRepository extends ICategoryFinderRepository, ICategoryCrudRepository {}
