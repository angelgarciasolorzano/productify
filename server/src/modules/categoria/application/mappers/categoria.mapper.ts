import { Categoria } from "@/modules/categoria/domain";
import {
  CategoriaResponseDto, CreateCategoriaDto, UpdateCategoriaDto 
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
   * Transforma una entidad de dominio en un DTO de tipo CategoriaResponseDto.
   *
   * @param domain Instancia de la entidad de dominio Categoria.
   * @returns Un objeto DTO de CategoriaResponseDto.
  */
  public static toResponseDto(domain: Categoria): CategoriaResponseDto {
    return {
      id: domain.id,
      nombre: domain.nombre,
      descripcion: domain.descripcion,
      estado: domain.estado,
      fechaCreacion: domain.createdAt,
      fechaModificacion: domain.updatedAt
    }
  };

  /**
   * Transforma un arreglo de objetos del dominio en un arreglo de objetos DTO.
   * 
   * @param {Categoria[]} categorias Arreglo de objetos de dominio categoria.
   * @returns Un arreglo de objetos DTO de CategoriaResponseDto.
   * @throws {Error} Si el arreglo de dominio es nulo o undefined.
  */
  public static toDtoList(categorias: Categoria[]): CategoriaResponseDto[] {
    if (!categorias) throw new Error("No se puede mapear un array de dominio nulo a un array de DTO");

    if (categorias.length === 0) return [];

    return categorias.map(categoria => this.toResponseDto(categoria));
  };

  /**
   * Transforma un objeto de DTO de creacion en un objeto de dominio.
   *
   * @param {CreateCategoriaDto} dto Objeto recibido desde el controlador.
   * @returns Un objeto del dominio Categoria.
   * @throws {Error} Si el objeto DTO es nulo o undefined.
  */
  public static fromCreateDtoToDomain(dto: CreateCategoriaDto): Categoria {
    if (!dto) throw new Error("No se puede mapear un objeto DTO nulo a un objeto de dominio");

    return {
      id: 0,
      nombre: dto.nombreCategoria,
      descripcion: dto.descripcionCategoria,
      estado: "activo",
      createdAt: new Date(),
      updatedAt: new Date()
    };
  };

  /**
   * Transforma un objeto de DTO de actualizacion en un objeto de dominio.
   *
   * @param {Categoria} domain Objeto del dominio existente.
   * @param {UpdateCategoriaDto} dto Objeto recibido desde el controlador
   * @returns Un objeto del dominio Categoria
   * @throws {Error} Si el objeto DTO es nulo o undefined.
  */
  public static fromUpdateDtoToDomain(domain: Categoria, dto: UpdateCategoriaDto): Categoria {
    if (!domain || !dto) throw new Error("No se puede mapear un objeto DTO nulo a un objeto de dominio");

    const updatedDomain = {...domain};

    if (dto.nombre) updatedDomain.nombre = dto.nombre;
    if (dto.descripcion) updatedDomain.descripcion = dto.descripcion;
    if (dto.estado) updatedDomain.estado = dto.estado;

    return updatedDomain;
  };
};

export default CategoriaApplicationMapper;