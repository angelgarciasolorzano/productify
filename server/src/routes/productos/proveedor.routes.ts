import { Router } from "express";
import { ProveedorController } from "@/controllers/productos";

const router = Router();

router.get("/obtener-proveedores", ProveedorController.getProveedores);

router.get("/obtener-proveedor/:id", ProveedorController.getProveedorId);

router.post("/registrar-proveedor", ProveedorController.createProveedor);

router.put("/actualizar-proveedor/:id", ProveedorController.updateProveedor);

export default router;