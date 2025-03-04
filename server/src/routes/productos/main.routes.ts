import { Router } from "express";
import categoria from "./categoria.routes";
import producto from "./producto.routes";
import proveedor from "./proveedor.routes";

const router = Router();

router.use("/categoria", categoria);

router.use("/producto", producto);

router.use("/proveedor", proveedor);

export default router;