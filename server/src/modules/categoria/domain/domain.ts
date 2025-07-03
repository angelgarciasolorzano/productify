/**
 * Interfaz que representa la entidad de dominio.
 * 
 * @interface Domain
*/
interface Domain {
  id: number;
  nombre: string;
  descripcion?: string;
  estado: "activo" | "inactivo";
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Interfaz que representa la entidad de dominio de creación.
 * 
 * @interface CreateDomain
*/
type CreateDomain = Omit<Domain, "id" | "estado" | "createdAt" | "updatedAt">;

/**
 * Interfaz que representa la entidad de dominio de actualización.
 * 
 * @interface UpdateDomain
*/
type UpdateDomain = Partial<Omit<Domain, "id" | "createdAt" | "updatedAt">>;

export { Domain, CreateDomain, UpdateDomain };