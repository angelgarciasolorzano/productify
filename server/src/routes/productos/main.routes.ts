import { Router } from "express";
import categoria from "./categoria.routes";
import producto from "./producto.routes";
import proveedor from "./proveedor.routes";

const router = Router();

router.use("/categorias", categoria);

router.use("/productos", producto);

router.use("/proveedores", proveedor);

export default router;