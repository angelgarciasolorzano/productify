import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

interface Dato {
  codigo: string;
  nombre: string;
  descripcion: string;
  estado: 'Activo' | 'Inactivo';
}

const datos: Dato[] = [
  { codigo: "001", nombre: "Producto A", descripcion: "Este es un producto de alta calidad con características únicas y avanzadas vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv", estado: "Activo" },
  { codigo: "002", nombre: "Servicio B", descripcion: "Servicio premium para clientes exigentes", estado: "Activo" },
  { codigo: "003", nombre: "Artículo C", descripcion: "Artículo de uso diario con diseño ergonómico y materiales duraderos", estado: "Inactivo" },
  { codigo: "004", nombre: "Producto D", descripcion: "Este es un producto de alta calidad con características únicas y avanzadas", estado: "Activo" },
  { codigo: "005", nombre: "Servicio E", descripcion: "Servicio premium para clientes exigentes", estado: "Activo" },
  { codigo: "006", nombre: "Artículo F", descripcion: "Artículo de uso diario con diseño ergonómico y materiales duraderos", estado: "Inactivo" },
  { codigo: "007", nombre: "Producto G", descripcion: "Este es un producto de alta calidad con características únicas y avanzadas", estado: "Activo" },
  { codigo: "008", nombre: "Servicio H", descripcion: "Servicio premium para clientes exigentes", estado: "Activo" },
  { codigo: "009", nombre: "Artículo I", descripcion: "Artículo de uso diario con diseño ergonómico y materiales duraderos", estado: "Inactivo" },
  { codigo: "010", nombre: "Producto J", descripcion: "Este es un producto de alta calidad con características únicas y avanzadas", estado: "Activo" },
  { codigo: "011", nombre: "Servicio K", descripcion: "Servicio premium para clientes exigentes", estado: "Activo" },
  { codigo: "012", nombre: "Artículo L", descripcion: "Artículo de uso diario con diseño ergonómico y materiales duraderos", estado: "Inactivo" },
  { codigo: "013", nombre: "Producto M", descripcion: "Este es un producto de alta calidad con características únicas y avanzadas", estado: "Activo" },
  { codigo: "014", nombre: "Servicio N", descripcion: "Servicio premium para clientes exigentes", estado: "Activo" },
  { codigo: "015", nombre: "Artículo O", descripcion: "Artículo de uso diario con diseño ergonómico y materiales duraderos", estado: "Inactivo" },
  { codigo: "016", nombre: "Producto P", descripcion: "Este es un producto de alta calidad con características únicas y avanzadas", estado: "Activo" },
  { codigo: "017", nombre: "Servicio Q", descripcion: "Servicio premium para clientes exigentes", estado: "Activo" }, 
  { codigo: "018", nombre: "Artículo R", descripcion: "Artículo de uso diario con diseño ergonómico y materiales duraderos", estado: "Inactivo" },
  { codigo: "019", nombre: "Producto S", descripcion: "Este es un producto de alta calidad con características únicas y avanzadas", estado: "Activo" },
  { codigo: "020", nombre: "Servicio T", descripcion: "Servicio premium para clientes exigentes", estado: "Activo" },
];

function Table() {
  return (
    <div className="w-full">
      <div className="flex gap-4 items-center">
        <TableFind />
      </div>

      <div className="overflow-x-auto scrollbar-thin dark:scrollbar-thumb-gray-500 
        dark:scrollbar-track-dark-720"
      >
        <table className="table-auto mt-4 w-full border-collapse overflow-hidden">
          <TableColumns />
          <TableRows />
        </table>
      </div>

      <hr className="border-t mt-4 ml-4 mr-4 border-white-200 dark:border-dark-800" />

      <TablePaginacion />
    </div>
  )
};

function TableColumns() {
  const columns: string[] = ['Código', 'Nombre', 'Descripción', 'Estado', 'Acciones'];

  return (
    <thead className="dark:text-white">
      <tr>
        {
          columns.map((column, index) => (
            <th 
              key={index} 
              className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider"
            >
              {column}
            </th>
          ))
        }
      </tr>
    </thead>
  )
};

function TableRows() {
  return (
    <tbody className="divide-y divide-white-200 dark:divide-dark-800">
      {datos.map((item, index) => (
        <tr 
          key={index} 
          className="text-gray-800 transition-colors duration-200 hover:bg-gray-100 
            dark:text-gray-200 dark:hover:bg-dark-710
          "
        >
          <td className="px-4 py-4 text-center text-sm">
            {item.codigo}
          </td>

          <td className="px-4 py-4 text-center text-sm max-w-xs">
            <div className="truncate">
              {item.nombre}
            </div>
          </td>

          <td className="px-4 py-4 text-center text-sm max-w-md">
            <div className="truncate">
              {item.descripcion}
            </div>
          </td>

          <td className="px-4 py-4 text-center text-sm">
            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
              ${item.estado === 'Activo' 
                ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {item.estado}
            </span>
          </td>

          <td className="px-4 py-4 text-center text-sm">
            <button className="text-gray-800 dark:text-gray-200">
              <PiDotsThreeVerticalBold className="h-5 w-5 mx-auto" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  )
};

function TableFind() {
  return (
    <div className="relative w-full mt-4 max-w-xs">
      <input 
        type="text" 
        placeholder="Buscar por nombre, descripción o código" 
        className="pl-8 pr-4 py-2 border w-full border-gray-400 bg-transparent rounded-md shadow-sm
          text-sm text-gray-800 placeholder:text-gray-500 focus:outline-blue-600 
          dark:focus:outline-gray-200 dark:text-gray-200 dark:border-dark-800 
          dark:placeholder:text-gray-400
        "
      />

      <IoSearchOutline className="absolute top-0 bottom-0 w-5 h-5 m-auto start-2 
        text-gray-600 dark:text-gray-400" 
      />
    </div>
  )
};

function TablePaginacion() {
  const pages: number[] = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-between items-center gap-4 px-4 py-4">
      <span className="text-sm dark:text-white">
        Mostrando 14 de 140 resultados
      </span>

      <div className="flex gap-2 text-sm">
        <button className="bg-blue-100 border px-2 py-2 rounded-md border-transparent
          shadow-sm hover:border-blue-600 hover:text-blue-700 hover:bg-transparent
          dark:bg-opacity-10 dark:hover:bg-transparent dark:hover:border-blue-500"
        >
          <MdOutlineKeyboardArrowLeft className="text-blue-800 dark:text-blue-400" />
        </button>

        {
          pages.map((page) => (
            <button 
              key={page} 
              className="border border-white-200 shadow-sm text-gray-800 px-4 py-2 rounded-md 
                hover:bg-blue-600 hover:text-white dark:border-dark-800 dark:text-gray-200 
                dark:hover:bg-cyan-500 dark:hover:border-transparent
              "
            >
              {page}
            </button>
          ))
        }

        <button className="bg-blue-100 border px-2 py-2 rounded-md border-transparent 
          shadow-sm hover:border-blue-600 hover:text-blue-700 hover:bg-transparent
          dark:bg-opacity-10 dark:hover:bg-transparent dark:hover:border-blue-500"
        >
          <MdOutlineKeyboardArrowRight className="text-blue-800 dark:text-blue-400" />
        </button>
      </div>
    </div>
  )
};

export default Table;