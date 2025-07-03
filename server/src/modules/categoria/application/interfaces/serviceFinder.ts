import { ResponseDto } from "@/modules/categoria/application";

/**
 * Define el contrato del servicio de la aplicacion para la busqueda de categorias.
 *
 * Esta interfaz declara las operaciones disponibles en la capa de la aplicacion para
 * obtener una categoría por su id, utilizando DTOs como puente entre la capa de presentacion
 * y la capa de dominio.
 *
 * @interface IFinderService
*/
interface IFinderService {
  /**
   * Recupera una categoría por su id.
   *
   * @param {number} id El id de la categoría
   * @returns {Promise<ResponseDto>} Una promesa que resuelve con el objeto ResponseDto
   * @throws {NotFoundError} Si no se encuentra la categoría
  */
  getCategoriaId(id: number): Promise<ResponseDto>;
};

export default IFinderService;