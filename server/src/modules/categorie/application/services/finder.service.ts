import { NotFoundError } from "@productify/shared/index.js";

import type { ICategorieFinderRepository } from "../../domain/index.js";
import type { CategorieDTO } from "../dtos/categorieOutput.dto.js";
import type { ICategorieFinderService } from "../interfaces/serviceFinder.interface.js";
import { CategorieMapper } from "../mappers/categorie.mapper.js";

/**
 * Servicio para operaciones de búsqueda de categorías.
 *
 * Encapsula la lógica de negocio para buscar categorías, comunicándose con el repositorio
 * y transformando los datos en DTOs para el controlador.
 *
 * @see ICategorieFinderRepository Para acceder a los datos
 */
export class CategorieFinderService implements ICategorieFinderService {
  /**
   * Crea una instancia del servicio.
   *
   * @param categorieRepository Implementación del repositorio de búsqueda
   */
  public constructor(private categorieRepository: ICategorieFinderRepository) {}

  public async getCategorieId(id: number): Promise<CategorieDTO> {
    const categorie = await this.categorieRepository.getCategorieId(id);

    if (!categorie) throw new NotFoundError("No se encontro la categoria");

    return CategorieMapper.toDataDTO(categorie);
  }
}
