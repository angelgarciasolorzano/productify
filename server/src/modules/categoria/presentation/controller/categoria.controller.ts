import { Response } from "express";
import { PublicRequestWithBody, PublicRequest } from "@/shared";
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

  public async getCategorias(_request: PublicRequest, response: Response): Promise<void> {
    const categorias = await this.categoriaService.getCategorias();
    response.json(categorias)
  };

  public async getCategoriaId(
    request: PublicRequestWithBody<never, { id: string; }>, 
    response: Response
  ): Promise<void> {
    const categoria = await this.categoriaService.getCategoriaId(Number(request.params.id));
    response.json(categoria);
  };

  public async createCategoria(
    request: PublicRequestWithBody<CategoriaCreateDto>, 
    response: Response
  ): Promise<void> {
    const categoria = await this.categoriaService.createCategoria(request.body);
    response.json(categoria);
  };

  public async updateCategoria(
    request: PublicRequestWithBody<CategoriaUpdateDto, { id: string; }>, 
    response: Response
  ): Promise<void> {
    const categoria = await this.categoriaService.updateCategoria(
      Number(request.params.id), request.body
    );

    response.json(categoria);
  };
};