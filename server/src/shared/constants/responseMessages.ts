export const ResponseMessages = {
  SUCCESS: "Operación realizada con éxito",
  CREATED: "Recurso creado correctamente",
  UPDATED: "Recurso actualizado correctamente",
  NO_CHANGES: "No se realizaron cambios, los datos son iguales",
} as const;

export type ResponseMessageType = (typeof ResponseMessages)[keyof typeof ResponseMessages];
