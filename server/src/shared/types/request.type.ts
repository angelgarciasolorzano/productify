import type { Request } from "express";
import type { ParamsDictionary, Query } from "express-serve-static-core";

interface AuthenticatedUser {
  id: string;
  role: "admin" | "user";
}

type BaseBody = Record<string, unknown>;

/**
 * Representa una solicitud HTTP tipada que incluye cuerpo, parámetros, consultas y un usuario autenticado opcional.
 *
 * @template TBody Tipo del cuerpo de la solicitud HTTP (por defecto: BaseBody).
 * @template TUser Tipo del usuario autenticado (por defecto: undefined).
 * @template TParams Tipo de los parámetros de la solicitud HTTP (por defecto: ParamsDictionary).
 * @template TQuery Tipo de las consultas de la solicitud HTTP (por defecto: Query).
 */
interface TypedRequest<
  TBody = BaseBody,
  TUser = undefined,
  TParams extends ParamsDictionary = ParamsDictionary,
  TQuery extends Query = Query,
> extends Request<TParams, unknown, unknown, TQuery> {
  body: TBody;
  usuario?: TUser;
}

/**
 * Representa una solicitud HTTP autenticada, utilizada para rutas que requieren autenticación.
 *
 * @template TBody Tipo del cuerpo de la solicitud HTTP (por defecto: never).
 * @template TParams Tipo de los parámetros de la solicitud HTTP (por defecto: ParamsDictionary).
 * @template TQuery Tipo de las consultas de la solicitud HTTP (por defecto: Query).
 */
interface AuthenticatedRequest<
  TBody = never,
  TParams extends ParamsDictionary = ParamsDictionary,
  TQuery extends Query = Query,
> extends TypedRequest<TBody, AuthenticatedUser, TParams, TQuery> {
  usuario: AuthenticatedUser;
}

/**
 * Representa una solicitud HTTP pública con cuerpo, utilizada para rutas que no requieren autenticación.
 *
 * @template TBody Tipo del cuerpo de la solicitud HTTP (por defecto: BaseBody).
 * @template TParams Tipo de los parámetros de la solicitud HTTP (por defecto: ParamsDictionary).
 */
type PublicRequestWithBody<
  TBody = BaseBody,
  TParams extends ParamsDictionary = ParamsDictionary,
> = TypedRequest<TBody, undefined, TParams>;

/**
 * Representa una solicitud HTTP pública sin cuerpo, utilizada para rutas públicas que no envían datos en el cuerpo.
 *
 * @template TParams Tipo de los parámetros de la solicitud HTTP (por defecto: ParamsDictionary).
 */
type PublicRequest<TParams extends ParamsDictionary = ParamsDictionary> = TypedRequest<
  undefined,
  undefined,
  TParams
>;

export { AuthenticatedRequest, PublicRequestWithBody, PublicRequest };
