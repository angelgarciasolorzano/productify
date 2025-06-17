import { Router } from "express";
import { AuthController } from "@/controllers/auth";

const router = Router();

router.post("/login", AuthController.LoginUsuario);

router.post("/logout");

router.get("/verificar-token");

export default router;