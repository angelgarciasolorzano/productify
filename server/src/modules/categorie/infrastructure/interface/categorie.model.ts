interface CategorieModel {
  id: number;
  name: string;
  description?: string | null;
  status: "activo" | "inactivo";
  createdAt: Date;
  updatedAt: Date;
}

type CategorieCreationModel = Omit<CategorieModel, "id" | "status" | "createdAt" | "updatedAt">;

export { CategorieModel, CategorieCreationModel };
