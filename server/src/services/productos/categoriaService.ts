import { Categoria } from "@/models/productos";
import { CategoriaType } from "@/schemas/productos";
import { CategoriaRepository } from "@/repositories/productos";
import { NotFoundError, DatosError, HandleError,  } from "@/errors";

class CategoriaService extends HandleError {
  private validateCategoriaId(id_Categoria: Categoria["id_categoria"]): void {
    if (!id_Categoria || id_Categoria < 1 || isNaN(id_Categoria)) {
      throw new DatosError("El id de la categoria no es valido");
    };
  };

  public async getCategorias(): Promise<Categoria[]> {
    try {
      const categorias = await CategoriaRepository.getCategorias();

      if (!categorias || categorias.length === 0) {
        throw new NotFoundError("No se encontraron categorias");
      };

      return categorias;
    } catch (error) {
      this.handleError(error, "Error al obtener las categorias");
    }
  };

  public async getCategoriaId(id_Categoria: Categoria["id_categoria"]): Promise<Categoria> {
    this.validateCategoriaId(id_Categoria);

    try {
      const categoria = await CategoriaRepository.getCategoriaId(id_Categoria);

      if (!categoria) throw new NotFoundError("No se encontro la categoria");

      return categoria;
    } catch (error) {
      this.handleError(error, "Error al obtener la categoria");
    }
  };

  public async createCategoria(data: CategoriaType): Promise<Categoria> {
    try {
      const categoriaExiste = await CategoriaRepository.getCategoriaNombre(data.nombre_categoria);

      if (categoriaExiste) throw new DatosError("La categoria ya existe");

      const categoria = await CategoriaRepository.createCategoria(data);

      if (!categoria) throw new NotFoundError("No se pudo crear la categoria");

      return categoria;
    } catch (error) {
      this.handleError(error, "Error al crear la categoria");
    }
  };

  public async updateCategoria(id_Categoria: Categoria["id_categoria"], data: CategoriaType): Promise<Categoria> {
    this.validateCategoriaId(id_Categoria);

    try {
      const categoriaExiste = await CategoriaRepository.getCategoriaId(id_Categoria);

      if (!categoriaExiste) throw new NotFoundError("La categotia no existe");

      const updateDate = (
        categoriaExiste.nombre_categoria === data.nombre_categoria &&
        categoriaExiste.descripcion_categoria === data.descripcion_categoria &&
        categoriaExiste.estado_categoria === data.estado_categoria
      );

      if (updateDate) throw new DatosError("No hay cambios en los datos proporcionados");
  
      const categoria = await CategoriaRepository.updateCategoria(categoriaExiste, data);
  
      if (!categoria) throw new NotFoundError("No se pudo actualizar la categoria");
  
      return categoria;
    } catch (error) {
      this.handleError(error, "Error al actualizar la categoria");
    }
  };
};

export default new CategoriaService();