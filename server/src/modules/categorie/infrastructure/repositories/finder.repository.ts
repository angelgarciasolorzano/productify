import { prisma } from "@productify/infrastructure/index.js";
import { ServerError } from "@productify/shared/index.js";

import type { Category, ICategoryFinderRepository } from "../../domain/index.js";
import { CategoryPersistenceMapper } from "../mappers/categoryPersis.mapper.js";

/**
 * Repositorio para buscar categorías en la base de datos.
 * Usa Prisma ORM para consultar la tabla de categorías y mapea los resultados a objetos de dominio.
 */
export class CategoryFinderRepository implements ICategoryFinderRepository {
  public async getCategoryById(id: number): Promise<Category | null> {
    try {
      const categoryModel = await prisma.categories.findFirst({
        where: { id: id },
      });

      return categoryModel ? CategoryPersistenceMapper.toDomain(categoryModel) : null;
    } catch (_error) {
      throw new ServerError("Error al obtener la categoria");
    }
  }

  public async getCategoryName(name: string): Promise<Category | null> {
    try {
      const categoryModel = await prisma.categories.findFirst({
        where: { name: name },
      });

      return categoryModel ? CategoryPersistenceMapper.toDomain(categoryModel) : null;
    } catch (_error) {
      throw new ServerError("Error al obtener el nombre de la categoria");
    }
  }
}
