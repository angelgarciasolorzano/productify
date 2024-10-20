import { Response } from "express";
import { LoginType } from "../schemas/auth.schema";

import Usuario from "../models/usuarioModels";
import RequestType from "../types/requestTypes";

export const loginUsuario = async (request: RequestType<LoginType>, response: Response): Promise<void> => {
  const { correo_Usuario } = request.body;

  try {
    const usuario = await Usuario.findOne({ where: { correo_Usuario } });

    if (!usuario) {
      response.status(404).json({ message: "El usuario no existe" });
    };
    
    response.json(usuario);
  } catch (error) {
    response.status(404).json({ message: "Error al iniciar sesion" });
  };
};