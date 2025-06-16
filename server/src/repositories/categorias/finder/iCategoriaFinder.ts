import { Categoria } from "@/models/productos";

/**
 * @file iCategoriaFinder.ts
 * @description Archivo que define la interface para la clase CategoriaFinder
 * 
 * Esta interfaz establece el contrato para las clases o servicios encargados de
 * realizar operaciones de recuperación de datos desde la fuente de datos (base de datos u otra),
 * limitándose a funciones de solo lectura. Es parte del módulo de categoria del sistema.
 * 
 * @author Angel Noe Garcia Solorzano
 * @version 1.0
*/

/**
 * @interface ICategoriaFinder
 * @description Define las operaciones de solo lectura y busqueda para las categorias
*/
interface ICategoriaFinder {
  /**
   * Recupera un registro de la tabla Categoria por su id
   * @method getCategoriaId
   * @param {Categoria["id_categoria"]} id_Categoria El id de la categoria
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto Categoria o null si no se encuentra
   * @example
   * import CategoriaRepository from "@/repositories/productos/categoriaRepository";
   * 
   * const categoria = await CategoriaRepository.getCategoriaId(1);
   * if (categoria) console.log(categoria.nombre_categoria);
  */
  getCategoriaId(id_Categoria: Categoria["id_categoria"]): Promise<Categoria | null>;

  /**
   * Recupera un registro de la tabla Categoria por su nombre
   * @method getCategoriaNombre
   * @param {Categoria["nombre_categoria"]} nombre_categoria El nombre de la categoria
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto Categoria o null si no se encuentra
   * @example
   * import CategoriaRepository from "@/repositories/productos/categoriaRepository";
   * 
   * const categoria = await CategoriaRepository.getCategoriaNombre("Frutas");
   * if (categoria) console.log(categoria.nombre_categoria);
  */
  getCategoriaNombre(nombre_categoria: Categoria["nombre_categoria"]): Promise<Categoria | null>;
};

export default ICategoriaFinder;