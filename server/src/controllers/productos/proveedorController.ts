import { Response } from "express";
import { RequestType } from "@/types";
import { ProveedorType } from "@/schemas/productos";
import { ProveedorService } from "@/services/productos";
import { HandleError } from "@/errors";

class ProveedorController extends HandleError {
  public getProveedores = async(_request: RequestType<ProveedorType>, response: Response): Promise<void> => {
    try {
      const proveedores = await ProveedorService.getProveedores();

      response.json(proveedores);
    } catch (error) {
      this.responseError(error, response);
    }
  };

  public getProveedorId = async (request: RequestType<ProveedorType>, response: Response): Promise<void> => {
    try {
      const proveedor = await ProveedorService.getProveedorId(Number(request.params.id));

      response.json(proveedor);
    } catch (error) {
      this.responseError(error, response);
    }
  };

  public createProveedor = async (request: RequestType<ProveedorType>, response: Response): Promise<void> => {
    try {
      const proveedor = await ProveedorService.createProveedor(request.body);

      response.json(proveedor);
    } catch (error) {
      this.responseError(error, response);
    }
  };

  public updateProveedor = async (request: RequestType<ProveedorType>, response: Response): Promise<void> => {
    try {
      const proveedor = await ProveedorService.updateProveedor(Number(request.params.id), request.body);

      response.json(proveedor);
    } catch (error) {
      this.responseError(error, response);
    }
  };
};

export default new ProveedorController();