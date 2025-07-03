import { NotFoundError } from "@/errors";
import { ICategoriaRepository } from "@/modules/categoria/domain";

import { 
  ICategoriaFinderService, 
  CategoriaResponseDto, 
  CategoriaMapper 
} from "@/modules/categoria/application";

/**
 * Clase que encapsula la logica de negocio para operaciones de busqueda de Categorias.
 * 
 * Se comunica con la capa de repositorio para acceder a los datos y se encarga de transformar los datos
 * en DTOs para ser consumidos por el controlador.
 * 
 * @class CategoriaFinderService
 * @implements ICategoriaFinderService
 * @see ICategoriaRepository Para acceder a los datos
*/
class CategoriaFinderService implements ICategoriaFinderService {
  /**
   * @param {ICategoriaRepository} categoriaRepository Implementacion del repositorio de Categoria
  */
  constructor(private categoriaRepository: ICategoriaRepository) {};

  public async getCategoriaId(id: number): Promise<CategoriaResponseDto> {
    const categoria = await this.categoriaRepository.getCategoriaId(id);

    if (!categoria) throw new NotFoundError("No se encontro la categoria");

    return CategoriaMapper.toResponseDto(categoria);
  };
};

export default CategoriaFinderService;