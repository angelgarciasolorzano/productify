import { Response } from "express";
import { RequestType } from "@/types";
import { CategoriaType } from "@/schemas/productos";
import { CategoriaService } from "@/services/productos";
import { HandleError } from "@/errors";

class CategoriaController extends HandleError {
  public getCategorias = async(_request: RequestType<CategoriaType>, response: Response): Promise<void> => {
    try {
      const categorias = await CategoriaService.getCategorias();

      response.json(categorias);
    } catch (error) {
      this.responseError(error, response);
    }
  };

  public getCategoriaId = async (request: RequestType<CategoriaType>, response: Response): Promise<void> => {
    try {
      const categoria = await CategoriaService.getCategoriaId(Number(request.params.id));

      response.json(categoria);
    } catch (error) {
      this.responseError(error, response);
    }
  };

  public createCategoria = async (request: RequestType<CategoriaType>, response: Response): Promise<void> => {
    try {
      const categoria = await CategoriaService.createCategoria(request.body);

      response.json(categoria);
    } catch (error) {
      this.responseError(error, response);
    }
  };

  public updateCategoria = async (request: RequestType<CategoriaType>, response: Response): Promise<void> => {
    try {
      const categoria = await CategoriaService.updateCategoria(Number(request.params.id), request.body);

      response.json(categoria);
    } catch (error) {
      this.responseError(error, response);
    }
  };
};

export default new CategoriaController();