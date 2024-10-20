import { Router } from "express";
import { loginUsuario } from "../controllers/authControllers";

const router = Router();

router.post("/login", loginUsuario);

router.post("/logout");

router.get("/verificar-token");

export default router;