import { object, InferType, number } from "yup";

export const ProductoProveedorSchema = object({
  id_proveedor_fk: number()
  .integer("El id de proveedor debe ser un numero entero")
  .optional(),

  id_producto_fk: number()
  .integer("El id de producto debe ser un numero entero")
  .required("El id de producto es requerido"),
});

export type ProductoProveedorType = InferType<typeof ProductoProveedorSchema>;