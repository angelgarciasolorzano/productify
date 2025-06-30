import { Router } from "express";

import { categoriaRouter } from "@/modules/categoria";

const router = Router();

router.use("/api/categoria", categoriaRouter);

export default router;