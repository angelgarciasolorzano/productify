import { object, number } from "yup";

export const IdParamSchema = object({
  id: number()
  .integer("El id debe ser un numero entero")
  .positive("El id debe ser un numero positivo")
  .typeError("El id debe ser un numero valido")
});