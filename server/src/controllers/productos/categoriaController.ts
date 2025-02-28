import { Response } from "express";
import { RequestType } from "@/types";
import { CategoriaType } from "@/schemas/productos";
import { CategoriaService } from "@/services/productos";
import { NotFoundError, DatosError } from "@/errors";

class CategoriaController {
  public async getCategorias(_request: RequestType<CategoriaType>, response: Response): Promise<void> {
    try {
      const categorias = await CategoriaService.getCategorias();

      response.json(categorias);
    } catch (error) {
      if (error instanceof DatosError) {
        response.status(error.statusCode).json({ message: error.message });
        return;
      };

      if (error instanceof NotFoundError) {
        response.status(error.statusCode).json({ message: error.message });
        return;
      };

      response.status(500).json({ message: "Error interno del servidor" });
    }
  };

  public async getCategoriaId(request: RequestType<CategoriaType>, response: Response): Promise<void> {
    try {
      const categoria = await CategoriaService.getCategoriaId(Number(request.params.id));

      response.json(categoria);
    } catch (error) {
      if (error instanceof DatosError) {
        response.status(error.statusCode).json({ message: error.message });
        return;
      };

      if (error instanceof NotFoundError) {
        response.status(error.statusCode).json({ message: error.message });
        return;
      };

      response.status(500).json({ message: "Error interno del servidor" });
    }
  };

  public async createCategoria(request: RequestType<CategoriaType>, response: Response): Promise<void> {
    try {
      const categoria = await CategoriaService.createCategoria(request.body);

      response.json(categoria);
    } catch (error) {
      if (error instanceof DatosError) {
        response.status(error.statusCode).json({ message: error.message });
        return;
      };

      if (error instanceof NotFoundError) {
        response.status(error.statusCode).json({ message: error.message });
        return;
      };

      response.status(500).json({ message: "Error interno del servidor" });
    }
  };

  public async updateCategoria(request: RequestType<CategoriaType>, response: Response): Promise<void> {
    try {
      const categoria = await CategoriaService.updateCategoria(Number(request.params.id), request.body);

      response.json(categoria);
    } catch (error) {
      if (error instanceof DatosError) {
        response.status(error.statusCode).json({ message: error.message });
        return;
      };

      if (error instanceof NotFoundError) {
        response.status(error.statusCode).json({ message: error.message });
        return;
      };

      response.status(500).json({ message: "Error interno del servidor" });
    }
  };
};

export default new CategoriaController();