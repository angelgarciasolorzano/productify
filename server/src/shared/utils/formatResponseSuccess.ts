import { Response, Request } from "express";
import { HttpStatusCode } from "@/shared";

/**
 * Contrato que define la estructura base de una respuesta de éxito.
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
 * Construye la estructura base de una respuesta de éxito.
 *
 * @param {Request} request Objeto de solicitud HTTP
 * @param {T} data Datos a retornar en la respuesta
 * @param {string} message Mensaje descriptivo de la operación realizada
 * @param {boolean} success Indica si la operación fue exitosa
 * @returns {IBaseResponseSuccess<T>} Objeto de respuesta formateada
*/
function buildBaseResponseSuccess<T>(
  request: Request,
  data: T,
  message: string,
  success: boolean = true,
): IBaseResponseSuccess<T> {
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
  return response.status(statusCode).json(buildBaseResponseSuccess(request, data, message))
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
  return response.status(HttpStatusCode.CREATED).json(buildBaseResponseSuccess(request, data, message))
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
  return response.status(HttpStatusCode.OK).json(buildBaseResponseSuccess(request, data, message))
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
  return response.status(HttpStatusCode.OK).json(buildBaseResponseSuccess(request, data, message))
};