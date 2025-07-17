import { Categoria, CategoriaCreateDomain, CategoriaUpdateDomain } from "@categoria/domain";

/**
 * Define el contrato para realizar operaciones CRUD sobre la tabla categorias.
 * 
 * Esta interfaz proporciona metodos para crear, leer y actualizar
 * registros.
 * 
 * @interface ICategoriaCrudRepository
*/
export interface ICategoriaCrudRepository {
  /**
   * Recupera una lista de todas las categorías existentes.
   *
   * @returns {Promise<Categoria[]>} Una promesa que resuelve con un arreglo de objetos del dominio.
   * @throws {ServerError} Si la consulta a la base de datos falla.
  */
  getCategorias(): Promise<Categoria[]>;

  /**
   * Crea un nuevo registro en la tabla Categoria.
   * 
   * @param {CategoriaCreateDomain} data Objeto de dominio con los datos del nuevo registro.
   * @returns {Promise<Categoria>} Una promesa que resuelve con el objeto del dominio creado.
   * @throws {ServerError} Si la consulta a la base de datos falla.
  */
  createCategoria(data: CategoriaCreateDomain): Promise<Categoria>;

  /**
   * Actualiza un registro existente en la tabla Categoria.
   *
   * @param {number} id El id del registro a actualizar.
   * @param {CategoriaUpdateDomain} data Objeto de dominio con los nuevos datos.
   * @returns {Promise<Categoria>} Una promesa que resuelve con el objeto del dominio actualizado.
   * @throws {ServerError} Si la consulta a la base de datos falla o si no se puede recuperar la categoria tras la actualización.
  */
  updateCategoria(id: number, data: CategoriaUpdateDomain): Promise<Categoria>;
};