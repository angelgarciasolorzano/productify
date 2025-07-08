import { Router } from "express";
import { categoriaRouter } from "@/modules"

const router = Router();

router.use("/api/categoria", categoriaRouter);

export default router;