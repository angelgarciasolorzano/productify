import { useState } from "react";
import Table from "../../components/table/Table";

function Registrar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="grid">
      Registrar producto

      <button className="bg-black" onClick={() => setOpen(!open)}>Abrir modal</button>

      <Table />
    </div>
  )
}

export default Registrar;