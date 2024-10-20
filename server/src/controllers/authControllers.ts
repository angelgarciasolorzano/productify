import { Response } from "express";
import { LoginType } from "../schemas/auth.schema";

import Usuario from "../models/usuarioModels";
import RequestType from "../types/requestTypes";

export const loginUsuario = async (request: RequestType<LoginType>, response: Response): Promise<any> => {
  const { correo_Usuario } = request.body;

  try {
    const usuario = await Usuario.findOne({ where: { correo_Usuario } });

    if (!usuario) {
      return response.status(404).json({ message: "El usuario no existe" });
    };
    
    return response.json(usuario);
  } catch (error) {
    return response.status(404).json({ message: "Error al iniciar sesion" });
  };
};