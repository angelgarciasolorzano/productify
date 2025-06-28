import CategoriaResponseDto from "../dtos/response.dto";

/**
 * @file serviceFinder.ts
 * @description Archivo que define la interface para la clase CategoriaFinderService
 * @author Angel Noe Garcia Solorzano
 * @version 1.0
*/

/**
 * @interface ICategoriaFinderService
 * @description Interfaz para definir los métodos de la clase CategoriaFinderService
*/
interface ICategoriaFinderService {
  /**
   * @method getCategoriaId
   * @description Obtiene una categoría por su id.
   * @param {number} id El id de la categoría
   * @returns {Promise<CategoriaResponseDto>} Una promesa que resuelve con el objeto CategoriaResponseDto
   * @throws {NotFoundError} Si no se encuentra la categoría
  */
  getCategoriaId(id: number): Promise<CategoriaResponseDto>;
};

export default ICategoriaFinderService;