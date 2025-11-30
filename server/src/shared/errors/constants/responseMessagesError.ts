export enum ResponseMessagesError {
  INTERNAL_SERVER_ERROR = "Ha ocurrido un error interno del servidor. Por favor, intente nuevamente más tarde.",
  BAD_REQUEST = "Solicitud incorrecta. Por favor, revise los datos enviados.",
  UNAUTHORIZED = "No autorizado. Por favor, inicie sesión para continuar.",
  FORBIDDEN = "Acceso denegado. No tiene permisos para realizar esta acción.",
  NOT_FOUND = "El recurso solicitado no fue encontrado.",
  METHOD_NOT_ALLOWED = "El método HTTP utilizado no está permitido.",
  CONFLICT = "El recurso ya existe. No se puede duplicar.",
  UNPROCESSABLE_ENTITY = "Los datos enviados no son válidos. Por favor, revise y corrija los errores.",
  TOO_MANY_REQUESTS = "Ha realizado demasiadas solicitudes. Por favor, intente más tarde.",
}
