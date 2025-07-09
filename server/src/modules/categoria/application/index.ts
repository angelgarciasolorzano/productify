export * from "./dtos/categoriaInput.dto";
export * from "./dtos/categoriaOutput.dto";

export { default as ICategoriaService } from "./interfaces/service.interface";
export { default as ICategoriaFinderService } from "./interfaces/finder.interface";
export { default as ICategoriaCrudService } from "./interfaces/crud.interface";

export { default as CategoriaMapper } from "./mappers/categoria.mapper";

export { default as CategoriaService } from "./services/categoria.service";
export { default as CategoriaFinderService } from "./services/finder.service";
export { default as CategoriaCrudService } from "./services/crud.service";