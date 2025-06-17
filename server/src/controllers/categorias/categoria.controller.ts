import { Response } from "express";
import { ICategoriaService } from "@/services/categorias";
import { CategoriaType } from "@/schemas/productos";
import { asyncWrapper } from "@/utils";
import { RequestType } from "@/types";

import ICategoriaController from "./iCategoria.controller";

/**
 * Controlador para manejar las operaciones del modulo de categorias
 * @class CategoriaController
 * @implements ICategoriaController
 * @description Llama a los metodos de la capa servicio y responde con la información solicitada
*/
class CategoriaController implements ICategoriaController {
  /**
   * @constructor CategoriaController
   * @description Crea una instancia de CategoriaController
   * @param {ICategoriaService} categoriaService Instancia de CategoriaService
   * @example
   * import { CategoriaRepository, CategoriaFinderRepository, CategoriaCRUDRepository } from "@/repositories/categorias";
   * import { CategoriaService, CategoriaFinderService, CategoriaCRUDService } from "@/services/categorias";
   * import { CategoriaController } from "@/controllers/categorias";
   * 
   * const categoriaFinderRepository = new CategoriaFinderRepository();
   * const categoriaCRUDRepository = new CategoriaCRUDRepository();
   * 
   * const categoriaRepository = new CategoriaRepository(CategoriaFinderRepository, CategoriaCRUDRepository);
   * 
   * const categoriaFinderService = new CategoriaFinderService(CategoriaRepository);
   * const categoriaCRUDService = new CategoriaCRUDService(CategoriaRepository);
   * 
   * const categoriaService = new CategoriaService(categoriaFinderService, categoriaCRUDService);
   * 
   * const categoriaController = new CategoriaController(categoriaService);
  */
  constructor(private categoriaService: ICategoriaService) {};

  public getCategorias = asyncWrapper(
    async (_request: RequestType<CategoriaType>, response: Response): Promise<void> => {
      const categorias = await this.categoriaService.getCategorias();
      response.json(categorias);
    }
  );

  public getCategoriaId = asyncWrapper(
    async (request: RequestType<CategoriaType>, response: Response): Promise<void> => {
      const categoria = await this.categoriaService.getCategoriaId(Number(request.params.id));
      response.json(categoria);
    }
  );

  public createCategoria = asyncWrapper(
    async (request: RequestType<CategoriaType>, response: Response) => {
      const categoria = await this.categoriaService.createCategoria(request.body);
      response.json(categoria);
    }
  );

  public updateCategoria = asyncWrapper(
    async (request: RequestType<CategoriaType>, response: Response): Promise<void> => {
      const categoria = await this.categoriaService.updateCategoria(Number(request.params.id), request.body);
      response.json(categoria);
    }
  );
};

export default CategoriaController;