import type { Request } from "express";

interface IBaseResponseSuccess<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
  path: string;
  method: string;
}

export class ResponseBuilder {
  /**
   * Construye la estructura base de una respuesta de éxito.
   *
   * @param request El objeto de solicitud HTTP
   * @param data Datos a retornar en la respuesta
   * @param message Mensaje descriptivo de la operación realizada
   * @returns Objeto de respuesta formateada
   */
  public static baseResponse<T>(
    request: Request,
    data: T,
    message: string,
  ): IBaseResponseSuccess<T> {
    return {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
      path: request.path,
      method: request.method,
    };
  }
}
