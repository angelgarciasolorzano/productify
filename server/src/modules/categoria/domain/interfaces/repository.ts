import { ICategoriaFinderRepository, ICategoriaCRUDRepository } from "@/modules/categoria/domain";

/**
 * @file repository.ts
 * @description Archivo que define la interface para la clase CategoriaRepository
 * @author Angel Noe Garcia Solorzano
 * @version 1.2
*/

/**
 * Define el contrato general para operaciones relacionadas con la entidad categorias.
 *
 * Esta interfaz combina los métodos de la clase CategoriaFinderRepository
 * y la clase CategoriaCRUDRepository.
 *
 * @interface ICategoriaRepository
 * @extends ICategoriaFinderRepository
 * @extends ICategoriaCRUDRepository
*/
interface ICategoriaRepository extends ICategoriaFinderRepository, ICategoriaCRUDRepository {};

export default ICategoriaRepository;