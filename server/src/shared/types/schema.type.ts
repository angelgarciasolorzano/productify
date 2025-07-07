import { ObjectSchema } from "yup";

/**
 * Tipo utilitario que representa un esquema de validacion yup basado en un objeto.
 * 
 * @template T Tipo de objeto que representa el esquema
 * @type SchemaType
 * @example
 * interface Categoria {
 *   id: number;
 *   nombre: string;
 *   descripcion: string;
 *   estado: boolean;
 * };
 * 
 * const squema: SchemaType<Categoria> = yup.object({
 *   id: number().required(),
 *   nombre: string().required(),
 *   descripcion: string().required(),
 *   estado: boolean().required(),
 * });
*/
type SchemaType<T extends object> = ObjectSchema<T>;

export default SchemaType;