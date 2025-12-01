import type { ICategorieCrudService } from "./serviceCrud.interface.js";
import type { ICategorieFinderService } from "./serviceFinder.interface.js";

/**
 * Interfaz principal del servicio de categorías.
 *
 * Combina métodos de búsqueda y operaciones CRUD para gestionar categorías.
 */
export interface ICategorieService extends ICategorieFinderService, ICategorieCrudService {}
