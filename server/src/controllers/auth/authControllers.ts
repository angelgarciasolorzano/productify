import { Response } from "express";
import { LoginType } from "@/schemas/auth";
import { AuthService } from "@/services/auth";
import { RequestType } from "@/types";
import { DatosError, NotFoundError } from "@/errors";

class AuthController {
  public async loginUsuario(request: RequestType<LoginType>, response: Response): Promise<void> {
    try {
      const usuario = await AuthService.loginUsuario(request.body);
      
      response.json(usuario);
    } catch (error) {
      if (error instanceof DatosError) {
        response.status(error.statusCode).json({ message: error.message });
        return;
      };

      if (error instanceof NotFoundError) {
        response.status(error.statusCode).json({ message: error.message });
        return;
      };

      response.status(500).json({ message: "Error interno del servidor" });
    }
  };
};

export default new AuthController();