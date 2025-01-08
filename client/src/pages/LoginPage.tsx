import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

import { LoginTypeSchema, loginFormSchema } from "../schemas/authSchema";
import { Input } from "../components/form";

import authStore from "../store/authStore";
import Button from "../components/form/Button";

function LoginPage() {
  const { login, loading } = authStore();
  const {register, handleSubmit, formState: { errors }} = useForm<LoginTypeSchema>({
    resolver: zodResolver(loginFormSchema)
  });

  const onSubmit = handleSubmit(async (values: LoginTypeSchema) => {
    await login(values);
  });

  return (
    <main className="flex flex-1 items-center duration-300 justify-center flex-grow">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} 
        className="flex flex-col items-center content-stretch w-96 pt-4 shadow-sm 
          min-h-[18rem] rounded-2xl bg-white dark:bg-dark-800
        "
      >
        <h1 className="mt-2 text-2xl font-semibold dark:text-white">
          Inicia sesión
        </h1>

        <form 
          onSubmit={onSubmit} 
          className="flex flex-col items-center flex-grow gap-4 mt-4 w-72"
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

          <Button
            loading={loading}
            type="submit"
            disabled={loading}
          >
            Iniciar Sesion
          </Button>
        </form>
      </motion.div>
    </main>
  )
}

export default LoginPage;