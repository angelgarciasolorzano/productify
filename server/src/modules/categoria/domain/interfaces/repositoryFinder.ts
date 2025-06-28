import { Categoria } from "@/modules/categoria/domain";

/**
 * @file repositoryFinder.ts
 * @description Archivo que define la interface para la clase CategoriaFinderRepository
 * @author Angel Noe Garcia Solorzano
 * @version 1.0
*/

/**
 * @interface ICategoriaFinder
 * @description Interfaz para definir los métodos de la clase CategoriaFinderRepository
*/
interface ICategoriaFinderRepository {
  /**
   * @method getCategoriaId
   * @description Recupera un registro de la tabla Categoria por su id
   * @param {number} id El id de la categoria
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto del dominio Categoria o null si no se encuentra
  */
  getCategoriaId(id: number): Promise<Categoria | null>;

  /**
   * @method getCategoriaNombre
   * @description Recupera un registro de la tabla Categoria por su nombre
   * @param {string} nombre nombre de la categoria
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto del dominio Categoria o null si no se encuentra
  */
  getCategoriaNombre(nombre: string): Promise<Categoria | null>;
};

export default ICategoriaFinderRepository;