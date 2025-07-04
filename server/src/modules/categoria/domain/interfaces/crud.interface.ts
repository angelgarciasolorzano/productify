import { Categoria, CategoriaCreateDomain, CategoriaUpdateDomain } from "@/modules/categoria/domain";

/**
 * Define el contrato para realizar operaciones CRUD sobre la tabla categorias.
 * 
 * Esta interfaz proporciona metodos para crear, leer y actualizar
 * registros.
 * 
 * @interface ICategoriaCrudRepository
*/
interface ICategoriaCrudRepository {
  /**
   * Recupera una lista de todas las categorías existentes.
   *
   * @returns {Promise<Categoria[]> | null} Una promesa que resuelve con un arreglo de objetos del dominio o null si falla.
   * @throws {ServerError} Si la consulta a la base de datos falla.
  */
  getCategorias(): Promise<Categoria[] | null>;

  /**
   * Crea un nuevo registro en la tabla Categoria.
   * 
   * @param {CategoriaCreateDomain} data Objeto de dominio con los datos del nuevo registro.
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto del dominio creado o null si falla.
   * @throws {ServerError} Si la consulta a la base de datos falla.
  */
  createCategoria(data: CategoriaCreateDomain): Promise<Categoria | null>;

  /**
   * Actualiza un registro existente en la tabla Categoria.
   *
   * @param {number} id El id del registro a actualizar.
   * @param {CategoriaUpdateDomain} data Objeto de dominio con los nuevos datos.
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto del dominio actualizado o null si falla.
   * @throws {ServerError} Si la consulta a la base de datos falla.
  */
  updateCategoria(id: number, data: CategoriaUpdateDomain): Promise<Categoria | null>;
};

export default ICategoriaCrudRepository;