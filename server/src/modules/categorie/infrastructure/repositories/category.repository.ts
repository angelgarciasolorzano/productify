import type {
  Category,
  CategoryCreate,
  CategoryUpdate,
  ICategoryCrudRepository,
  ICategoryFinderRepository,
  ICategoryRepository,
} from "../../domain/index.js";

/**
 * Implementacion concreta del repositorio de la tabla categorias que actua como fachada para las
 * operaciones de busqueda y CRUD, delegando a los repositorios especializados.
 *
 * @see ICategoryFinderRepository Para operaciones de consulta/busqueda
 * @see ICategoryCrudRepository Para operaciones CRUD basicas
 */
export class CategoryRepository implements ICategoryRepository {
  /**
   * @param finder Implementacion del repositorio de busqueda
   * @param crud Implementacion del repositorio Crud
   */
  public constructor(
    private readonly finder: ICategoryFinderRepository,
    private readonly crud: ICategoryCrudRepository,
  ) {}

  public async getCategoryById(id: number): Promise<Category | null> {
    return await this.finder.getCategoryById(id);
  }

  public async getCategoryByName(name: string): Promise<Category | null> {
    return await this.finder.getCategoryByName(name);
  }

  public async getCategories(): Promise<Category[]> {
    return await this.crud.getCategories();
  }

  public async createCategory(data: CategoryCreate): Promise<Category> {
    return await this.crud.createCategory(data);
  }

  public async updateCategory(id: number, data: CategoryUpdate): Promise<Category> {
    return await this.crud.updateCategory(id, data);
  }
}
