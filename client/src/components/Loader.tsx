import { RiLoader4Line } from "react-icons/ri";

function Loader() {
  return (
    <div className="flex">
      <RiLoader4Line className="mr-1 h-5 w-full animate-spin text-white" />
      <span className="font-medium">Cargando</span>
    </div>
  )
}

export default Loader;