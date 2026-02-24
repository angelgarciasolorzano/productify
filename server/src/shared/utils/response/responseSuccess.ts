import type { Request, Response } from "express";

import type { HttpStatusCodeType } from "../../constants/httpStatusCode.js";
import { HttpStatusCode } from "../../constants/httpStatusCode.js";
import type { ResponseMessageType } from "../../constants/responseMessages.js";
import { ResponseMessages } from "../../constants/responseMessages.js";
import { ResponseBuilder } from "./responseBuilder.js";

interface IResponseSuccess {
  sendSuccess<T>(
    data: T,
    message: string | ResponseMessageType,
    statusCode: HttpStatusCodeType,
  ): Response;
  sendCreated<T>(data: T, message: string | ResponseMessageType): Response;
  sendUpdated<T>(data: T, message: string | ResponseMessageType): Response;
  sendNoChanges<T>(data: T, message: string | ResponseMessageType): Response;
}

export class ResponseSuccess implements IResponseSuccess {
  /**
   * Crea una instancia de ResponseSuccess.
   *
   * @param request El objeto de solicitud HTTP
   * @param response El objeto de respuesta HTTP
   */
  public constructor(
    private readonly request: Request,
    private readonly response: Response,
  ) {}

  /**
   * Envía una respuesta generica de éxito (200 por defecto).
   *
   * @param data Datos a retornar en la respuesta
   * @param message Mensaje descriptivo de la operación realizada (default: "Operacion realizada con exito")
   * @param statusCode Codigo de estado HTTP (default: 200)
   * @returns Objeto de respuesta HTTP
   */
  public sendSuccess<T>(
    data: T,
    message: ResponseMessageType | string = ResponseMessages.SUCCESS,
    statusCode: HttpStatusCodeType = HttpStatusCode.OK,
  ): Response {
    return this.response
      .status(statusCode)
      .json(ResponseBuilder.baseResponse(this.request, data, message));
  }

  /**
   * Envia una respuesta de creacion exitosa (201 Created).
   *
   * @param data Datos a retornar en la respuesta
   * @param message Mensaje descriptivo de la operación realizada (default: "Recurso creado correctamente")
   * @returns Objeto de respuesta HTTP
   */
  public sendCreated<T>(
    data: T,
    message: ResponseMessageType | string = ResponseMessages.CREATED,
  ): Response {
    return this.response
      .status(HttpStatusCode.CREATED)
      .json(ResponseBuilder.baseResponse(this.request, data, message));
  }

  /**
   * Envia una respuesta de actualización exitosa (200 OK).
   *
   * @param data Datos a retornar en la respuesta
   * @param message Mensaje descriptivo de la operación realizada (default: "Recurso actualizado correctamente")
   * @returns Objeto de respuesta HTTP
   */
  public sendUpdated<T>(
    data: T,
    message: ResponseMessageType | string = ResponseMessages.UPDATED,
  ): Response {
    return this.response
      .status(HttpStatusCode.OK)
      .json(ResponseBuilder.baseResponse(this.request, data, message));
  }

  /**
   * Envia una respuesta indicando que no hubo cambios (200 OK).
   *
   * @param data Datos a retornar en la respuesta
   * @param message Mensaje descriptivo de la operación realizada (default: "No se realizaron cambios, los datos son iguales")
   * @returns Objeto de respuesta HTTP
   */
  public sendNoChanges<T>(
    data: T,
    message: ResponseMessageType | string = ResponseMessages.NO_CHANGES,
  ): Response {
    return this.response
      .status(HttpStatusCode.OK)
      .json(ResponseBuilder.baseResponse(this.request, data, message));
  }
}
