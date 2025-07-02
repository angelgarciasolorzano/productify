import { CategoriaUpdateDomain, ICategoriaRepository } from "@/modules/categoria/domain";
import { 
  ICategoriaCRUDService, CategoriaResponseDto, CreateCategoriaDto, 
  CategoriaApplicationMapper, UpdateCategoriaDto 
} from "@/modules/categoria/application";
import { DatosError, NotFoundError } from "@/errors";

/**
 * @class CategoriaCRUDService
 * @implements ICategoriaCRUDService
 * @description Clase que encapsula la logica de negocio para operaciones CRUD de Categorias
*/
class CategoriaCRUDService implements ICategoriaCRUDService {
  /**
   * @constructor CategoriaCRUDService
   * @description Crea una instancia de CategoriaCRUDService
   * @param categoriaRepository Instancia de CategoriaRepository
  */
  constructor(private categoriaRepository: ICategoriaRepository) {};

  public async getCategorias(): Promise<CategoriaResponseDto[]> {
    const categorias = await this.categoriaRepository.getCategorias();
    
    if (!categorias || categorias.length === 0) {
      throw new NotFoundError("No se encontraron categorias");
    };
    
    return CategoriaApplicationMapper.toDtoList(categorias);
  };

  public async createCategoria(data: CreateCategoriaDto): Promise<CategoriaResponseDto> {
    const categoriaExists = await this.categoriaRepository.getCategoriaNombre(data.nombreCategoria);

    if (categoriaExists) throw new DatosError("La categoria ya existe");

    const newCategoria = CategoriaApplicationMapper.fromCreateDtoToDomain(data);

    const savedCategoria = await this.categoriaRepository.createCategoria(newCategoria);

    if (!savedCategoria) throw new NotFoundError("No se pudo crear la categoria");

    return CategoriaApplicationMapper.toResponseDto(savedCategoria);
  };

  public async updateCategoria(id: number, dto: UpdateCategoriaDto): Promise<CategoriaResponseDto> {
    const categoriaExiste = await this.categoriaRepository.getCategoriaId(id);
    
    if (!categoriaExiste) throw new NotFoundError("La categotia no existe");
    
    const updatedCategoria = CategoriaApplicationMapper.fromUpdateDtoToDomain(dto);

    const hasNoChanges = Object.keys(dto).every(key => {
      const typedKey = key as keyof CategoriaUpdateDomain;
      return updatedCategoria[typedKey] === categoriaExiste[typedKey];
    });
    
    if (hasNoChanges) throw new DatosError("No hay cambios en los datos proporcionados");
    
    const savedCategoria = await this.categoriaRepository.updateCategoria(
      id, updatedCategoria
    );
    
    if (!savedCategoria) throw new NotFoundError("No se pudo actualizar la categoria");
    
    return CategoriaApplicationMapper.toResponseDto(savedCategoria);
  };
};

export default CategoriaCRUDService;