import { Categoria } from "@/models/productos";

/**
 * @file iCategoriaFinder.service.ts
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
   * @param {number} id_Categoria El id de la categoría
   * @returns {Promise<Categoria>} Una promesa que resuelve con el objeto Categoria
   * @throws {NotFoundError} Si no se encuentra la categoría
  */
  getCategoriaId(id_Categoria: Categoria["id_categoria"]): Promise<Categoria>;
};

export default ICategoriaFinderService;