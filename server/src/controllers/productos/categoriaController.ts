import { Response } from "express";
import { RequestType } from "@/types";
import { CategoriaType } from "@/schemas/productos";
import { CategoriaService } from "@/services/productos";
import { HandleError } from "@/errors";
import { asyncWrapper } from "@/utils";

class CategoriaController extends HandleError {
  public getCategorias = asyncWrapper(
    async (_request: RequestType<CategoriaType>, response: Response): Promise<void> => {
      const categorias = await CategoriaService.getCategorias();
      response.json(categorias);
    }
  );

  public getCategoriaId = asyncWrapper(
    async (request: RequestType<CategoriaType>, response: Response): Promise<void> => {
      const categoria = await CategoriaService.getCategoriaId(Number(request.params.id));
      response.json(categoria);
    }
  );

  public createCategoria = asyncWrapper(
    async (request: RequestType<CategoriaType>, response: Response) => {
      const categoria = await CategoriaService.createCategoria(request.body);
      response.json(categoria);
    }
  );

  public updateCategoria = asyncWrapper(
    async (request: RequestType<CategoriaType>, response: Response): Promise<void> => {
      const categoria = await CategoriaService.updateCategoria(Number(request.params.id), request.body);
      response.json(categoria);
    }
  );
};

export default new CategoriaController();