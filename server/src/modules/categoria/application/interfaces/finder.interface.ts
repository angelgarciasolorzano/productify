import { CategoriaResponseDto } from "../dtos/categoriaOutput.dto";

/**
 * Define el contrato del servicio de la aplicacion para la busqueda de categorias.
 *
 * Esta interfaz declara las operaciones disponibles en la capa de la aplicacion para
 * obtener una categoría por su id, utilizando DTOs como puente entre la capa de presentacion
 * y la capa de dominio.
 *
 * @interface ICategoriaFinderService
*/
interface ICategoriaFinderService {
  /**
   * Recupera una categoría por su id.
   *
   * @param {number} id El id de la categoría
   * @returns {Promise<CategoriaResponseDto>} Una promesa que resuelve con el objeto CategoriaResponseDto
   * @throws {NotFoundError} Si no se encuentra la categoría
  */
  getCategoriaId(id: number): Promise<CategoriaResponseDto>;
};

export default ICategoriaFinderService;