import { z } from "zod";

export const categoriaFormSchema = z.object({
  id_categoria: z.number().optional(),

  nombre_categoria: z.string()
  .min(1, { 
    message: "El nombre de la categoria es requerido" 
  })
  .max(50, {
    message: "El nombre de la categoria no puede superar los 50 caracteres"
  }),

  descripcion_categoria: z.string().max(100, {
    message: "La descripción de la categoria no puede superar los 500 caracteres"
  }).optional(),

  estado_categoria: z.enum(["activo", "inactivo"]).optional().default("activo"),
});

export type CategoriaTypeSchema = z.infer<typeof categoriaFormSchema>;