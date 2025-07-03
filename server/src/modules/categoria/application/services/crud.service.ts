import { ICrudService, ResponseDto, CreateDto, UpdateDto, Mapper } from "@/modules/categoria/application";
import { UpdateDomain, IFacadeRepository } from "@/modules/categoria/domain";
import { DatosError, NotFoundError } from "@/errors";

/**
 * Clase que encapsula la logica de negocio para operaciones CRUD.
 * 
 * Se comunica con la capa de repositorio para acceder a los datos y se encarga de transformar los datos
 * en DTOs para ser consumidos por el controlador.
 *
 * @class CrudService
 * @implements ICrudService
 * @see IFacadeRepository Para acceder a los datos
*/
class CrudService implements ICrudService {
  /**
   * @param {IFacadeRepository} facadeRepository Implementacion del repositorio
  */
  constructor(private facadeRepository: IFacadeRepository) {};

  public async getCategorias(): Promise<ResponseDto[]> {
    const categorias = await this.facadeRepository.getCategorias();
    
    if (!categorias || categorias.length === 0) {
      throw new NotFoundError("No se encontraron categorias");
    };
    
    return Mapper.toListDto(categorias);
  };

  public async createCategoria(data: CreateDto): Promise<ResponseDto> {
    const categoriaExists = await this.facadeRepository.getCategoriaNombre(data.nombreCategoria);

    if (categoriaExists) throw new DatosError("La categoria ya existe");

    const newCategoria = Mapper.fromCreateDtoToDomain(data);

    const savedCategoria = await this.facadeRepository.createCategoria(newCategoria);

    if (!savedCategoria) throw new NotFoundError("No se pudo crear la categoria");

    return Mapper.toResponseDto(savedCategoria);
  };

  public async updateCategoria(id: number, dto: UpdateDto): Promise<ResponseDto> {
    const categoriaExiste = await this.facadeRepository.getCategoriaId(id);
    
    if (!categoriaExiste) throw new NotFoundError("La categotia no existe");
    
    const updatedCategoria = Mapper.fromUpdateDtoToDomain(dto);

    const hasNoChanges = Object.keys(updatedCategoria).every(key => {
      const typedKey = key as keyof UpdateDomain;
      return updatedCategoria[typedKey] === categoriaExiste[typedKey];
    });
    
    if (hasNoChanges) throw new DatosError("No hay cambios en los datos proporcionados");
    
    const savedCategoria = await this.facadeRepository.updateCategoria(
      id, updatedCategoria
    );
    
    if (!savedCategoria) throw new NotFoundError("No se pudo actualizar la categoria");
    
    return Mapper.toResponseDto(savedCategoria);
  };
};

export default CrudService;