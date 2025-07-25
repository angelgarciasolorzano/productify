import { string } from "yup";

export class CategoriaFieldSchema {
  private static normalizeNombreCategoria = (value: unknown): string => {
    if (typeof value !== "string" || !value.trim()) return "";

    const normalize = value.trim().replace(/\s+/g, " ").toLowerCase();

    return normalize.charAt(0).toUpperCase() + normalize.slice(1);
  };

  public static nombreCategoriaField = () => {
    return string()
    .required("El campo es requerido")
    .transform(value => this.normalizeNombreCategoria(value))
    .min(3, "El campo debe tener al menos 3 caracteres")
    .max(50, "El campo debe tener 50 caracteres como máximo")
    .matches(/^[a-zA-ZÁÉÍÓÚÑáéíóúñ ]*$/, 
      "El nombre de la categoria solo puede contener letras y espacios"
    );
  };

  public static descripcionCategoriaField = (isRequired: boolean = false) => {
    const schema = string()
    .nullable()
    .transform(value => {
      if (typeof value !== "string") return null;

      const trimmed = value.trim();

      return trimmed.length > 0 ? trimmed.replace(/\s+/g, " ") : null;
    })
    .max(50, "El campo debe tener 50 caracteres como máximo");

    return isRequired ? schema.required("El campo es requerido").nullable() : schema.optional();
  };
};