import { CategoriaResponseDto } from "@/modules/categoria/application";

type UpdateCategoriaDto = Partial<Omit<
  CategoriaResponseDto, "id" | "fechaModificacion" | "fechaCreacion"
>>;

export default UpdateCategoriaDto;