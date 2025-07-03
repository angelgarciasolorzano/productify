import { 
  ResponseDto, 
  CreateDto, 
  UpdateDto 
} from "@/modules/categoria/application";

/**
 * Define el contrato del servicio de la aplicacion para la gestion de las categorías.
 * 
 * Esta interfaz declara las operaciones disponibles en la capa de la aplicacion para
 * crear, obtener y actualizar registros de categoria, utilizando DTOs como puente
 * entre la capa de presentacion y la capa de dominio.
 *
 * @interface ICrudService
*/
interface ICrudService {
  /**
   * Recupera una lista de todas las categorías existentes.
   *
   * @returns {Promise<ResponseDto[]>} Una promesa que resuelve con una lista (array) de objetos ResponseDto.
   * @throws {NotFoundError} Si no se encuentran categorías.
  */
  getCategorias(): Promise<ResponseDto[]>;

  /**
   * Crea una nueva categoria con los datos recibidos.
   *
   * @param {CreateDto} data Datos del nuevo registro.
   * @returns {Promise<ResponseDto>} Una promesa que resuelve con el objeto ResponseDto creado.
   * @throws {DatosError} Si la categoría ya existe.
   * @throws {NotFoundError} Si no se pudo crear la categoría.
  */
  createCategoria(data: CreateDto): Promise<ResponseDto>;

  /**
   * Actualiza una categoria existente segun su ID.
   * 
   * @param {number} id El id de la categoría a actualizar.
   * @param {UpdateDto} data Nuevos datos de la categoría.
   * @returns {Promise<ResponseDto>} Una promesa que resuelve con el objeto ResponseDto actualizado.
   * @throws {NotFoundError} Si no se encuentra la categoría.
   * @throws {DatosError} Si no hay cambios en los datos proporcionados.
   * @throws {NotFoundError} Si no se pudo actualizar la categoría.
  */
  updateCategoria(id: number, data: UpdateDto): Promise<ResponseDto>;
};

export default ICrudService;