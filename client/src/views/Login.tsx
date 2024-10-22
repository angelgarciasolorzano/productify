import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { Button } from "@nextui-org/react";

import Input from "../components/Input";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center content-stretch w-96 pt-4 shadow-sm min-h-[20rem] 
        rounded-2xl bg-zinc-50"
      >
        <h1 className="font-semibold text-sm mt-4">Inicia sesión</h1>

        <form className="flex flex-col flex-grow items-center w-72 mt-2 gap-4">
          <Input
            labelName="Email"
            inputName="email"
            type="email"
            placeholder="Correo electrónico"
            icon={HiOutlineMail} 
          />

          <Input
            labelName="Contraseña"
            inputName="password"
            type="password"
            placeholder="Contraseña"
            icon={HiLockClosed}
          />

          <Button size="md" color="primary">
            Iniciar sesión
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login;