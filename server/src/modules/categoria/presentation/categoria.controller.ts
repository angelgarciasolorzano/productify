import { Response } from "express";
import { asyncWrapper } from "@/utils";
import { PublicRequestWithBody, PublicRequest } from "@/types";

import { 
  ICategoriaService, 
  CategoriaCreateDto, 
  CategoriaUpdateDto 
} from "@/modules/categoria/application";

import { ICategoriaController } from "@/modules/categoria/presentation";

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
  */
  constructor(private categoriaService: ICategoriaService) {};

  public getCategorias = asyncWrapper(
    async (_request: PublicRequest, response: Response): Promise<void> => {
      const categorias = await this.categoriaService.getCategorias();
      response.json(categorias)
    }
  );

  public getCategoriaId = asyncWrapper(
    async (request: PublicRequestWithBody<never, { id: string }>, response: Response): Promise<void> => {
      const categoria = await this.categoriaService.getCategoriaId(Number(request.params.id));
      response.json(categoria);
    }
  );

  public createCategoria = asyncWrapper(
    async (request: PublicRequestWithBody<CategoriaCreateDto>, response: Response): Promise<void> => {
      const categoria = await this.categoriaService.createCategoria(request.body);
      response.json(categoria);
    }
  );

  public updateCategoria = asyncWrapper(
    async (request: PublicRequestWithBody<CategoriaUpdateDto, { id: string }>, response: Response): Promise<void> => {
      const categoria = await this.categoriaService.updateCategoria(
        Number(request.params.id), request.body
      );

      response.json(categoria);
    }
  );
};

export default CategoriaController;