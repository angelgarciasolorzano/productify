import type {
  ICategorieCrudService,
  ICategorieFinderService,
} from "@productify/categorie/application/index.js";

/**
 * Interfaz principal del servicio de categorías.
 *
 * Combina métodos de búsqueda y operaciones CRUD para gestionar categorías.
 */
export interface ICategorieService
  extends ICategorieFinderService,
    ICategorieCrudService {}
