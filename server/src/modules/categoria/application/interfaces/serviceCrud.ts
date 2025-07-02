import { 
  CategoriaResponseDto, 
  CategoriaCreateDto, 
  CategoriaUpdateDto 
} from "@/modules/categoria/application";

/**
 * @file serviceCrud.ts
 * @description Archivo que define la interface para la clase CategoriaCRUDService
 * @author Angel Noe Garcia Solorzano
 * @version 1.2
*/

/**
 * Define el contrato del servicio de la aplicacion para la gestion de las categorías.
 * 
 * Esta interfaz declara las operaciones disponibles en la capa de la aplicacion para
 * crear, obtener y actualizar registros de categoria, utilizando DTOs como puente
 * entre la capa de presentacion y la capa de dominio.
 *
 * @interface ICategoriaCRUDService
*/
interface ICategoriaCRUDService {
  /**
   * Recupera una lista de todas las categorías existentes.
   *
   * @returns {Promise<CategoriaResponseDto[]>} Una promesa que resuelve con una lista (array) de objetos CategoriaResponseDto.
   * @throws {NotFoundError} Si no se encuentran categorías.
  */
  getCategorias(): Promise<CategoriaResponseDto[]>;

  /**
   * Crea una nueva categoria con los datos recibidos.
   *
   * @param {CategoriaCreateDto} data Datos del nuevo registro.
   * @returns {Promise<CategoriaResponseDto>} Una promesa que resuelve con el objeto CategoriaResponseDto creado.
   * @throws {DatosError} Si la categoría ya existe.
   * @throws {NotFoundError} Si no se pudo crear la categoría.
  */
  createCategoria(data: CategoriaCreateDto): Promise<CategoriaResponseDto>;

  /**
   * Actualiza una categoria existente segun su ID.
   * 
   * @param {number} id El id de la categoría a actualizar.
   * @param {CategoriaUpdateDto} data Nuevos datos de la categoría.
   * @returns {Promise<CategoriaResponseDto>} Una promesa que resuelve con el objeto CategoriaResponseDto actualizado.
   * @throws {NotFoundError} Si no se encuentra la categoría.
   * @throws {DatosError} Si no hay cambios en los datos proporcionados.
   * @throws {NotFoundError} Si no se pudo actualizar la categoría.
  */
  updateCategoria(id: number, data: CategoriaUpdateDto): Promise<CategoriaResponseDto>;
};

export default ICategoriaCRUDService;