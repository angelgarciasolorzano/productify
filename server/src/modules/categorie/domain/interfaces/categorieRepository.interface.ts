import type { ICategorieCrudRepository } from "./repositoryCrud.interface.js";
import type { ICategorieFinderRepository } from "./repositoryFinder.interface.js";

/**
 * Interfaz principal del repositorio de categorías.
 *
 * Combina métodos de búsqueda y operaciones CRUD para gestionar categorías.
 */
export interface ICategorieRepository
  extends ICategorieFinderRepository,
    ICategorieCrudRepository {}
