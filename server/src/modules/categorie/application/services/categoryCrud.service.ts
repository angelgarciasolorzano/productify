import { ConflictError, NotFoundError } from "@productify/shared/errors/errors.js";
import type { UpdateResult } from "@productify/shared/types/updateResult.type.js";

import type { CategoryUpdate, ICategoryRepository } from "../../domain/index.js";
import type { CategoryCreateDTO, CategoryDTO, CategoryUpdateDTO } from "../dtos/index.js";
import type { ICategoryCrudService } from "../interfaces/categoryServiceCrud.interface.js";
import { CategoryMapper } from "../mappers/category.mapper.js";

/**
 * Servicio para operaciones CRUD de categorías.
 *
 * Encapsula la lógica de negocio para crear, leer, actualizar y eliminar categorías,
 * comunicándose con el repositorio y transformando datos en DTOs para el controlador.
 *
 * @see ICategoryRepository Para acceder a los datos
 */
export class CategoryCrudService implements ICategoryCrudService {
  /**
   * Crea una instancia del servicio.
   *
   * @param categoryRepository Implementación del repositorio CRUD
   */
  public constructor(private readonly categoryRepository: ICategoryRepository) {}

  public async getCategories(): Promise<CategoryDTO[]> {
    const categories = await this.categoryRepository.getCategories();

    if (!categories || categories.length === 0) {
      throw new NotFoundError("No se encontraron categorias");
    }

    return CategoryMapper.toDataListDTO(categories);
  }

  public async createCategory(data: CategoryCreateDTO): Promise<CategoryDTO> {
    const categoryExists = await this.categoryRepository.getCategoryByName(data.name);

    if (categoryExists) throw new ConflictError("La categoria ya existe");
    const newCategory = CategoryMapper.fromCreateDTOtoDomain(data);

    const savedCategory = await this.categoryRepository.createCategory(newCategory);

    return CategoryMapper.toDataDTO(savedCategory);
  }

  public async updateCategory(
    id: number,
    dto: CategoryUpdateDTO,
  ): Promise<UpdateResult<CategoryDTO>> {
    const categoryExists = await this.categoryRepository.getCategoryById(id);

    if (!categoryExists) throw new NotFoundError("La categoria no existe");

    const categoryWithSameName = await this.categoryRepository.getCategoryByName(dto.name);

    if (categoryWithSameName && categoryWithSameName.id !== id) {
      throw new ConflictError("Ya existe una categoria con el mismo nombre");
    }

    const updatedCategory = CategoryMapper.fromUpdateDTOtoDomain(dto);

    const hasNoChanges = Object.keys(updatedCategory).every((key) => {
      const typedKey = key as keyof CategoryUpdate;

      return updatedCategory[typedKey] === categoryExists[typedKey];
    });

    if (hasNoChanges) {
      return {
        hasChanged: false,
        data: CategoryMapper.toDataDTO(categoryExists),
      };
    }

    const savedCategory = await this.categoryRepository.updateCategory(id, updatedCategory);

    return {
      hasChanged: true,
      data: CategoryMapper.toDataDTO(savedCategory),
    };
  }
}
