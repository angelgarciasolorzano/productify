import { Router } from "express";

import { categoryRouter } from "@productify/modules/index.js";

const router = Router();

router.use("/api/category", categoryRouter);

export default router;
