import { ICategoriaFinderService, ICategoriaCRUDService } from "@/modules/categoria/application";

/**
 * @file service.ts
 * @description Archivo que define la interface para la clase CategoriaService
 * @author Angel Noe Garcia Solorzano
 * @version 1.1
*/

/**
 * Define el contrato general del servicio de la aplicacion para la gestion de categorias.
 *
 * Esta interfaz combina los métodos de la clase CategoriaFinderService
 * y la clase CategoriaCRUDService.
 *
 * @interface ICategoriaService
*/
interface ICategoriaService extends ICategoriaFinderService, ICategoriaCRUDService {};

export default ICategoriaService;