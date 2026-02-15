import type { ICategoryCrudService } from "./categoryServiceCrud.interface.js";
import type { ICategoryFinderService } from "./categoryServiceFinder.interface.js";

/**
 * Interfaz principal del servicio de categorías.
 *
 * Combina métodos de búsqueda y operaciones CRUD para gestionar categorías.
 */
export interface ICategoryService extends ICategoryFinderService, ICategoryCrudService {}
