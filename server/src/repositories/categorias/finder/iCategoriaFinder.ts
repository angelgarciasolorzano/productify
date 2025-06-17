import { Categoria } from "@/models/productos";

/**
 * @file iCategoriaFinder.ts
 * @description Archivo que define la interface para la clase CategoriaFinderRepository
 * @author Angel Noe Garcia Solorzano
 * @version 1.0
*/

/**
 * @interface ICategoriaFinder
 * @description Interfaz para definir los métodos de la clase CategoriaFinderRepository
*/
interface ICategoriaFinderRepository {
  /**
   * @method getCategoriaId
   * @description Recupera un registro de la tabla Categoria por su id
   * @param {Categoria["id_categoria"]} id_Categoria El id de la categoria
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto Categoria o null si no se encuentra
   * @example
   * import { CategoriaRepository } from "@/repositories/categorias";
   * 
   * const categoria = await CategoriaRepository.getCategoriaId(1);
   * if (categoria) console.log(categoria.nombre_categoria);
  */
  getCategoriaId(id_Categoria: Categoria["id_categoria"]): Promise<Categoria | null>;

  /**
   * @method getCategoriaNombre
   * @description Recupera un registro de la tabla Categoria por su nombre
   * @param {Categoria["nombre_categoria"]} nombre_categoria El nombre de la categoria
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto Categoria o null si no se encuentra
   * @example
   * import { CategoriaRepository } from "@/repositories/categorias";
   * 
   * const categoria = await CategoriaRepository.getCategoriaNombre("Frutas");
   * if (categoria) console.log(categoria.nombre_categoria);
  */
  getCategoriaNombre(nombre_categoria: Categoria["nombre_categoria"]): Promise<Categoria | null>;
};

export default ICategoriaFinderRepository;