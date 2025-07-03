import { ICrudService, ResponseDto, CreateDto, UpdateDto, Mapper } from "@/modules/categoria/application";
import { CategoriaUpdateDomain, ICategoriaRepository } from "@/modules/categoria/domain";
import { DatosError, NotFoundError } from "@/errors";

/**
 * Clase que encapsula la logica de negocio para operaciones CRUD.
 * 
 * Se comunica con la capa de repositorio para acceder a los datos y se encarga de transformar los datos
 * en DTOs para ser consumidos por el controlador.
 *
 * @class CrudService
 * @implements ICrudService
 * @see ICategoriaRepository Para acceder a los datos
*/
class CrudService implements ICrudService {
  /**
   * @param {ICategoriaRepository} categoriaRepository Implementacion del repositorio de Categoria
  */
  constructor(private categoriaRepository: ICategoriaRepository) {};

  public async getCategorias(): Promise<ResponseDto[]> {
    const categorias = await this.categoriaRepository.getCategorias();
    
    if (!categorias || categorias.length === 0) {
      throw new NotFoundError("No se encontraron categorias");
    };
    
    return Mapper.toListDto(categorias);
  };

  public async createCategoria(data: CreateDto): Promise<ResponseDto> {
    const categoriaExists = await this.categoriaRepository.getCategoriaNombre(data.nombreCategoria);

    if (categoriaExists) throw new DatosError("La categoria ya existe");

    const newCategoria = Mapper.fromCreateDtoToDomain(data);

    const savedCategoria = await this.categoriaRepository.createCategoria(newCategoria);

    if (!savedCategoria) throw new NotFoundError("No se pudo crear la categoria");

    return Mapper.toResponseDto(savedCategoria);
  };

  public async updateCategoria(id: number, dto: UpdateDto): Promise<ResponseDto> {
    const categoriaExiste = await this.categoriaRepository.getCategoriaId(id);
    
    if (!categoriaExiste) throw new NotFoundError("La categotia no existe");
    
    const updatedCategoria = Mapper.fromUpdateDtoToDomain(dto);

    const hasNoChanges = Object.keys(updatedCategoria).every(key => {
      const typedKey = key as keyof CategoriaUpdateDomain;
      return updatedCategoria[typedKey] === categoriaExiste[typedKey];
    });
    
    if (hasNoChanges) throw new DatosError("No hay cambios en los datos proporcionados");
    
    const savedCategoria = await this.categoriaRepository.updateCategoria(
      id, updatedCategoria
    );
    
    if (!savedCategoria) throw new NotFoundError("No se pudo actualizar la categoria");
    
    return Mapper.toResponseDto(savedCategoria);
  };
};

export default CrudService;