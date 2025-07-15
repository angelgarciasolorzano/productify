import { UpdateResult } from "@/shared";
import { CategoriaCreateDto, CategoriaUpdateDto, CategoriaDto } from "@categoria/application";

/**
 * Define el contrato del servicio de la aplicacion para la gestion de las categorías.
 * 
 * Esta interfaz declara las operaciones disponibles en la capa de la aplicacion para
 * crear, obtener y actualizar registros de categoria, utilizando DTOs como puente
 * entre la capa de presentacion y la capa de dominio.
 *
 * @interface ICategoriaCrudService
*/
export interface ICategoriaCrudService {
  /**
   * Recupera una lista de todas las categorías existentes.
   *
   * @returns {Promise<CategoriaDto[]>} Una promesa que resuelve con una lista (array) de objetos CategoriaDto.
   * @throws {NotFoundError} Si no se encuentran categorías.
  */
  getCategorias(): Promise<CategoriaDto[]>;

  /**
   * Crea una nueva categoria con los datos recibidos.
   *
   * @param {CategoriaCreateDto} data Datos del nuevo registro.
   * @returns {Promise<CategoriaDto>} Una promesa que resuelve con el objeto CategoriaDto creado.
   * @throws {DatosError} Si la categoría ya existe.
   * @throws {NotFoundError} Si no se pudo crear la categoría.
  */
  createCategoria(data: CategoriaCreateDto): Promise<CategoriaDto>;

  /**
   * Actualiza una categoria existente segun su ID.
   * 
   * @param {number} id El id de la categoría a actualizar.
   * @param {CategoriaUpdateDto} data Nuevos datos de la categoría.
   * @returns {Promise<UpdateResult<CategoriaDto>>} Un objeto data con los datos de la categoria y un booleano que indica si se realizaron cambios o no.
   * @throws {NotFoundError} Si no se encuentra la categoría.
   * @throws {ServerError} Si no se pudo actualizar la categoría.
  */
  updateCategoria(id: number, data: CategoriaUpdateDto): Promise<UpdateResult<CategoriaDto>>;
};