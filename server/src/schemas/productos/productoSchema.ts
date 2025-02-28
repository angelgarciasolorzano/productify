import { object, string, InferType, number, date } from "yup";

export const ProductoSchema = object({
  nombre_producto: string()
  .trim()
  .required("El nombre es requerido")
  .min(3, "El nombre debe tener al menos 3 caracteres")
  .max(50, "El nombre debe tener 50 caracteres como máximo"),

  descripcion_producto: string()
  .trim()
  .max(100, "La descripción debe tener 100 caracteres como máximo")
  .optional(),

  precio_compra: number()
  .positive("El precio de compra debe ser positivo")
  .max(999999.99, "El precio de compra es demasiado alto")
  .optional(),

  precio_venta: number()
  .required("El precio es requerido")
  .positive("El precio debe ser positivo")
  .max(999999.99, "El precio de venta es demasiado alto"),

  stock_producto: number()
  .required("El stock es requerido")
  .integer("El stock debe ser un numero entero")
  .min(0, "El stock no puede ser negativo"),

  fecha_vencimiento_producto: date()
  .typeError("La fecha de vencimiento debe ser una fecha valida")
  .optional(),

  imagen_producto: string()
  .trim()
  .max(255, "La imagen debe tener 255 caracteres como máximo")
  .optional(),

  estado_producto: string()
  .oneOf(["activo", "inactivo"], '"El estado debe ser "activo" o "inactivo"')
  .default("activo"),

  id_categoria_fk: number()
  .integer("El id de la categoria debe ser un numero entero")
  .optional(),

  id_usuario_fk: number()
  .integer("El id de usuario debe ser un numero entero")
  .required("El id de usuario es requerido")
}).test('precio-compra-venta', 'El precio de venta no puede ser menor que el precio de compra', (value) => {
  if (value.precio_compra && value.precio_venta <= value.precio_compra) return false;

  return true;
});

export type ProductoType = InferType<typeof ProductoSchema>;