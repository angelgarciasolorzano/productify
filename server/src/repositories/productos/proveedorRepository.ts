import { Proveedor } from "@/models/productos";
import { ProveedorType } from "@/schemas/productos";
import { ServerError } from "@/errors";

class ProveedorRepository {
  public async getProveedores(): Promise<Proveedor[]> {
    try {
      return await Proveedor.findAll();
    } catch (error) {
      throw new ServerError("Error al conectar con la base de datos");
    }
  };

  public async getProveedorId(id_proveedor: Proveedor["id_proveedor"]): Promise<Proveedor | null> {
    try {
      return await Proveedor.findByPk(id_proveedor);
    } catch (error) {
      throw new ServerError("Error al conectar con la base de datos");
    }
  };

  public async getProveedorNombre(nombre_proveedor: Proveedor["nombre_proveedor"]): Promise<Proveedor | null> {
    try {
      return await Proveedor.findOne({ where: { nombre_proveedor } });
    } catch (error) {
      throw new ServerError("Error al conectar con la base de datos");
    }
  };

  public async createProveedor(data: ProveedorType): Promise<Proveedor> {
    try {
      return await Proveedor.create(data);
    } catch (error) {
      throw new ServerError("Error al insertar en la base de datos");
    }
  };

  public async updateProveedor(proveedor: Proveedor, data: ProveedorType): Promise<Proveedor | null> {
    try {
      const updateData: ProveedorType = {
        nombre_proveedor: data.nombre_proveedor || proveedor.nombre_proveedor,
        email_proveedor: data.email_proveedor || proveedor.email_proveedor,
        telefono_proveedor: data.telefono_proveedor || proveedor.telefono_proveedor,
        direccion_proveedor: data.direccion_proveedor || proveedor.direccion_proveedor,
        estado_proveedor: data.estado_proveedor || proveedor.estado_proveedor,
      };
  
      return await proveedor.update(updateData);
    } catch (error) {
      throw new ServerError("Error al actualizar en la base de datos");
    }
  };
};

export default new ProveedorRepository();