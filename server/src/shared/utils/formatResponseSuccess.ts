import { Response, Request } from "express";
import { HttpStatusCode } from "@/shared";

/**
 * Contrato que define la estructura base de una respuesta de éxito.
*/
interface IBaseResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
  path: string;
  method: string;
};

/**
 * Construye la estructura base de una respuesta de éxito.
 *
 * @param {Request} request Objeto de solicitud HTTP
 * @param {T} data Datos a retornar en la respuesta
 * @param {string} message Mensaje descriptivo de la operación realizada
 * @param {boolean} success Indica si la operación fue exitosa
 * @returns {IBaseResponse<T>} Objeto de respuesta formateada
*/
function buildBaseResponse<T>(
  request: Request,
  data: T,
  message: string,
  success: boolean = true,
): IBaseResponse<T> {
  return {
    success,
    message,
    data,
    timestamp: new Date().toISOString(),
    path: request.path,
    method: request.method
  }
};

/**
 * Envía una respuesta generica de éxito (200 por defecto).
 *
 * @param {Request} request Objeto de solicitud HTTP
 * @param {Response} response Objeto de respuesta HTTP
 * @param {T} data Datos a retornar en la respuesta
 * @param {string} message Mensaje descriptivo de la operación realizada (opcional)
 * @param {HttpStatusCode} statusCode Codigo de estado HTTP (default: 200)
*/
export function sendSuccess<T>(
  request: Request,
  response: Response, 
  data: T, 
  message: string = "Operacion realizada con exito",
  statusCode: HttpStatusCode = HttpStatusCode.OK
) {
  return response.status(statusCode).json(buildBaseResponse(request, data, message))
};

/**
 * Envia una respuesta de creacion exitosa (201 Created).
 * 
 * @param {Request} request Objeto de solicitud HTTP
 * @param {Response} response Objeto de respuesta HTTP
 * @param {T} data Datos a retornar en la respuesta
 * @param {string} message Mensaje descriptivo de la operación realizada (opcional)
*/
export function sendCreated<T>(
  request: Request,
  response: Response,
  data: T,
  message: string = "Recurso creado correctamente"
) {
  return response.status(HttpStatusCode.CREATED).json(buildBaseResponse(request, data, message))
};

/**
 * Envia una respuesta de actualización exitosa (200 OK).
 * 
 * @param {Request} request Objeto de solicitud HTTP
 * @param {Response} response Objeto de respuesta HTTP
 * @param {T} data Datos a retornar en la respuesta
 * @param {string} message Mensaje descriptivo de la operación realizada (opcional)
*/
export function sendUpdated<T>(
  request: Request,
  response: Response,
  data: T,
  message: string = "Recurso actualizado correctamente"
) {
  return response.status(HttpStatusCode.OK).json(buildBaseResponse(request, data, message))
};

/**
 * Envia una respuesta indicando que no cambios (200 OK).
 *
 * @param {Request} request Objeto de solicitud HTTP
 * @param {Response} response Objeto de respuesta HTTP
 * @param {T} data Datos a retornar en la respuesta
 * @param {string} message Mensaje descriptivo de la operación realizada (opcional)
*/
export function sendNoChanges<T>(
  request: Request,
  response: Response,
  data: T,
  message: string = "No se realizaron cambios, los datos son iguales"
) {
  return response.status(HttpStatusCode.OK).json(buildBaseResponse(request, data, message))
};