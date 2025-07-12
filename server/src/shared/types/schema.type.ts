import { ObjectSchema } from "yup";

/**
 * Tipo utilitario que representa un esquema de validacion yup basado en un objeto.
 * 
 * @type SchemaType
 * @template T Tipo de objeto que representa el esquema
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
export type SchemaType<T extends object> = ObjectSchema<T>;