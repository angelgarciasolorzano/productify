import type { Response } from "express";

import type { PublicRequest, PublicRequestWithBody } from "@productify/shared/index.js";
import { ResponseSuccess } from "@productify/shared/index.js";

import type {
  CategoryCreateDTO,
  CategoryUpdateDTO,
  ICategoryService,
} from "../../application/index.js";
import type { ICategoryController } from "./categoryController.interface.js";

/**
 * Controlador HTTP para la entidad categoría.
 *
 * Recibe peticiones, delega la lógica al servicio y envía respuestas formateadas.
 *
 * @see ICategoryService
 */
export class CategoryController implements ICategoryController {
  /**
   * Crea una instancia del controlador.
   *
   * @param categoryService Servicio que implementa la lógica de negocio de categorías
   */
  public constructor(private readonly categoryService: ICategoryService) {}

  public getCategories = async (request: PublicRequest, response: Response): Promise<void> => {
    const categories = await this.categoryService.getCategories();
    const responseHandler = new ResponseSuccess(request, response);

    responseHandler.sendSuccess(categories, "Lista de categorias obtenida correctamente");
  };

  public getCategoryById = async (
    request: PublicRequestWithBody<never, { id: string }>,
    response: Response,
  ): Promise<void> => {
    const category = await this.categoryService.getCategoryById(Number(request.params.id));
    const responseHandler = new ResponseSuccess(request, response);

    responseHandler.sendSuccess(category, "Categoría obtenida correctamente");
  };

  public createCategory = async (
    request: PublicRequestWithBody<CategoryCreateDTO>,
    response: Response,
  ): Promise<void> => {
    const category = await this.categoryService.createCategory(request.body);
    const responseHandler = new ResponseSuccess(request, response);

    responseHandler.sendCreated(category, "Categoría creada correctamente");
  };

  public updateCategory = async (
    request: PublicRequestWithBody<CategoryUpdateDTO, { id: string }>,
    response: Response,
  ): Promise<void> => {
    const { data, hasChanged } = await this.categoryService.updateCategory(
      Number(request.params.id),
      request.body,
    );

    const responseHandler = new ResponseSuccess(request, response);

    if (!hasChanged) {
      responseHandler.sendNoChanges(data);
      return;
    }

    responseHandler.sendUpdated(data, "Categoría actualizada correctamente");
  };
}
