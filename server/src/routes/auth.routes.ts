import { Router } from "express";
import { loginUsuario } from "../controllers/authControllers";
import { AuthLoginSchema } from "../schemas";
import { validarDatos } from "../middleware";

const router = Router();

router.post("/login", validarDatos(AuthLoginSchema), loginUsuario);

router.post("/logout");

router.get("/verificar-token");

export default router;