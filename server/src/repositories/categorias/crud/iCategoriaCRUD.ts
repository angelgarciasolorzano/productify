import { Categoria } from "@/models/productos";
import { CategoriaType } from "@/schemas/productos";

/**
 * @file iCategoriaCRUD.ts
 * @description Archivo que define la interface para la clase CategoriaCRUDRepository
 * @author Angel Noe Garcia Solorzano
 * @version 1.0
*/

/**
 * @interface ICategoriaCRUD
 * @description Interfaz para definir los métodos de la clase CategoriaCRUDRepository
*/
interface ICategoriaCRUDRepository {
  /**
   * @method getCategorias
   * @description Recupera una lista de todos los registros de la tabla Categoria
   * @returns {Promise<Categoria[]>} Una promesa que resuelve con una lista (array) de objetos Categoria
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @example
   * import CategoriaRepository from "@/repositories/categorias";
   * 
   * const categorias = await CategoriaRepository.getCategorias();
   * console.log(categorias);
  */
  getCategorias(): Promise<Categoria[]>;

  /**
   * @method createCategoria
   * @description Crea un nuevo registro en la tabla Categoria
   * @param {CategoriaType} data Datos del nuevo registro
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @returns {Promise<Categoria>} Una promesa que resuelve con el objeto Categoria creado
   * @example
   * import CategoriaRepository from "@/repositories/categorias";
   * 
   * const categoria = await CategoriaRepository.createCategoria({
   *   nombre_categoria: "Nueva categoria",
   *   descripcion_categoria: "Descripción de la nueva categoria",
   *   estado_categoria: true //Opcional, por defecto es true
   * });
   * 
   * console.log(categoria);
  */
  createCategoria(data: CategoriaType): Promise<Categoria>;

  /**
   * @method updateCategoria
   * @description Actualiza un registro de la tabla Categoria
   * @param {Categoria} categoria El registro a actualizar
   * @param {CategoriaType} data  Los nuevos datos del registro
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto Categoria actualizado o null si falla
   * @example
   * import CategoriaRepository from "@/repositories/categorias";
   * 
   * const categoria = await CategoriaRepository.getCategoriaId(1);
   * 
   * if (categoria) {
   *   const data: CategoriaType = {
   *     nombre_categoria: "Nuevo nombre",
   *     descripcion_categoria: "Nueva descripción",
   *     estado_categoria: false
   *   };
   * 
   *   const categoriaActualizada = await CategoriaRepository.updateCategoria(categoria, data);
   *   console.log(categoriaActualizada);
   * };
  */
  updateCategoria(categoria: Categoria, data: CategoriaType): Promise<Categoria>;
};

export default ICategoriaCRUDRepository;