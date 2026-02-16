import { Router } from "express";

import { categoryRouter } from "@productify/modules/index.js";
import { RoutePrefix } from "@productify/shared/index.js";

const router = Router();

router.use(RoutePrefix.API, categoryRouter);

export default router;
