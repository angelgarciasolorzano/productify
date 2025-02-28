import { Router } from "express";
import { AuthController } from "@/controllers/auth";
import { LoginSchema } from "@/schemas/auth";
import { validarDatos } from "@/middleware";

const router = Router();

router.post("/login", validarDatos(LoginSchema), AuthController.loginUsuario);

router.post("/logout");

router.get("/verificar-token");

export default router;