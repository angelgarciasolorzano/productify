import { Domain, CreateDomain, UpdateDomain } from "@/modules/categoria/domain";

/**
 * Define el contrato para realizar operaciones CRUD sobre la tabla categorias.
 * 
 * Esta interfaz proporciona metodos para crear, leer y actualizar
 * registros.
 * 
 * @interface ICrudRepository
*/
interface ICrudRepository {
  /**
   * Recupera una lista de todas las categorías existentes.
   *
   * @returns {Promise<Domain[]> | null} Una promesa que resuelve con un arreglo de objetos del dominio o null si falla.
   * @throws {ServerError} Si la consulta a la base de datos falla.
  */
  getCategorias(): Promise<Domain[] | null>;

  /**
   * Crea un nuevo registro en la tabla Categoria.
   * 
   * @param {CreateDomain} data Objeto de dominio con los datos del nuevo registro.
   * @returns {Promise<Domain | null>} Una promesa que resuelve con el objeto del dominio creado o null si falla.
   * @throws {ServerError} Si la consulta a la base de datos falla.
  */
  createCategoria(data: CreateDomain): Promise<Domain | null>;

  /**
   * Actualiza un registro existente en la tabla Categoria.
   *
   * @param {number} id El id del registro a actualizar.
   * @param {UpdateDomain} data Objeto de dominio con los nuevos datos.
   * @returns {Promise<Domain | null>} Una promesa que resuelve con el objeto del dominio actualizado o null si falla.
   * @throws {ServerError} Si la consulta a la base de datos falla.
  */
  updateCategoria(id: number, data: UpdateDomain): Promise<Domain | null>;
};

export default ICrudRepository;