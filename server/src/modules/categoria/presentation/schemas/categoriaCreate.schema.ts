import { object, string } from "yup";

const CategoriaCreateSchema = object({
  nombreCategoria: string()
  .required("El nombre es requerido")
  .min(3, "El nombre debe tener al menos 3 caracteres")
  .max(50, "El nombre debe tener 50 caracteres como máximo"),

  descripcionCategoria: string()
  .max(100, "La descripción debe tener 100 caracteres como máximo")
  .optional()
});

export default CategoriaCreateSchema;