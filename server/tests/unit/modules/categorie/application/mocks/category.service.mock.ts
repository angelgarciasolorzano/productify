import { vi } from "vitest";

import type {
  CategoryCreateDTO,
  CategoryDTO,
  CategoryUpdateDTO,
  ICategoryService,
} from "@productify/categorie/application/index.js";
import type { UpdateResult } from "@productify/shared/index.js";

type CategoryServiceMock = {
  getCategories: ReturnType<typeof vi.fn<() => Promise<CategoryDTO[]>>>;
  getCategoryById: ReturnType<typeof vi.fn<(id: number) => Promise<CategoryDTO>>>;
  createCategory: ReturnType<typeof vi.fn<(data: CategoryCreateDTO) => Promise<CategoryDTO>>>;
  updateCategory: ReturnType<
    typeof vi.fn<(id: number, data: CategoryUpdateDTO) => Promise<UpdateResult<CategoryDTO>>>
  >;
};

/**
 * Devuelve un mock tipado de ICategoryService listo para usar en tests unitarios.
 *
 * @param overrides Permite personalizar métodos del mock para cada test.
 * @returns Mock de ICategoryService con spies de Vitest.
 */
export function createCategoryServiceMock(
  overrides: Partial<CategoryServiceMock> = {},
): CategoryServiceMock & ICategoryService {
  const service: CategoryServiceMock & ICategoryService = {
    getCategories: vi.fn<() => Promise<CategoryDTO[]>>(),
    getCategoryById: vi.fn<(id: number) => Promise<CategoryDTO>>(),
    createCategory: vi.fn<(data: CategoryCreateDTO) => Promise<CategoryDTO>>(),
    updateCategory:
      vi.fn<(id: number, data: CategoryUpdateDTO) => Promise<UpdateResult<CategoryDTO>>>(),
  };

  Object.assign(service, overrides);

  return service;
}
