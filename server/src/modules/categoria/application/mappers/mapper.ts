import { Domain, CreateDomain, UpdateDomain } from "@/modules/categoria/domain";
import { ResponseDto, CreateDto, UpdateDto } from "@/modules/categoria/application";

/**
 * Clase encargada de mapear los objetos de dominio a objetos DTO y viceversa en la capa de la aplicacion.
 * 
 * Este mapper facilita la transformacion de datos entre la representacion del negocio (entidad de dominio)
 * y la representacion que expone la API (DTO).
 *
 * @class Mapper
*/
class Mapper {
  /**
   * Transforma un objeto de dominio en un objeto DTO de tipo ResponseDto.
   *
   * @param {Domain} domain Objeto de dominio.
   * @returns {ResponseDto} Un objeto DTO de ResponseDto.
  */
  public static toResponseDto(domain: Domain): ResponseDto {
    return {
      id: domain.id,
      nombre: domain.nombre,
      descripcion: domain.descripcion,
      estado: domain.estado,
      fechaCreacion: domain.createdAt,
      fechaModificacion: domain.updatedAt
    };
  };

  /**
   * Transforma un arreglo de objetos del dominio en un arreglo de objetos DTO.
   * 
   * @param {Domain[]} domain Arreglo de objetos de dominio.
   * @returns {ResponseDto[]} Un arreglo de objetos DTO de ResponseDto.
   * @throws {Error} Si el arreglo de dominio es nulo o undefined.
  */
  public static toListDto(domain: Domain[]): ResponseDto[] {
    if (!domain) throw new Error("No se puede mapear un array de dominio nulo a un array de DTO");

    if (domain.length === 0) return [];

    return domain.map(categoria => this.toResponseDto(categoria));
  };

  /**
   * Transforma un objeto de DTO de creacion en un objeto de dominio de creacion.
   *
   * @param {CreateDto} dto Objeto recibido desde el controlador.
   * @returns {CreateDomain} Un objeto del dominio CreateDomain.
   * @throws {Error} Si el objeto DTO es nulo o undefined.
  */
  public static fromCreateDtoToDomain(dto: CreateDto): CreateDomain {
    if (!dto) throw new Error("No se puede mapear un objeto DTO nulo a un objeto de dominio");

    return {
      nombre: dto.nombreCategoria,
      descripcion: dto.descripcionCategoria
    };
  };

  /**
   * Transforma un objeto de DTO de actualizacion en un objeto de dominio de actualizacion.
   *
   * @param {UpdateDto} dto Objeto recibido desde el controlador.
   * @returns {UpdateDomain} Un objeto del dominio UpdateDomain.
   * @throws {Error} Si el objeto DTO es nulo o undefined.
  */
  public static fromUpdateDtoToDomain(dto: UpdateDto): UpdateDomain {
    if (!dto) throw new Error("No se puede mapear un objeto DTO nulo a un objeto de dominio");

    return {
      nombre: dto.nombreCategoria,
      descripcion: dto.descripcionCategoria,
      estado: dto.estadoCategoria
    };
  };
};

export default Mapper;