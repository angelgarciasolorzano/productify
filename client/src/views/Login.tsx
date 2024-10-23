import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginTypeSchema, loginFormSchema } from "../schemas/authSchema";

import Input from "../components/Input";

function Login() {
  const {register, handleSubmit, formState: { errors }} = useForm<LoginTypeSchema>({
    resolver: zodResolver(loginFormSchema)
  });

  const onSubmit = handleSubmit((values: LoginTypeSchema) => {
    console.log(values);
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center content-stretch w-96 pt-4 shadow-sm 
        min-h-[18rem] rounded-2xl bg-white"
      >
        <h1 className="font-semibold text-2xl mt-2">
          Inicia sesión
        </h1>

        <form 
          onSubmit={onSubmit} 
          className="flex flex-col flex-grow items-center w-72 mt-4 gap-4"
        >
          <Input
            register={register}
            labelName="Email"
            inputName="correo_Usuario"
            type="text"
            placeholder="Correo electrónico"
            icon={HiOutlineMail}
            errors={errors.correo_Usuario}
          />

          <Input
            register={register}
            labelName="Contraseña"
            inputName="contra_Usuario"
            type="password"
            placeholder="Contraseña"
            icon={HiLockClosed}
            errors={errors.contra_Usuario}
          />

          <button>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;