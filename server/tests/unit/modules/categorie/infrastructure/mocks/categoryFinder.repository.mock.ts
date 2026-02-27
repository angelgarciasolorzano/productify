import { vi } from "vitest";

import type { Category } from "@productify/modules/categorie/domain/category.js";
import type { ICategoryFinderRepository } from "@productify/modules/categorie/domain/interfaces/categoryRepositoryFinder.interface.js";

type CategoryFinderRepoMock = {
  getCategoryById: ReturnType<typeof vi.fn<(id: number) => Promise<Category | null>>>;
  getCategoryByName: ReturnType<typeof vi.fn<(name: string) => Promise<Category | null>>>;
};

/**
 * Crea un mock del repositorio de búsqueda de categorías.
 *
 * @param overrides Propiedades para sobrescribir el mock por defecto
 * @returns Mock del repositorio de búsqueda de categorías
 */
export function createCategoryFinderRepoMock(
  overrides: Partial<CategoryFinderRepoMock> = {},
): CategoryFinderRepoMock & ICategoryFinderRepository {
  const repo: CategoryFinderRepoMock & ICategoryFinderRepository = {
    getCategoryById: vi.fn<(id: number) => Promise<Category | null>>(),
    getCategoryByName: vi.fn<(name: string) => Promise<Category | null>>(),
  };

  Object.assign(repo, overrides);

  return repo;
}
