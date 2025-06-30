import { ICategoriaFinderRepository, ICategoriaCRUDRepository } from "@/modules/categoria/domain";

/**
 * @file repository.ts
 * @description Archivo que define la interface para la clase CategoriaRepository
 * @author Angel Noe Garcia Solorzano
 * @version 1.0
*/

/**
 * @interface ICategoriaRepository
 * @description interfaz para definir los métodos de la clase CategoriaRepository
*/
interface ICategoriaRepository extends ICategoriaFinderRepository, ICategoriaCRUDRepository {};

export default ICategoriaRepository;