import { IFinderService, ResponseDto, Mapper } from "@/modules/categoria/application";
import { ICategoriaRepository } from "@/modules/categoria/domain";
import { NotFoundError } from "@/errors";

/**
 * Clase que encapsula la logica de negocio para operaciones de busqueda.
 * 
 * Se comunica con la capa de repositorio para acceder a los datos y se encarga de transformar los datos
 * en DTOs para ser consumidos por el controlador.
 * 
 * @class FinderService
 * @implements IFinderService
 * @see ICategoriaRepository Para acceder a los datos
*/
class FinderService implements IFinderService {
  /**
   * @param {ICategoriaRepository} categoriaRepository Implementacion del repositorio de Categoria
  */
  constructor(private categoriaRepository: ICategoriaRepository) {};

  public async getCategoriaId(id: number): Promise<ResponseDto> {
    const categoria = await this.categoriaRepository.getCategoriaId(id);

    if (!categoria) throw new NotFoundError("No se encontro la categoria");

    return Mapper.toResponseDto(categoria);
  };
};

export default FinderService;