import { Response, Request } from "express";
import { HttpStatusCode } from "@/shared";

/**
 * Define el contrato para enviar una respuesta de éxito.
 * 
 * Esta interfaz define los métodos para enviar una respuesta de exito para diferentes
 * tipos de operaciones.
 * 
 * @interface IResponseSuccess
*/
interface IResponseSuccess {
  sendSuccess<T>(data: T, message: string, statusCode: HttpStatusCode): Response;
  sendCreated<T>(data: T, message: string): Response;
  sendUpdated<T>(data: T, message: string): Response;
  sendNoChanges<T>(data: T, message: string): Response;
};

/**
 * Contrato que define la estructura base de una respuesta de éxito.
 * 
 * @interface IBaseResponseSuccess
*/
interface IBaseResponseSuccess<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
  path: string;
  method: string;
};

/**
 * Clase que encapsula la funcionalidad para enviar una respuesta de éxito.
 * 
 * @class ResponseSuccess
 * @implements IResponseSuccess
*/
export class ResponseSuccess implements IResponseSuccess {
  /**
   * Crea una instancia de ResponseSuccess.
   *
   * @param {Request} request El objeto de solicitud HTTP
   * @param {Response} response El objeto de respuesta HTTP
  */
  constructor(private readonly request: Request, private readonly response: Response) {};

  /**
   * Construye la estructura base de una respuesta de éxito.
   * 
   * @param {T} data Datos a retornar en la respuesta
   * @param {string} message Mensaje descriptivo de la operación realizada
   * @returns {IBaseResponseSuccess<T>} Objeto de respuesta formateada
  */
  private buildBaseResponseSuccess<T>(
    data: T,
    message: string,
  ): IBaseResponseSuccess<T> {
    return {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
      path: this.request.path,
      method: this.request.method
    }
  };

  /**
   * Envía una respuesta generica de éxito (200 por defecto).
   *
   * @param {T} data Datos a retornar en la respuesta
   * @param {string} message Mensaje descriptivo de la operación realizada (default: "Operacion realizada con exito")
   * @param {HttpStatusCode} statusCode Codigo de estado HTTP (default: 200)
  */
  public sendSuccess<T>(
    data: T,  
    message: string = "Operacion realizada con exito",
    statusCode: HttpStatusCode = HttpStatusCode.OK
  ): Response {
    return this.response.status(statusCode).json(
      this.buildBaseResponseSuccess(data, message)
    );
  };

  /**
   * Envia una respuesta de creacion exitosa (201 Created).
   * 
   * @param {T} data Datos a retornar en la respuesta
   * @param {string} message Mensaje descriptivo de la operación realizada (default: "Recurso creado correctamente")
  */
  public sendCreated<T>(
    data: T, 
    message: string = "Recurso creado correctamente"
  ): Response {
    return this.response.status(HttpStatusCode.CREATED).json(
      this.buildBaseResponseSuccess(data, message)
    );
  };

  /**
   * Envia una respuesta de actualización exitosa (200 OK).
   * 
   * @param {T} data Datos a retornar en la respuesta
   * @param {string} message Mensaje descriptivo de la operación realizada (default: "Recurso actualizado correctamente")
  */
  public sendUpdated<T>(
    data: T, 
    message: string = "Recurso actualizado correctamente"
  ): Response {
    return this.response.status(HttpStatusCode.OK).json(
      this.buildBaseResponseSuccess(data, message)
    );
  };

  /**
   * Envia una respuesta indicando que no cambios (200 OK).
   *
   * @param {T} data Datos a retornar en la respuesta
   * @param {string} message Mensaje descriptivo de la operación realizada (default: "No se realizaron cambios, los datos son iguales")
  */
  public sendNoChanges<T>(
    data: T, 
    message: string = "No se realizaron cambios, los datos son iguales"
  ): Response {
    return this.response.status(HttpStatusCode.OK).json(
      this.buildBaseResponseSuccess(data, message)
    );
  };
};