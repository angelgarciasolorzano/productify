export * from "./dtos/input.dto";
export * from "./dtos/output.dto";

export { default as ICategoriaFinderService } from "./interfaces/serviceFinder";
export { default as ICategoriaCRUDService } from "./interfaces/serviceCrud";
export { default as ICategoriaService } from "./interfaces/service";

export { default as CategoriaMapper } from "./mappers/categoria.mapper";

export { default as CategoriaService } from "./services/categoria.service";
export { default as CategoriaFinderService } from "./services/finder.service";
export { default as CategoriaCRUDService } from "./services/crud.service";