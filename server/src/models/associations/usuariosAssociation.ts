import { Telefono, Usuario, Cargo } from "../usuarios";
import { Producto } from "../productos";

function initializeAssociations() {
  Telefono.associate({ Usuario });
  Cargo.associate({ Usuario });
  Usuario.associate({ Cargo, Producto, Telefono });
};

initializeAssociations();

export { Telefono, Cargo, Usuario };