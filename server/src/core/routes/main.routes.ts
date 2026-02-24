import { Router } from "express";

import { categoryRouter } from "@productify/modules/index.js";
import { RouterPrefix } from "@productify/shared/index.js";

const router = Router();

router.use(RouterPrefix.API, categoryRouter);

export default router;
