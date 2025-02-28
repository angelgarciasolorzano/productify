import { Categoria, Proveedor, Producto, ProductoProveedor } from "../productos";
import { Usuario } from "../usuarios";

function initializeAssociations() {
  Categoria.associate({ Producto });
  Proveedor.associate({ Producto });
  Producto.associate({ Categoria, Proveedor, Usuario });
  ProductoProveedor.associate({ Producto, Proveedor });
};

initializeAssociations();

export { Categoria, Proveedor, Producto, ProductoProveedor };