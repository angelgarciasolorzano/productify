import { Router } from "express";
import { loginUsuario } from "../controllers/authControllers";
import { LoginSchema } from "../schemas/auth.schema";

import validarDatos from "../middleware/validarDatos";

const router = Router();

router.post("/login", validarDatos(LoginSchema), loginUsuario);

router.post("/logout");

router.get("/verificar-token");

export default router;