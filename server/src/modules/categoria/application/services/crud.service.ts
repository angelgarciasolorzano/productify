import { ConflictError, NotFoundError, UpdateResult } from "@/shared";

import {
  ICategoriaCrudService,
  CategoriaCreateDto,
  CategoriaUpdateDto,
  CategoriaDto,
  CategoriaMapper
} from "@categoria/application";

import { ICategoriaRepository, CategoriaUpdate } from "@categoria/domain";

/**
 * Clase que encapsula la logica de negocio para operaciones CRUD.
 * 
 * Se comunica con la capa de repositorio para acceder a los datos y se encarga de transformar los datos
 * en DTOs para ser consumidos por el controlador.
 *
 * @class CategoriaCrudService
 * @implements ICategoriaCrudService
 * @see ICategoriaRepository Para acceder a los datos
*/
export class CategoriaCrudService implements ICategoriaCrudService {
  /**
   * @param {ICategoriaRepository} categoriaRepository Implementacion del repositorio
  */
  constructor(private readonly categoriaRepository: ICategoriaRepository) {};

  public async getCategorias(): Promise<CategoriaDto[]> {
    const categorias = await this.categoriaRepository.getCategorias();
    
    if (!categorias || categorias.length === 0) {
      throw new NotFoundError("No se encontraron categorias");
    };
    
    return CategoriaMapper.toDataListDto(categorias);
  };

  public async createCategoria(data: CategoriaCreateDto): Promise<CategoriaDto> {
    const categoriaExists = await this.categoriaRepository.getCategoriaNombre(data.nombreCategoria);

    if (categoriaExists) throw new ConflictError("La categoria ya existe");

    const newCategoria = CategoriaMapper.fromCreateDtoToDomain(data);

    const savedCategoria = await this.categoriaRepository.createCategoria(newCategoria);

    return CategoriaMapper.toDataDto(savedCategoria);
  };

  public async updateCategoria(id: number, dto: CategoriaUpdateDto): Promise<UpdateResult<CategoriaDto>> {
    const categoriaExists = await this.categoriaRepository.getCategoriaId(id);
    
    if (!categoriaExists) throw new NotFoundError("La categoria no existe");

    const categoriaWithSameName = await this.categoriaRepository.getCategoriaNombre(
      dto.nombreCategoria
    );

    if (categoriaWithSameName && categoriaWithSameName.id !== id) {
      throw new ConflictError("Ya existe una categoria con el mismo nombre");
    };

    const updatedCategoria = CategoriaMapper.fromUpdateDtoToDomain(dto);

    const hasNoChanges = Object.keys(updatedCategoria).every(key => {
      const typedKey = key as keyof CategoriaUpdate;
      return updatedCategoria[typedKey] === categoriaExists[typedKey];
    });
    
    if (hasNoChanges) return { 
      hasChanged: false, 
      data: CategoriaMapper.toDataDto(categoriaExists) 
    };

    const savedCategoria = await this.categoriaRepository.updateCategoria(
      id, updatedCategoria
    );

    return { hasChanged: true, data: CategoriaMapper.toDataDto(savedCategoria) };
  };
};