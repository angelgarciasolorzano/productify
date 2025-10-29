import { ICategoriaCrudRepository, ICategoriaFinderRepository } from "@categoria/domain";

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
export interface ICategoriaRepository extends ICategoriaFinderRepository, ICategoriaCrudRepository {};