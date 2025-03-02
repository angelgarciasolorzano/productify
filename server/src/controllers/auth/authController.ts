import { Response } from "express";
import { RequestType } from "@/types";
import { LoginType } from "@/schemas/auth";
import { UsuarioService } from "@/services/usuarios";
import { HandleError } from "@/errors";

class AuthController extends HandleError {
  public LoginUsuario = async (request: RequestType<LoginType>, response: Response): Promise<void> => {
    try {
      const usuario = await UsuarioService.auth.loginUsuario(request.body);

      response.json(usuario);
    } catch (error) {
      this.responseError(error, response);
    }
  };
};

export default new AuthController();