/**
 * Interfaz que representa los atributos de la tabla usuarios.
 * 
 * @interface IUsuarioDb
*/
interface IUsuarioDb {
  id_usuario: number;
  nombre_usuario: string;
  apellidos_usuario: string;
  sexo_usuario: "M" | "F";
  cedula_usuario: string;
  departamento_usuario?: string;
  direccion_usuario?: string;
  correo_usuario: string;
  contra_usuario: string;
  estado_usuario: "activo" | "inactivo";
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Interfaz que define los atributos obligatorios para crear un usuario.
 *
 * @interface IUsuarioCreationDb
*/
interface IUsuarioCreationDb extends Omit<IUsuarioDb, 
  "id_usuario" | "createdAt" | "updatedAt"
> {
  id_usuario?: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export { IUsuarioDb, IUsuarioCreationDb };