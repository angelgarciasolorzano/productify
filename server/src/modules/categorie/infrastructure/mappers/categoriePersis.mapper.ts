import type { Categorie, CategorieCreate, CategorieUpdate } from "../../domain/index.js";
import type { CategorieCreationModel, CategorieModel } from "../interface/categorie.model.js";

/**
 * Clase que mapea los objetos de dominio a los objetos de modelo y viceversa.
 *
 */
export class CategoriePersistenceMapper {
  /**
   * Metodo que mapea un objeto de modelo a un objeto de dominio.
   *
   * @param model Objeto de modelo de la tabla categorias.
   * @returns Objeto de la entidad de dominio de categoria.
   * @throws {Error} Si no se puede mapear el modelo a un objeto de dominio.
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
   * Metodo que mapea un arreglo de objetos de modelo a un arreglo de objetos de dominio.
   *
   * @param model Arreglo de modelo de la tabla categorias.
   * @returns Arreglo de objetos de dominio de categoria.
   * @throws {Error} Si no se puede mapear el modelo a un objeto de dominio.
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
   * Metodo que mapea un objeto de dominio a un objeto de modelo.
   *
   * @param domain Objeto de dominio de categoria.
   * @returns Objeto de modelo de la tabla categorias.
   * @throws {Error} Si no se puede mapear el modelo a un objeto de dominio.
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
   * Metodo que mapea un objeto de dominio de creacion a un objeto de modelo.
   *
   * @param domain Objeto de dominio de creacion de categoria.
   * @returns Objeto de modelo de la tabla categorias.
   * @throws {Error} Si no se puede mapear el objeto de dominio a un objeto de modelo.
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
   * Metodo que mapea un objeto de dominio de actualizacion a un objeto de modelo.
   *
   * @param domain Objeto de dominio de actualizacion de categoria.
   * @returns Objeto de modelo de la tabla categorias.
   * @throws {Error} Si no se puede mapear el objeto de dominio a un objeto de modelo.
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
