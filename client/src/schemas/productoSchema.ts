import { z } from "zod";

export const productoFormSchema = z.object({
  id_producto: z.number().optional(),

  nombre_producto: z.string().
  min(1, { 
    message: "El nombre del producto es requerido" 
  })
  .max(50, {
    message: "El nombre del producto no puede superar los 50 caracteres"
  }),

  descripcion_producto: z.string().max(500, {
    message: "La descripción del producto no puede superar los 500 caracteres"
  }).optional(),

  id_categoria: z.number({
    required_error: "La categoria es requerida",
    invalid_type_error: "Seleccione una categoria valida"
  }).positive({
    message: "Seleccione una categoria valida"
  }),

  precio_compra: z.number()
  .nonnegative({
    message: "El precio de compra debe ser un numero positivo",
  }).optional(),

  precio_venta: z.number({
    message: "El precio de venta es requerido",
    invalid_type_error: "El precio de venta debe ser un numero valido"
  })
  .positive({
    message: "El precio de venta debe ser un numero positivo y mayor a 0",
  }),

  stock_producto: z.number({
    message: "El stock es requerido",
    invalid_type_error: "El stock debe ser un numero valido"
  })
  .positive({
    message: "El stock debe ser un numero positivo y mayor a 0",
  }),

  id_proveedor: z.number({
    required_error: "El proveedor es requerido",
    invalid_type_error: "Seleccione un proveedor valido"
  }).positive({
    message: "Seleccione un proveedor valido"
  }),

  fecha_registro: z.date({
    invalid_type_error: "La fecha de registro debe ser una fecha valida"
  }).optional(),

  fecha_vencimiento: z.date({
    invalid_type_error: "La fecha de vencimiento debe ser una fecha valida"
  })
  .refine(date => date > new Date(), {
    message: "La fecha de vencimiento debe ser una fecha posterior a la actual",
  })
  .optional(),
  
  imagen_producto: z.instanceof(File, {
    message: "El archivo debe ser una imagen valida",
  }).refine(file => file.type.startsWith("image/"), {
    message: "El archivo debe ser una imagen"
  }).optional(),

  estado_producto: z.enum(["activo", "inactivo"]).optional(),

}).superRefine((data, ctx) => {
  if (data.precio_compra && data.precio_venta <= data.precio_compra) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "El precio de venta no puede ser menor que el precio de compra",
      path: ["precio_venta"]
    });
  }
});

export type ProductoTypeSchema = z.infer<typeof productoFormSchema>;