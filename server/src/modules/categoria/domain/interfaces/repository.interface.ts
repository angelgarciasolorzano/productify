import ICategoriaCrudRepository from "./crud.interface";
import ICategoriaFinderRepository from "./finder.interface";

/**
 * Define el contrato general para operaciones relacionadas con la tabla categorias.
 *
 * Esta interfaz combina los métodos de la clase CategoriaFinderRepository
 * y la clase CategoriaCRUDRepository.
 *
 * @interface ICategoriaRepository
 * @extends ICategoriaFinderRepository
 * @extends ICategoriaCrudRepository
*/
interface ICategoriaRepository extends ICategoriaFinderRepository, ICategoriaCrudRepository {};

export default ICategoriaRepository;