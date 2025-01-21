import Table from "../../components/table/Table"
import { MdAdd } from "react-icons/md";

function Inventario() {
  return (
    <div className="w-full px-4 bg-white rounded-2xl shadow-md dark:bg-dark-720">
      <div className="flex justify-between items-center mt-4">
        <span className="text-green-600 text-2xl font-semibold dark:text-green-500">
          Gestion de categorias
        </span>

        <button className="flex items-center shadow-md text-white bg-blue-600 
          text-sm rounded-lg px-2 py-2 hover:bg-blue-800 
          dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <MdAdd size={20} className="mr-1" />
          Agregar categoria
        </button>
      </div>

      <Table />
    </div>
  )
}

export default Inventario;