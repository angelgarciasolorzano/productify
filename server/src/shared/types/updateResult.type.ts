/**
 * Tipo de resultado de una operación de actualización.
*/
export type UpdateResult<T> = {
  hasChanged: boolean;
  data: T;
};