import { CategoryFinderService } from "@productify/categorie/application/services/categoryFinder.service.js";
import { NotFoundError } from "@productify/shared/errors/errors.js";

import { createCategoryFinderRepoMock } from "../infrastructure/mocks/categoryFinder.repository.mock.js";

describe("CategoryFinderService", () => {
  it("throws NotFoundError if category does not exist", async () => {
    const repo = createCategoryFinderRepoMock();

    repo.getCategoryById.mockResolvedValue(null);

    const service = new CategoryFinderService(repo);

    await expect(service.getCategoryById(123)).rejects.toBeInstanceOf(NotFoundError);
    await expect(service.getCategoryById(123)).rejects.toThrow("No se encontro la categoria");

    expect(repo.getCategoryById).toHaveBeenCalledTimes(2);
    expect(repo.getCategoryById).toHaveBeenCalledWith(123);
  });

  it("returns the category DTO if it exists", async () => {
    const now = new Date();

    const repo = createCategoryFinderRepoMock();

    repo.getCategoryById.mockResolvedValue({
      id: 1,
      name: "Bebidas",
      description: "Cat de prueba",
      status: "activo",
      createdAt: now,
      updatedAt: now,
    });

    const service = new CategoryFinderService(repo);

    await expect(service.getCategoryById(1)).resolves.toEqual({
      id: 1,
      name: "Bebidas",
      description: "Cat de prueba",
      status: "activo",
      createdAt: now,
      updatedAt: now,
    });

    expect(repo.getCategoryById).toHaveBeenCalledWith(1);
  });
});
