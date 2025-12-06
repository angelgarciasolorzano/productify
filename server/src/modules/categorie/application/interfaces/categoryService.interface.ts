import type { ICategoryCrudService } from "./serviceCrud.interface.js";
import type { ICategoryFinderService } from "./serviceFinder.interface.js";

/**
 * Interfaz principal del servicio de categorías.
 *
 * Combina métodos de búsqueda y operaciones CRUD para gestionar categorías.
 */
export interface ICategoryService extends ICategoryFinderService, ICategoryCrudService {}
