interface Categoria {
  id: number;
  nombre: string;
  descripcion?: string;
  estado?: "activo" | "inactivo";
  createdAt?: Date;
  updatedAt?: Date;
};

export default Categoria;