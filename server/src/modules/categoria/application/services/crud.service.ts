import { DatosError, NotFoundError } from "@/shared";

import {
  ICategoriaCrudService,
  CategoriaCreateDto,
  CategoriaUpdateDto,
  CategoriaResponseDto,
  CategoriaMapper
} from "@categoria/application";

import { ICategoriaRepository, CategoriaUpdateDomain } from "@categoria/domain";

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
  constructor(private categoriaRepository: ICategoriaRepository) {};

  public async getCategorias(): Promise<CategoriaResponseDto[]> {
    const categorias = await this.categoriaRepository.getCategorias();
    
    if (!categorias || categorias.length === 0) {
      throw new NotFoundError("No se encontraron categorias");
    };
    
    return CategoriaMapper.toListDto(categorias);
  };

  public async createCategoria(data: CategoriaCreateDto): Promise<CategoriaResponseDto> {
    const categoriaExists = await this.categoriaRepository.getCategoriaNombre(data.nombreCategoria);

    if (categoriaExists) throw new DatosError("La categoria ya existe");

    const newCategoria = CategoriaMapper.fromCreateDtoToDomain(data);

    const savedCategoria = await this.categoriaRepository.createCategoria(newCategoria);

    if (!savedCategoria) throw new NotFoundError("No se pudo crear la categoria");

    return CategoriaMapper.toResponseDto(savedCategoria);
  };

  public async updateCategoria(id: number, dto: CategoriaUpdateDto): Promise<CategoriaResponseDto> {
    const categoriaExiste = await this.categoriaRepository.getCategoriaId(id);
    
    if (!categoriaExiste) throw new NotFoundError("La categotia no existe");
    
    const updatedCategoria = CategoriaMapper.fromUpdateDtoToDomain(dto);

    const hasNoChanges = Object.keys(updatedCategoria).every(key => {
      const typedKey = key as keyof CategoriaUpdateDomain;
      return updatedCategoria[typedKey] === categoriaExiste[typedKey];
    });
    
    if (hasNoChanges) throw new DatosError("No hay cambios en los datos proporcionados");
    
    const savedCategoria = await this.categoriaRepository.updateCategoria(
      id, updatedCategoria
    );
    
    if (!savedCategoria) throw new NotFoundError("No se pudo actualizar la categoria");
    
    return CategoriaMapper.toResponseDto(savedCategoria);
  };
};