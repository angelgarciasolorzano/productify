/**
 * DTO para crear una categoría.
 *
 * Contiene los datos mínimos requeridos para registrar una categoría.
 */
interface CategorieCreateDTO {
  name: string;
  description?: string | null;
}

/**
 * DTO para actualizar una categoría.
 *
 * Extiende los datos de creación y agrega el estado de la categoría.
 */
type CategorieUpdateDTO = CategorieCreateDTO & {
  status: "activo" | "inactivo";
};

export { CategorieCreateDTO, CategorieUpdateDTO };
