import ICategoriaCRUDService from "./crud/iCategoriaCRUD.service";
import ICategoriaFinderService from "./finder/iCategoriaFinder.service";

/**
 * @file iCategoria.service.ts
 * @description Archivo que define la interface para la clase CategoriaService
 * @author Angel Noe Garcia Solorzano
 * @version 1.0
*/

/**
 * @interface ICategoriaService
 * @description Interfaz para definir los métodos de la clase CategoriaService
*/
interface ICategoriaService extends ICategoriaFinderService, ICategoriaCRUDService {};

export default ICategoriaService;