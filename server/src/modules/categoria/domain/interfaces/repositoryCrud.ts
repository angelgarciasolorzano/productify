import { CategoriaDomain, CategoriaCreateDomain, CategoriaUpdateDomain } from "@/modules/categoria/domain";

/**
 * @file repositoryCrud.ts
 * @description Archivo que define la interface para la clase CategoriaCRUDRepository
 * @author Angel Noe Garcia Solorzano
 * @version 1.3
*/

/**
 * Define el contrato para realizar operaciones CRUD sobre la entidad categorias.
 * 
 * Esta interfaz proporciona metodos para crear, leer y actualizar
 * registros de la tabla Categoria.
 * 
 * @interface ICategoriaCRUDRepository
*/
interface ICategoriaCRUDRepository {
  /**
   * Recupera una lista de todas las categorías existentes.
   *
   * @returns {Promise<CategoriaDomain[]> | null} Una promesa que resuelve con un arreglo de objetos del dominio o null si falla.
   * @throws {ServerError} Si la consulta a la base de datos falla.
  */
  getCategorias(): Promise<CategoriaDomain[] | null>;

  /**
   * Crea un nuevo registro en la tabla Categoria.
   * 
   * @param {CategoriaCreateDomain} data Objeto de dominio con los datos del nuevo registro.
   * @returns {Promise<CategoriaDomain | null>} Una promesa que resuelve con el objeto del dominio creado o null si falla.
   * @throws {ServerError} Si la consulta a la base de datos falla.
  */
  createCategoria(data: CategoriaCreateDomain): Promise<CategoriaDomain | null>;

  /**
   * Actualiza un registro existente en la tabla Categoria.
   *
   * @param {number} id El id del registro a actualizar.
   * @param {CategoriaUpdateDomain} data Objeto de dominio con los nuevos datos de la categoría.
   * @returns {Promise<CategoriaDomain | null>} Una promesa que resuelve con el objeto del dominio actualizado o null si falla.
   * @throws {ServerError} Si la consulta a la base de datos falla.
  */
  updateCategoria(id: number, data: CategoriaUpdateDomain): Promise<CategoriaDomain | null>;
};

export default ICategoriaCRUDRepository;