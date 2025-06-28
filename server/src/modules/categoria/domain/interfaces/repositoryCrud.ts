import { Categoria } from "@/modules/categoria/domain";

/**
 * @file iCategoriaCRUD.ts
 * @description Archivo que define la interface para la clase CategoriaCRUDRepository
 * @author Angel Noe Garcia Solorzano
 * @version 1.0
*/

/**
 * @interface ICategoriaCRUD
 * @description Interfaz para definir los métodos de la clase CategoriaCRUDRepository
*/
interface ICategoriaCRUDRepository {
  /**
   * @method getCategorias
   * @description Recupera una lista de todos los registros de la tabla Categoria
   * @returns {Promise<Categoria[]> | null} Una promesa que resuelve con una lista (array) de objetos del dominio Categoria o null si falla
   * @throws {ServerError} Si la consulta a la base de datos falla
  */
  getCategorias(): Promise<Categoria[] | null>;

  /**
   * @method createCategoria
   * @description Crea un nuevo registro en la tabla Categoria
   * @param {CategoriaType} data Datos del nuevo registro
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto del dominio Categoria creado o null si falla
  */
  createCategoria(data: Categoria): Promise<Categoria | null>;

  /**
   * @method updateCategoria
   * @description Actualiza un registro de la tabla Categoria
   * @param {number} id El id del registro a actualizar
   * @param {CategoriaType} data Los nuevos datos del registro
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto del dominio Categoria actualizado o null si falla
  */
  updateCategoria(id: number, data: Categoria): Promise<Categoria | null>;
};

export default ICategoriaCRUDRepository;