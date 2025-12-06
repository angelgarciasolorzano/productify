/**
 * DTO para crear una categoría.
 *
 * Contiene los datos mínimos requeridos para registrar una categoría.
 */
interface CategoryCreateDTO {
  name: string;
  description?: string | null;
}

/**
 * DTO para actualizar una categoría.
 *
 * Extiende los datos de creación y agrega el estado de la categoría.
 */
type CategoryUpdateDTO = CategoryCreateDTO & {
  status: "activo" | "inactivo";
};

export { CategoryCreateDTO, CategoryUpdateDTO };
