import { Response } from "express";
import { PublicRequestWithBody, PublicRequest, ResponseSuccess } from "@/shared";
import { ICategoriaService, CategoriaCreateDto, CategoriaUpdateDto } from "@categoria/application";
import { ICategoriaController } from "@categoria/presentation";

/**
 * Clase que representa el controlador de la aplicación para la gestión de las categorías.
 * 
 * Se comunica con la capa del servicio para acceder a los metodos y responder con la información 
 * solicitada.
 * 
 * @class CategoriaController
 * @implements ICategoriaController
 * @see ICategoriaService Para operaciones de consulta/busqueda y CRUD
*/
export class CategoriaController implements ICategoriaController {
  /**
   * @param {ICategoriaService} categoriaService Implementacion del servicio de categorias
  */
  constructor(private readonly categoriaService: ICategoriaService) {};

  public getCategorias = async(request: PublicRequest, response: Response): Promise<void> => {
    const categorias = await this.categoriaService.getCategorias();
    const responseHandler = new ResponseSuccess(request, response);

    responseHandler.sendSuccess(categorias, "Lista de categorias obtenida correctamente");
  };

  public getCategoriaId = async(
    request: PublicRequestWithBody<never, { id: string; }>, 
    response: Response
  ): Promise<void> => {
    const categoria = await this.categoriaService.getCategoriaId(Number(request.params.id));
    const responseHandler = new ResponseSuccess(request, response);

    responseHandler.sendSuccess(categoria, "Categoría obtenida correctamente");
  };

  public createCategoria = async(
    request: PublicRequestWithBody<CategoriaCreateDto>, 
    response: Response
  ): Promise<void> => {
    const categoria = await this.categoriaService.createCategoria(request.body);
    const responseHandler = new ResponseSuccess(request, response);

    responseHandler.sendCreated(categoria, "Categoría creada correctamente");
  };

  public updateCategoria = async(
    request: PublicRequestWithBody<CategoriaUpdateDto, { id: string; }>, 
    response: Response
  ): Promise<void> => {
    const { data, hasChanged } = await this.categoriaService.updateCategoria(
      Number(request.params.id), request.body
    );

    const responseHandler = new ResponseSuccess(request, response);

    if (!hasChanged) {
      responseHandler.sendNoChanges(data);
      return;
    };

    responseHandler.sendUpdated(data, "Categoría actualizada correctamente");
  };
};