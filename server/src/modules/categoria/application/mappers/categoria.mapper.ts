import { Categoria } from "@/modules/categoria/domain";
import { CategoriaResponseDto } from "@/modules/categoria/application";

/**
 * @class CategoriaApplicationMapper
 * @description Clase que mapea los objetos de dominio a objetos DTO
*/
class CategoriaApplicationMapper {
  /**
   * Transforma una entidad de dominio en un objeto DTO
   * @param domain Instancia de la entidad de dominio Categoria
   * @returns Un objeto DTO de CategoriaResponseDto
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
};

export default CategoriaApplicationMapper;