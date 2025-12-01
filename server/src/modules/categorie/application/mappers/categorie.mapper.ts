import type { Categorie, CategorieCreate, CategorieUpdate } from "../../domain/index.js";
import type { CategorieCreateDTO, CategorieDTO, CategorieUpdateDTO } from "../dtos/index.js";

/**
 * Mapper para categorías.
 *
 * Convierte entre objetos de dominio y DTOs.
 */
export class CategorieMapper {
  /**
   * Convierte dominio a DTO.
   *
   * @param domain Objeto de dominio.
   * @returns DTO correspondiente.
   */
  public static toDataDTO(domain: Categorie): CategorieDTO {
    return {
      id: domain.id,
      name: domain.name,
      description: domain.description,
      status: domain.status,
      createdAt: domain.createdAt,
      updatedAt: domain.updatedAt,
    };
  }

  /**
   * Convierte lista de dominio a lista de DTOs.
   *
   * @param domain Lista de objetos de dominio.
   * @returns Lista de DTOs.
   * @throws {Error} Si la lista es nula.
   */
  public static toDataListDTO(domain: Categorie[]): CategorieDTO[] {
    if (!domain) throw new Error("No se puede mapear un array de dominio nulo a un array de DTO");

    if (domain.length === 0) return [];

    return domain.map((categoria) => this.toDataDTO(categoria));
  }

  /**
   * Convierte DTO de creación a dominio.
   *
   * @param dto DTO de creación.
   * @returns Objeto de dominio para creación.
   * @throws {Error} Si el DTO es nulo.
   */
  public static fromCreateDTOtoDomain(dto: CategorieCreateDTO): CategorieCreate {
    if (!dto) throw new Error("No se puede mapear un objeto DTO nulo a un objeto de dominio");

    return {
      name: dto.name,
      description: dto.description,
    };
  }

  /**
   * Convierte DTO de actualización a dominio.
   *
   * @param dto DTO de actualización.
   * @returns Objeto de dominio para actualización.
   * @throws {Error} Si el DTO es nulo.
   */
  public static fromUpdateDTOtoDomain(dto: CategorieUpdateDTO): CategorieUpdate {
    if (!dto) throw new Error("No se puede mapear un objeto DTO nulo a un objeto de dominio");

    return {
      name: dto.name,
      description: dto.description,
      status: dto.status,
    };
  }
}
