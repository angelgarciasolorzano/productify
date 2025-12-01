import { ConflictError, NotFoundError } from "@productify/shared/index.js";
import type { UpdateResult } from "@productify/shared/index.js";

import type { CategorieUpdate, ICategorieRepository } from "../../domain/index.js";
import type { CategorieCreateDTO, CategorieDTO, CategorieUpdateDTO } from "../dtos/index.js";
import type { ICategorieCrudService } from "../interfaces/index.js";
import { CategorieMapper } from "../mappers/categorie.mapper.js";

/**
 * Servicio para operaciones CRUD de categorías.
 *
 * Encapsula la lógica de negocio para crear, leer, actualizar y eliminar categorías,
 * comunicándose con el repositorio y transformando datos en DTOs para el controlador.
 *
 * @see ICategorieRepository Para acceder a los datos
 */
export class CategorieCrudService implements ICategorieCrudService {
  /**
   * Crea una instancia del servicio.
   *
   * @param categorieRepository Implementación del repositorio CRUD
   */
  public constructor(private readonly categorieRepository: ICategorieRepository) {}

  public async getCategories(): Promise<CategorieDTO[]> {
    const categories = await this.categorieRepository.getCategories();

    if (!categories || categories.length === 0) {
      throw new NotFoundError("No se encontraron categorias");
    }

    return CategorieMapper.toDataListDTO(categories);
  }

  public async createCategory(data: CategorieCreateDTO): Promise<CategorieDTO> {
    const categoryExists = await this.categorieRepository.getCategorieName(data.name);

    if (categoryExists) throw new ConflictError("La categoria ya existe");
    const newCategory = CategorieMapper.fromCreateDTOtoDomain(data);

    const savedCategory = await this.categorieRepository.createCategorie(newCategory);

    return CategorieMapper.toDataDTO(savedCategory);
  }

  public async updateCategory(
    id: number,
    dto: CategorieUpdateDTO,
  ): Promise<UpdateResult<CategorieDTO>> {
    const categoryExists = await this.categorieRepository.getCategorieId(id);

    if (!categoryExists) throw new NotFoundError("La categoria no existe");

    const categoryWithSameName = await this.categorieRepository.getCategorieName(dto.name);

    if (categoryWithSameName && categoryWithSameName.id !== id) {
      throw new ConflictError("Ya existe una categoria con el mismo nombre");
    }

    const updatedCategory = CategorieMapper.fromUpdateDTOtoDomain(dto);

    const hasNoChanges = Object.keys(updatedCategory).every((key) => {
      const typedKey = key as keyof CategorieUpdate;
      return updatedCategory[typedKey] === categoryExists[typedKey];
    });

    if (hasNoChanges) {
      return {
        hasChanged: false,
        data: CategorieMapper.toDataDTO(categoryExists),
      };
    }

    const savedCategory = await this.categorieRepository.updateCategorie(id, updatedCategory);

    return {
      hasChanged: true,
      data: CategorieMapper.toDataDTO(savedCategory),
    };
  }
}
