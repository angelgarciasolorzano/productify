/**
 * @file categoriaResponse.dto.ts
 * @description Archivo que define la estructura de los datos de categoria devueltos por la capa service
 * @author Angel Garcia
 * @version 1.0
*/

/**
 * @interface CategoriaResponseDto
 * @description Define la estructura de los datos de categoria devueltos por la capa service
*/
interface CategoriaResponseDto {
  id: number;
  nombre: string;
  descripcion?: string;
  estado: "activo" | "inactivo";
  fechaCreacion?: Date;
  fechaModificacion?: Date;
};

export default CategoriaResponseDto;