import { Router } from "express";

import { categoryRouter } from "@productify/modules/categorie/category.module.js";
import { RouterPrefix } from "@productify/shared/constants/index.js";

const router = Router();

router.use(RouterPrefix.API, categoryRouter);

export default router;
