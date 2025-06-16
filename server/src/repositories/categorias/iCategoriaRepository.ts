import { Categoria } from "@/models/productos";
import { CategoriaType } from "@/schemas/productos";

/**
 * @file iCategoriaRepository.ts
 * @description Archivo que define la interface para la clase CategoriaRepository
 * 
 * Esta interfaz establece el contrato para las clases o servicios encargados de
 * realizar operaciones de recuperación de datos desde la fuente de datos (base de datos u otra),
 * limitándose a funciones de solo lectura. Es parte del módulo de categoria del sistema.
 * 
 * @author Angel Noe Garcia Solorzano
 * @version 1.0
*/

interface ICategoriaRepository {
  //* Metodos de solo lectura

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

  //* Metodos de creación, lectura, actualización y eliminación (CRUD)

  /**
   * Recupera una lista de todos los registros de la tabla Categoria
   * @method getCategorias
   * @returns {Promise<Categoria[]>} Una promesa que resuelve con una lista (array) de objetos Categoria
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @example
   * import CategoriaRepository from "@/repositories/productos/categoriaRepository";
   * 
   * const categorias = await CategoriaRepository.getCategorias();
   * console.log(categorias);
  */
  getCategorias(): Promise<Categoria[]>;

  /**
   * Crea un nuevo registro en la tabla Categoria
   * @method createCategoria
   * @param {CategoriaType} data Datos del nuevo registro
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @returns {Promise<Categoria>} Una promesa que resuelve con el objeto Categoria creado
   * @example
   * import CategoriaRepository from "@/repositories/productos/categoriaRepository";
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
   * Actualiza un registro de la tabla Categoria
   * @method updateCategoria
   * @param {Categoria} categoria El registro a actualizar
   * @param {CategoriaType} data  Los nuevos datos del registro
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto Categoria actualizado o null si falla
   * @example
   * import CategoriaRepository from "@/repositories/productos/categoriaRepository";
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

export default ICategoriaRepository;