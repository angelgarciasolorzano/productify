import { IFinderRepository, ICrudRepository } from "@/modules/categoria/domain";

/**
 * Define el contrato general para operaciones relacionadas con la entidad categorias.
 *
 * Esta interfaz combina los métodos de la clase CategoriaFinderRepository
 * y la clase CategoriaCRUDRepository.
 *
 * @interface IFacadeRepository
 * @extends IFinderRepository
 * @extends ICrudRepository
*/
interface IFacadeRepository extends IFinderRepository, ICrudRepository {};

export default IFacadeRepository;