import { Response } from "express";
import { AuthLoginType } from "../schemas";
import { usuarioModels } from "../models";
import { RequestType } from "../types";

export const loginUsuario = async (request: RequestType<AuthLoginType>, response: Response): Promise<any> => {
  const { correo_Usuario } = request.body;

  try {
    const usuario = await usuarioModels.findOne({ where: { correo_Usuario } });

    if (!usuario) {
      return response.status(404).json({ message: "El usuario no existe" });
    };
    
    return response.json(usuario);
  } catch (error) {
    return response.status(404).json({ message: "Error al iniciar sesion" });
  };
};