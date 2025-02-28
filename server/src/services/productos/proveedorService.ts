import { Proveedor } from "@/models/productos";
import { ProveedorType } from "@/schemas/productos";
import { ProveedorRepository } from "@/repositories/productos";
import { NotFoundError, DatosError } from "@/errors";

class ProveedorService {
  private validateProveedorId(id_Proveedor: Proveedor["id_proveedor"]): void {
    if (!id_Proveedor || id_Proveedor < 1 || isNaN(id_Proveedor)) {
      throw new DatosError("El id del proveedor no es valido");
    };
  };

  public async getProveedores(): Promise<Proveedor[]> {
    try {
      const proveedores = await ProveedorRepository.getProveedores();

      if (!proveedores || proveedores.length === 0) {
        throw new NotFoundError("No se encontraron proveedores");
      };

      return proveedores;
    } catch (error) {
      throw new NotFoundError("Error al obtener los proveedores");
    }
  };

  public async getProveedorId(id_Proveedor: Proveedor["id_proveedor"]): Promise<Proveedor> {
    this.validateProveedorId(id_Proveedor);

    try {
      const proveedor = await ProveedorRepository.getProveedorId(id_Proveedor);

      if (!proveedor) throw new NotFoundError("No se encontro el proveedor");

      return proveedor;
    } catch (error) {
      throw new NotFoundError("Error al obtener el proveedor");
    }
  };

  public async createProveedor(data: ProveedorType): Promise<Proveedor> {
    if (!data.nombre_proveedor || data.nombre_proveedor.length < 3) { 
      throw new DatosError("El nombre del proveedor es obligatorio");
    };

    try {
      const proveedorExiste = await ProveedorRepository.getProveedorNombre(data.nombre_proveedor);

      if (proveedorExiste) throw new DatosError("El proveedor ya existe");

      const proveedor = await ProveedorRepository.createProveedor(data);

      if (!proveedor) throw new NotFoundError("No se pudo crear el proveedor");

      return proveedor;
    } catch (error) {
      throw new NotFoundError("Error al crear el proveedor");
    }
  };

  public async updateProveedor(id_Proveedor: Proveedor["id_proveedor"], data: ProveedorType): Promise<Proveedor> {
    this.validateProveedorId(id_Proveedor);

    try {
      const proveedorExiste = await ProveedorRepository.getProveedorId(id_Proveedor);

      if (!proveedorExiste) throw new NotFoundError("No se encontro el proveedor");

      const proveedor = await ProveedorRepository.updateProveedor(proveedorExiste, data);

      if (!proveedor) throw new NotFoundError("No se pudo actualizar el proveedor");
  
      return proveedor;
    } catch (error) {
      throw new NotFoundError("Error al actualizar el proveedor");
    }
  };
};

export default new ProveedorService();