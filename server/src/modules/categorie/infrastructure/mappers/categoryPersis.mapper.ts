import type { Category, CategoryCreate, CategoryUpdate } from "../../domain/index.js";
import type { CategoryCreationModel, CategoryModel } from "../interface/category.model.js";

/**
 * Mapeador para convertir entre objetos de dominio y modelos de persistencia de categorías.
 */
export class CategoryPersistenceMapper {
  /**
   * Convierte un modelo de persistencia a objeto de dominio.
   *
   * @param model Modelo de la base de datos
   * @returns Objeto de dominio de categoría
   * @throws {Error} Si el modelo es nulo
   */
  public static toDomain(model: CategoryModel): Category {
    if (!model)
      throw new Error("No se puede mapear un modelo Categoria nulo a un objeto de dominio");

    return {
      id: model.id,
      name: model.name,
      description: model.description,
      status: model.status,
      createdAt: model.created_at,
      updatedAt: model.updated_at,
    };
  }

  /**
   * Convierte una lista de modelos a objetos de dominio.
   *
   * @param model Lista de modelos de la base de datos
   * @returns Lista de objetos de dominio
   * @throws {Error} Si la lista es nula
   */
  public static toDomainList(model: CategoryModel[]): Category[] {
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
  public static toPersistence(domain: Category): CategoryModel {
    if (!domain)
      throw new Error("No se puede mapear un objeto de dominio nulo a un modelo Categoria");

    return {
      id: domain.id,
      name: domain.name,
      description: domain.description,
      status: domain.status,
      created_at: domain.createdAt,
      updated_at: domain.updatedAt,
    };
  }

  /**
   * Convierte un objeto de creación de dominio a modelo de persistencia.
   *
   * @param domain Objeto de creación de dominio
   * @returns Modelo de creación para la base de datos
   * @throws {Error} Si el dominio es nulo
   */
  public static toPersistenceFromCreate(domain: CategoryCreate): CategoryCreationModel {
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
    domain: CategoryUpdate,
  ): Omit<CategoryModel, "id" | "created_at" | "updated_at"> {
    if (!domain)
      throw new Error("No se puede mapear un objeto de dominio nulo a un modelo Categoria");

    return {
      name: domain.name,
      description: domain.description,
      status: domain.status,
    };
  }
}
