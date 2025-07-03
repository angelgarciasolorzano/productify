export * from "./dtos/input.dto";
export * from "./dtos/output.dto";

export { default as IService } from "./interfaces/service";
export { default as IFinderService } from "./interfaces/serviceFinder";
export { default as ICrudService } from "./interfaces/serviceCrud";

export { default as CategoriaMapper } from "./mappers/categoria.mapper";

export { default as CategoriaService } from "./services/categoria.service";
export { default as CategoriaFinderService } from "./services/finder.service";
export { default as CategoriaCRUDService } from "./services/crud.service";