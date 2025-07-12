import { Categoria } from "@categoria/domain";

/**
 * Define el contrato para realizar operaciones de consulta sobre la tabla categorias.
 * 
 * Esta interfaz proporciona metodos para buscar una categoría por su id o nombre.
 * 
 * @interface ICategoriaFinderRepository
*/
export interface ICategoriaFinderRepository {
  /**
   * Recupera un registro de la tabla Categoria por su id.
   *
   * @param {number} id El id de la categoria a buscar.
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto del dominio o null si no se encuentra.
   * @throws {ServerError} Si la consulta a la base de datos falla.
  */
  getCategoriaId(id: number): Promise<Categoria | null>;

  /**
   * Recupera un registro de la tabla Categoria por su nombre.
   *
   * @param {string} nombre nombre de la categoria a buscar.
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto del dominio o null si no se encuentra.
   * @throws {ServerError} Si la consulta a la base de datos falla.
  */
  getCategoriaNombre(nombre: string): Promise<Categoria | null>;
};