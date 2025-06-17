import { Categoria } from "@/models/productos";
import { CategoriaType } from "@/schemas/productos";

/**
 * @file iCategoriaCRUD.service.ts
 * @description Archivo que define la interface para la clase CategoriaCRUDService
 * @author Angel Noe Garcia Solorzano
 * @version 1.0
*/

/**
 * @interface ICategoriaCRUDService
 * @description Interfaz para definir los métodos de la clase CategoriaCRUDService
*/
interface ICategoriaCRUDService {
  /**
   * @method getCategorias
   * @description Obtiene una lista de todas las categorías existentes.
   * @returns {Promise<Categoria[]>} Una promesa que resuelve con una lista (array) de objetos Categoria
   * @throws {NotFoundError} Si no se encuentran categorías
  */
  getCategorias(): Promise<Categoria[]>;

  /**
   * @method createCategoria
   * @description Crea una nueva categoría.
   * @param {CategoriaType} data Datos del nuevo registro
   * @returns {Promise<Categoria>} Una promesa que resuelve con el objeto Categoria creado
   * @throws {NotFoundError} Si no se pudo crear la categoría
  */
  createCategoria(data: CategoriaType): Promise<Categoria>;

  /**
   * @method updateCategoria
   * @description Actualiza una categoría existente.
   * @param {number} id_Categoria El id de la categoría
   * @param {CategoriaType} data Datos del registro a actualizar
   * @returns {Promise<Categoria>} Una promesa que resuelve con el objeto Categoria actualizado
   * @throws {NotFoundError} Si no se encuentra la categoría
  */
  updateCategoria(id_Categoria: Categoria["id_categoria"], data: CategoriaType): Promise<Categoria>;
};

export default ICategoriaCRUDService;