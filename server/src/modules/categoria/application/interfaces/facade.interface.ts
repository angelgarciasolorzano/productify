import { IFinderService, ICrudService } from "@/modules/categoria/application";

/**
 * Define el contrato general del servicio de la aplicacion para la gestion de categorias.
 *
 * Esta interfaz combina los métodos de la clase FinderService
 * y la clase CrudService.
 *
 * @interface IFacadeService
*/
interface IFacadeService extends IFinderService, ICrudService {};

export default IFacadeService;