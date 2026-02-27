import { prisma } from "@productify/infrastructure/prisma/prisma.js";
import { ServerError } from "@productify/shared/index.js";

import type {
  Category,
  CategoryCreate,
  CategoryUpdate,
  ICategoryCrudRepository,
} from "../../domain/index.js";
import { CategoryPersistenceMapper } from "../mappers/categoryPersis.mapper.js";

/**
 * Repositorio para operaciones CRUD en categorías.
 * Usa Prisma ORM para interactuar con la tabla de categorías y mapea los resultados a objetos de dominio.
 */
export class CategoryCrudRepository implements ICategoryCrudRepository {
  public async getCategories(): Promise<Category[]> {
    try {
      const categories = await prisma.categories.findMany();

      return CategoryPersistenceMapper.toDomainList(categories);
    } catch (_error) {
      throw new ServerError("Error al obtener las categorias");
    }
  }

  public async createCategory(data: CategoryCreate): Promise<Category> {
    try {
      const categoryModel = CategoryPersistenceMapper.toPersistenceFromCreate(data);

      const category = await prisma.categories.create({ data: categoryModel });

      return CategoryPersistenceMapper.toDomain(category);
    } catch (_error) {
      throw new ServerError("Error al crear la categoria");
    }
  }

  public async updateCategory(id: number, data: CategoryUpdate): Promise<Category> {
    try {
      const categoryModel = CategoryPersistenceMapper.toPersistenceFromUpdate(data);

      await prisma.categories.update({
        where: { id: id },
        data: categoryModel,
      });

      const category = await prisma.categories.findUnique({
        where: { id: id },
      });

      if (!category)
        throw new ServerError("No se pudo recuperar la categoria tras la actualización");

      return CategoryPersistenceMapper.toDomain(category);
    } catch (_error) {
      throw new ServerError("Error al actualizar la categoria");
    }
  }
}
