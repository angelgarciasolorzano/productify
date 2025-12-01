import type { Response } from "express";

import type { PublicRequest, PublicRequestWithBody } from "@productify/shared/index.js";
import { ResponseSuccess } from "@productify/shared/index.js";

import type {
  CategorieCreateDTO,
  CategorieUpdateDTO,
  ICategorieService,
} from "../../application/index.js";
import type { ICategorieController } from "./controller.interface.js";

/**
 * Controlador HTTP para la entidad categoría.
 *
 * Recibe peticiones, delega la lógica al servicio y envía respuestas formateadas.
 *
 * @see ICategorieService
 */
export class CategorieController implements ICategorieController {
  /**
   * Crea una instancia del controlador.
   *
   * @param categorieService Servicio que implementa la lógica de negocio de categorías
   */
  public constructor(private readonly categorieService: ICategorieService) {}

  public getCategories = async (request: PublicRequest, response: Response): Promise<void> => {
    const categories = await this.categorieService.getCategories();
    const responseHandler = new ResponseSuccess(request, response);

    responseHandler.sendSuccess(categories, "Lista de categorias obtenida correctamente");
  };

  public getCategorieId = async (
    request: PublicRequestWithBody<never, { id: string }>,
    response: Response,
  ): Promise<void> => {
    const categorie = await this.categorieService.getCategorieId(Number(request.params.id));
    const responseHandler = new ResponseSuccess(request, response);

    responseHandler.sendSuccess(categorie, "Categoría obtenida correctamente");
  };

  public createCategory = async (
    request: PublicRequestWithBody<CategorieCreateDTO>,
    response: Response,
  ): Promise<void> => {
    const categorie = await this.categorieService.createCategory(request.body);
    const responseHandler = new ResponseSuccess(request, response);

    responseHandler.sendCreated(categorie, "Categoría creada correctamente");
  };

  public updateCategory = async (
    request: PublicRequestWithBody<CategorieUpdateDTO, { id: string }>,
    response: Response,
  ): Promise<void> => {
    const { data, hasChanged } = await this.categorieService.updateCategory(
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
