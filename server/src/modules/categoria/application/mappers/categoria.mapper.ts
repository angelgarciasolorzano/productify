import { 
  CategoriaDomain, CategoriaCreateDomain, CategoriaUpdateDomain
} from "@/modules/categoria/domain";
import {
  CategoriaResponseDto, CategoriaCreateDto, CategoriaUpdateDto 
} from "@/modules/categoria/application";

/**
 * Clase encargada de mapear los objetos de dominio a objetos DTO y viceversa en la capa de la aplicacion.
 * 
 * Este mapper facilita la transformacion de datos entre la representacion del negocio (entidad de dominio)
 * y la representacion que expone la API (DTO).
 *
 * @class CategoriaApplicationMapper
*/
class CategoriaApplicationMapper {
  /**
   * Transforma un objeto de dominio en un objeto DTO de tipo CategoriaResponseDto.
   *
   * @param {CategoriaDomain} domain Objeto de dominio de Categoria.
   * @returns {CategoriaResponseDto} Un objeto DTO de CategoriaResponseDto.
  */
  public static toResponseDto(domain: CategoriaDomain): CategoriaResponseDto {
    return {
      codigo: domain.id,
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
   * @param {CategoriaDomain[]} domain Arreglo de objetos de dominio categoria.
   * @returns {CategoriaResponseDto[]} Un arreglo de objetos DTO de CategoriaResponseDto.
   * @throws {Error} Si el arreglo de dominio es nulo o undefined.
  */
  public static toDtoList(domain: CategoriaDomain[]): CategoriaResponseDto[] {
    if (!domain) throw new Error("No se puede mapear un array de dominio nulo a un array de DTO");

    if (domain.length === 0) return [];

    return domain.map(categoria => this.toResponseDto(categoria));
  };

  /**
   * Transforma un objeto de DTO de creacion en un objeto de dominio de creacion.
   *
   * @param {CategoriaCreateDto} dto Objeto recibido desde el controlador.
   * @returns {CategoriaCreateDomain} Un objeto del dominio CategoriaCreateDomain.
   * @throws {Error} Si el objeto DTO es nulo o undefined.
  */
  public static fromCreateDtoToDomain(dto: CategoriaCreateDto): CategoriaCreateDomain {
    if (!dto) throw new Error("No se puede mapear un objeto DTO nulo a un objeto de dominio");

    return {
      nombre: dto.nombreCategoria,
      descripcion: dto.descripcionCategoria
    };
  };

  /**
   * Transforma un objeto de DTO de actualizacion en un objeto de dominio de actualizacion.
   *
   * @param {CategoriaUpdateDto} dto Objeto recibido desde el controlador.
   * @returns {CategoriaUpdateDomain} Un objeto del dominio CategoriaUpdateDomain.
   * @throws {Error} Si el objeto DTO es nulo o undefined.
  */
  public static fromUpdateDtoToDomain(dto: CategoriaUpdateDto): CategoriaUpdateDomain {
    if (!dto) throw new Error("No se puede mapear un objeto DTO nulo a un objeto de dominio");

    return {
      nombre: dto.nombreCategoria,
      descripcion: dto.descripcionCategoria,
      estado: dto.estadoCategoria
    };
  };
};

export default CategoriaApplicationMapper;