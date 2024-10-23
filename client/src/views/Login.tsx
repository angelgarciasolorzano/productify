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
    <div className="flex flex-grow justify-center items-center">
      <div className="flex flex-col items-center content-stretch w-96 pt-4 shadow-sm 
        min-h-[18rem] rounded-2xl bg-white dark:bg-gray-700"
      >
        <h1 className="font-semibold text-2xl mt-2 dark:text-white">
          Inicia sesión
        </h1>

        <form 
          onSubmit={onSubmit} 
          className="flex flex-col flex-grow items-center w-72 mt-4 gap-4"
        >
          <Input<LoginTypeSchema>
            register={register}
            labelName="Email"
            inputName="correo_Usuario"
            type="text"
            placeholder="Correo electrónico"
            icon={HiOutlineMail}
            errors={errors.correo_Usuario}
          />

          <Input<LoginTypeSchema>
            register={register}
            labelName="Contraseña"
            inputName="contra_Usuario"
            type="password"
            placeholder="Contraseña"
            icon={HiLockClosed}
            errors={errors.contra_Usuario}
          />

          <button className="bg-green-600 text-white px-4 py-2 rounded-xl transition duration-200 
            ease-in-out hover:bg-green-700 active:bg-green-900 focus:outline-none mb-4" >
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;