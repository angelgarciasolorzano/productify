import { useState } from "react";
import Modal from "../../components/Modal";
import Table from "../../components/table/Table";

function Registrar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="grid">
      Registrar producto

      <button className="bg-black" onClick={() => setOpen(!open)}>Abrir modal</button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Table />
      </Modal>
    </div>
  )
}

export default Registrar;