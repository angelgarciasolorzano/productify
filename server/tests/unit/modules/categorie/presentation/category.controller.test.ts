import {
  getLastInstanceResponseSuccessMock,
  responseSuccessMock,
} from "@tests/unit/shared/index.js";
import type { Response } from "express";
import { vi } from "vitest";

import type { CategoryDTO } from "@productify/categorie/application/index.js";
import { CategoryController } from "@productify/categorie/presentation/index.js";
import type {
  PublicRequest,
  PublicRequestWithBody,
} from "@productify/shared/types/request.type.js";
import { ResponseSuccess } from "@productify/shared/utils/response/responseSuccess.js";

import { createCategoryServiceMock } from "../application/mocks/category.service.mock.js";

vi.mock("@productify/shared/utils/response/responseSuccess.js", () => ({
  ResponseSuccess: vi.fn().mockImplementation(function (this: unknown) {
    Object.assign(this as object, responseSuccessMock());
  }),
}));

describe("CategoryController", () => {
  it("getCategories: delegates to service and responds with success", async () => {
    const service = createCategoryServiceMock();
    const controller = new CategoryController(service);

    const categories: CategoryDTO[] = [
      {
        id: 1,
        name: "Bebidas",
        description: null,
        status: "activo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    service.getCategories.mockResolvedValue(categories);

    const req = {} as PublicRequest;
    const res = {} as Response;

    await controller.getCategories(req, res);

    expect(service.getCategories).toHaveBeenCalledTimes(1);

    const responseHandler = getLastInstanceResponseSuccessMock(ResponseSuccess);

    expect(responseHandler.sendSuccess).toHaveBeenCalledTimes(1);
    expect(responseHandler.sendSuccess).toHaveBeenCalledWith(
      categories,
      "Lista de categorias obtenida correctamente",
    );
  });

  it("getCategoryById: converts params.id to number and responds with success", async () => {
    const service = createCategoryServiceMock();
    const controller = new CategoryController(service);

    const now = new Date();

    service.getCategoryById.mockResolvedValue({
      id: 10,
      name: "Snacks",
      description: "test",
      status: "activo",
      createdAt: now,
      updatedAt: now,
    });

    const req = { params: { id: "10" } } as unknown as PublicRequestWithBody<never, { id: string }>;
    const res = {} as Response;

    await controller.getCategoryById(req, res);

    expect(service.getCategoryById).toHaveBeenCalledWith(10);

    const responseHandler = getLastInstanceResponseSuccessMock(ResponseSuccess);

    expect(responseHandler.sendSuccess).toHaveBeenCalledWith(
      {
        id: 10,
        name: "Snacks",
        description: "test",
        status: "activo",
        createdAt: now,
        updatedAt: now,
      },
      "Categoría obtenida correctamente",
    );
  });

  it("createCategory: responds with created on success", async () => {
    const service = createCategoryServiceMock();
    const controller = new CategoryController(service);

    const now = new Date();

    service.createCategory.mockResolvedValue({
      id: 1,
      name: "Bebidas",
      description: null,
      status: "activo",
      createdAt: now,
      updatedAt: now,
    });

    const req = {
      body: { name: "Bebidas", description: null },
    } as unknown as PublicRequestWithBody<{ name: string; description: null }, never>;

    const res = {} as Response;

    await controller.createCategory(req, res);

    expect(service.createCategory).toHaveBeenCalledWith({ name: "Bebidas", description: null });

    const responseHandler = getLastInstanceResponseSuccessMock(ResponseSuccess);

    expect(responseHandler.sendCreated).toHaveBeenCalledWith(
      {
        id: 1,
        name: "Bebidas",
        description: null,
        status: "activo",
        createdAt: now,
        updatedAt: now,
      },
      "Categoría creada correctamente",
    );
  });

  it("updateCategory: if no changes, responds with no changes and does not call updated", async () => {
    const service = createCategoryServiceMock();
    const controller = new CategoryController(service);

    const now = new Date();

    service.updateCategory.mockResolvedValue({
      hasChanged: false,
      data: {
        id: 1,
        name: "Bebidas",
        description: null,
        status: "activo",
        createdAt: now,
        updatedAt: now,
      },
    });

    const req = {
      params: { id: "1" },
      body: { name: "Bebidas", description: null, status: "activo" },
    } as unknown as PublicRequestWithBody<
      { name: string; description: null; status: "activo" },
      { id: string }
    >;

    const res = {} as Response;

    await controller.updateCategory(req, res);

    expect(service.updateCategory).toHaveBeenCalledWith(1, {
      name: "Bebidas",
      description: null,
      status: "activo",
    });

    const responseHandler = getLastInstanceResponseSuccessMock(ResponseSuccess);

    expect(responseHandler.sendNoChanges).toHaveBeenCalledTimes(1);
    expect(responseHandler.sendUpdated).not.toHaveBeenCalled();
  });

  it("updateCategory: if there are changes, responds with updated", async () => {
    const service = createCategoryServiceMock();
    const controller = new CategoryController(service);

    const now = new Date();

    service.updateCategory.mockResolvedValue({
      hasChanged: true,
      data: {
        id: 1,
        name: "Bebidas",
        description: null,
        status: "activo",
        createdAt: now,
        updatedAt: now,
      },
    });

    const req = {
      params: { id: "1" },
      body: { name: "Bebidas", description: null, status: "activo" },
    } as unknown as PublicRequestWithBody<
      { name: string; description: null; status: "activo" },
      { id: string }
    >;

    const res = {} as Response;

    await controller.updateCategory(req, res);

    const responseHandler = getLastInstanceResponseSuccessMock(ResponseSuccess);

    expect(responseHandler.sendUpdated).toHaveBeenCalledWith(
      {
        id: 1,
        name: "Bebidas",
        description: null,
        status: "activo",
        createdAt: now,
        updatedAt: now,
      },
      "Categoría actualizada correctamente",
    );
  });
});
