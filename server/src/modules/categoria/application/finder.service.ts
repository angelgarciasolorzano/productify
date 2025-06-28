import { ICategoriaRepository } from "@/modules/categoria/domain";
import { 
  ICategoriaFinderService, CategoriaResponseDto, CategoriaApplicationMapper 
} from "@/modules/categoria/application";
import { NotFoundError } from "@/errors";

/**
 * @class CategoriaFinderService
 * @implements ICategoriaFinderService
 * @description Clase que encapsula la logica de negocio para operaciones de busqueda de Categorias
*/
class CategoriaFinderService implements ICategoriaFinderService {
  /**
   * @constructor CategoriaFinderService
   * @description Crea una instancia de CategoriaFinderService
   * @param categoriaRepository Instancia de CategoriaRepository
  */
  constructor(private categoriaRepository: ICategoriaRepository) {};

  public async getCategoriaId(id: number): Promise<CategoriaResponseDto> {
    const categoria = await this.categoriaRepository.getCategoriaId(id);

    if (!categoria) throw new NotFoundError("No se encontro la categoria");

    return CategoriaApplicationMapper.toResponseDto(categoria);
  };
};

export default CategoriaFinderService;