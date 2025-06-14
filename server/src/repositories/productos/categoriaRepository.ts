import { Categoria } from "@/models/productos";
import { CategoriaType } from "@/schemas/productos"
import { ServerError } from "@/errors";

/**
 * @interface ICategoriaRepository
 * @description Interfaz para definir los métodos de la clase CategoriaRepository
 */
interface ICategoriaRepository {
  getCategorias(): Promise<Categoria[]>;
  getCategoriaId(id_Categoria: Categoria["id_categoria"]): Promise<Categoria | null>;
  getCategoriaNombre(nombre_categoria: Categoria["nombre_categoria"]): Promise<Categoria | null>;
  createCategoria(data: CategoriaType): Promise<Categoria>;
  updateCategoria(categoria: Categoria, data: CategoriaType): Promise<Categoria | null>;
};

/**
 * Clase que encapsula la lógica de la base de datos para el modelo Categoria
 * @class CategoriaRepository
 * @description Clase para gestionar las operaciones CRUD de la tabla Categoria
 * @implements ICategoriaRepository
 */
class CategoriaRepository implements ICategoriaRepository {
  /**
   * Recupera una lista de todos los registros de la tabla Categoria
   * @function getCategorias
   * @returns {Promise<Categoria[]>} Una promesa que resuelve con una lista (array) de objetos Categoria
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @example
   * import CategoriaRepository from "@/repositories/productos/categoriaRepository";
   * 
   * const categorias = await CategoriaRepository.getCategorias();
   * console.log(categorias);
   */
  public async getCategorias(): Promise<Categoria[]> {
    try {
      return await Categoria.findAll();
    } catch (error) {
      throw new ServerError("Error al obtener las categorias");
    }
  };

  /**
   * Recupera un registro de la tabla Categoria por su id
   * @function getCategoriaId
   * @param {Categoria["id_categoria"]} id_Categoria El id de la categoria
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto Categoria o null si no se encuentra
   * @example
   * import CategoriaRepository from "@/repositories/productos/categoriaRepository";
   * 
   * const categoria = await CategoriaRepository.getCategoriaId(1);
   * if (categoria) console.log(categoria.nombre_categoria);
   */
  public async getCategoriaId(id_Categoria: Categoria["id_categoria"]): Promise<Categoria | null> {
    try {
      return await Categoria.findByPk(id_Categoria);
    } catch (error) {
      throw new ServerError("Error al obtener la categoria");
    }
  };

  /**
   * Recupera un registro de la tabla Categoria por su nombre
   * @function getCategoriaNombre
   * @param {Categoria["nombre_categoria"]} nombre_categoria El nombre de la categoria
   * @throws {ServerError} Si la consulta a la base de datos falla
   * @returns {Promise<Categoria | null>} Una promesa que resuelve con el objeto Categoria o null si no se encuentra
   * @example
   * import CategoriaRepository from "@/repositories/productos/categoriaRepository";
   * 
   * const categoria = await CategoriaRepository.getCategoriaNombre("Frutas");
   * if (categoria) console.log(categoria.nombre_categoria);
   */
  public async getCategoriaNombre(nombre_categoria: Categoria["nombre_categoria"]): Promise<Categoria | null> {
    try {
      return await Categoria.findOne({ where: { nombre_categoria } });
    } catch (error) {
      throw new ServerError("Error al obtener el nombre de la categoria");
    }
  };

  /**
   * Crea un nuevo registro en la tabla Categoria
   * @function createCategoria
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
  public async createCategoria(data: CategoriaType): Promise<Categoria> {
    try {
      return await Categoria.create(data);
    } catch (error) {
      throw new ServerError("Error al crear la categoria");
    }
  };

  /**
   * Actualiza un registro de la tabla Categoria
   * @function updateCategoria
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
  public async updateCategoria(categoria: Categoria, data: CategoriaType): Promise<Categoria | null> {
    try {
      return await categoria.update(data);
    } catch (error) {
      throw new ServerError("Error al actualizar la categoria");
    }
  };
};

export default new CategoriaRepository();