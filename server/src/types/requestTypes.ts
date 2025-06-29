import { Request } from "express";
import { ParamsDictionary, Query } from "express-serve-static-core";

interface AuthenticatedUser {
  id: string;
  role: "admin" | "user";
};

/**
 * Tipo base para el cuerpo de una solicitud HTTP
 * @type BaseBody
 * @description Tipo que representa el cuerpo de una solicitud HTTP
*/
type BaseBody = Record<string, unknown>;

/**
 * Tipo de la solicitud HTTP con cuerpo (peticiones GET, POST, PUT, DELETE) y usuario autenticado.
 * Se utiliza para solicitudes complejas que combinen cuerpo, auth, parametros y query.
 * @interface TypedRequest
 * @description Interfaz que representa la estructura de una solicitud HTTP
 * @template TBody Tipo base para el cuerpo de la solicitud HTTP (Por defecto BaseBody)
 * @template TUser Tipo del usuario autenticado (opcional, por defecto undefined)
 * @template TParams Tipo de los parámetros de la solicitud HTTP (Por defecto ParamsDictionary)
 * @template TQuery Tipo de las consultas de la solicitud HTTP (Por defecto Query)
 * @extends Request<TParams>
*/
interface TypedRequest<
  TBody = BaseBody, 
  TUser = undefined, 
  TParams extends ParamsDictionary = {},
  TQuery extends Query = {}
> extends Request<TParams, unknown, unknown, TQuery> {
  body: TBody;
  usuario?: TUser;
};

/**
 * Solicitud autenticada, requiere middleware de autenticación.
 * Se utiliza para rutas autenticadas.
 * @interface AuthenticatedRequest
 * @description Interfaz que representa la estructura de una solicitud HTTP con autenticación
 * @template TBody Tipo base para el cuerpo de la solicitud HTTP (por defecto never)
 * @template TParams Tipo de los parámetros de la solicitud HTTP (opcional)
 * @template TQuery Tipo de las consultas de la solicitud HTTP (opcional)
*/
interface AuthenticatedRequest<
  TBody = never,
  TParams extends ParamsDictionary = {},
  TQuery extends Query = {}
> extends TypedRequest<TBody, AuthenticatedUser, TParams, TQuery> {
  usuario: AuthenticatedUser;
};

/**
 * Tipo de la solicitud HTTP con cuerpo (peticiones POST, PUT) usuario no incluido.
 * Se utiliza para solicitudes publicas con cuerpo (sin autenticación).
 * @type RequestWithBody
 * @description Solicitud publica (Incluye el cuerpo pero no el usuario)
 * @template TBody Tipo base para el cuerpo de la solicitud HTTP
 * @template TParams Tipo de los parámetros de la solicitud HTTP (opcional)
*/
type PublicRequestWithBody<
  TBody = BaseBody,
  TParams extends ParamsDictionary = ParamsDictionary
> = TypedRequest<TBody, undefined, TParams>;

/**
 * Solicitud pública (Cuerpo no incluido).
 * Se utiliza para rutas públicas que no envían cuerpo (GET) ni autenticación.
 * @type PublicRequest
 * @description Solicitud pública (No incluye el cuerpo ni el usuario)
 * @template TParams Tipo de los parámetros de la solicitud HTTP (opcional)
*/
type PublicRequest<
  TParams extends ParamsDictionary = ParamsDictionary
> = TypedRequest<undefined, undefined, TParams>;

export {
  TypedRequest,
  AuthenticatedRequest,
  PublicRequestWithBody,
  PublicRequest
};