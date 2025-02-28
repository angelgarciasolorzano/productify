import { Router } from "express";

import productos from "./productos/main.routes";
import auth from "./auth/main.routes";

const router = Router();

router.use("/api", productos);

router.use("/api", auth);

export default router;