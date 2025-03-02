import { Router } from "express";

const router = Router();

router.post("/login");

router.post("/logout");

router.get("/verificar-token");

export default router;