import { 
  CategoriaResponseDto, CreateCategoriaDto, UpdateCategoriaDto 
} from "@/modules/categoria/application";

/**
 * @file serviceCrud.ts
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
   * @returns {Promise<CategoriaResponseDto[]>} Una promesa que resuelve con una lista (array) de objetos CategoriaResponseDto
   * @throws {NotFoundError} Si no se encuentran categorías
  */
  getCategorias(): Promise<CategoriaResponseDto[]>;

  /**
   * @method createCategoria
   * @description Crea una nueva categoría.
   * @param {CreateCategoriaDto} data Datos del nuevo registro
   * @returns {Promise<CategoriaResponseDto>} Una promesa que resuelve con el objeto CategoriaResponseDto creado
   * @throws {NotFoundError} Si no se pudo crear la categoría
  */
  createCategoria(data: CreateCategoriaDto): Promise<CategoriaResponseDto>;

  /**
   * @method updateCategoria
   * @description Actualiza una categoría existente.
   * @param {number} id El id de la categoría
   * @param {UpdateCategoriaDto} data Datos del registro a actualizar
   * @returns {Promise<CategoriaResponseDto>} Una promesa que resuelve con el objeto CategoriaResponseDto actualizado
   * @throws {NotFoundError} Si no se encuentra la categoría
  */
  updateCategoria(id: number, data: UpdateCategoriaDto): Promise<CategoriaResponseDto>;
};

export default ICategoriaCRUDService;