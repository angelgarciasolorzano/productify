import type { Categorie, CategorieCreate, CategorieUpdate } from "../../domain/index.js";
import type { CategorieCreationModel, CategorieModel } from "../interface/categorie.model.js";

/**
 * Mapeador para convertir entre objetos de dominio y modelos de persistencia de categorías.
 */
export class CategoriePersistenceMapper {
  /**
   * Convierte un modelo de persistencia a objeto de dominio.
   *
   * @param model Modelo de la base de datos
   * @returns Objeto de dominio de categoría
   * @throws {Error} Si el modelo es nulo
   */
  public static toDomain(model: CategorieModel): Categorie {
    if (!model)
      throw new Error("No se puede mapear un modelo Categoria nulo a un objeto de dominio");

    return {
      id: model.id,
      name: model.name,
      description: model.description,
      status: model.status,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    };
  }

  /**
   * Convierte una lista de modelos a objetos de dominio.
   *
   * @param model Lista de modelos de la base de datos
   * @returns Lista de objetos de dominio
   * @throws {Error} Si la lista es nula
   */
  public static toDomainList(model: CategorieModel[]): Categorie[] {
    if (!model)
      throw new Error(
        "No se puede mapear un array de modelos Categoria nulo a un array de dominio",
      );

    if (model.length === 0) return [];

    return model.map((categorieModel) => this.toDomain(categorieModel));
  }

  /**
   * Convierte un objeto de dominio a modelo de persistencia.
   *
   * @param domain Objeto de dominio de categoría
   * @returns Modelo para la base de datos
   * @throws {Error} Si el dominio es nulo
   */
  public static toPersistence(domain: Categorie): CategorieModel {
    if (!domain)
      throw new Error("No se puede mapear un objeto de dominio nulo a un modelo Categoria");

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
   * Convierte un objeto de creación de dominio a modelo de persistencia.
   *
   * @param domain Objeto de creación de dominio
   * @returns Modelo de creación para la base de datos
   * @throws {Error} Si el dominio es nulo
   */
  public static toPersistenceFromCreate(domain: CategorieCreate): CategorieCreationModel {
    if (!domain)
      throw new Error("No se puede mapear un objeto de dominio nulo a un modelo Categoria");

    return {
      name: domain.name,
      description: domain.description,
    };
  }

  /**
   * Convierte un objeto de actualización de dominio a modelo de persistencia.
   *
   * @param domain Objeto de actualización de dominio
   * @returns Modelo de actualización para la base de datos
   * @throws {Error} Si el dominio es nulo
   */
  public static toPersistenceFromUpdate(
    domain: CategorieUpdate,
  ): Omit<CategorieModel, "id" | "createdAt" | "updatedAt"> {
    if (!domain)
      throw new Error("No se puede mapear un objeto de dominio nulo a un modelo Categoria");

    return {
      name: domain.name,
      description: domain.description,
      status: domain.status,
    };
  }
}
