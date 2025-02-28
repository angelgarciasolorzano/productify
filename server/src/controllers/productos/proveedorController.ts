import { Response } from "express";
import { RequestType } from "@/types";
import { ProveedorType } from "@/schemas/productos";
import { ProveedorService } from "@/services/productos";
import { NotFoundError, DatosError } from "@/errors";

class ProveedorController {
  public async getProveedores(_request: RequestType<ProveedorType>, response: Response): Promise<void> {
    try {
      const proveedores = await ProveedorService.getProveedores();

      response.json(proveedores);
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

  public async getProveedorId(request: RequestType<ProveedorType>, response: Response): Promise<void> {
    try {
      const proveedor = await ProveedorService.getProveedorId(Number(request.params.id));

      response.json(proveedor);
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

  public async createProveedor(request: RequestType<ProveedorType>, response: Response): Promise<void> {
    try {
      const proveedor = await ProveedorService.createProveedor(request.body);

      response.json(proveedor);
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

  public async updateProveedor(request: RequestType<ProveedorType>, response: Response): Promise<void> {
    try {
      const proveedor = await ProveedorService.updateProveedor(Number(request.params.id), request.body);

      response.json(proveedor);
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

export default new ProveedorController();