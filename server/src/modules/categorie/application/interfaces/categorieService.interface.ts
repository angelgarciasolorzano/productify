import { ICategoriaFinderService, ICategoriaCrudService } from "@categoria/application";

/**
 * Define el contrato general del servicio de la aplicacion para la gestion de categorias.
 *
 * Esta interfaz combina los métodos de la clase CategoriaFinderService
 * y la clase CategoriaCrudService.
 *
 * @interface ICategoriaService
*/
export interface ICategoriaService extends ICategoriaFinderService, ICategoriaCrudService {};