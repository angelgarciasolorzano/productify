import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { FieldError, useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { PasswordInput, TextInput, Button, Text } from "@mantine/core";

import { footerContainerVariants, footerItemsVariants } from "./loginVariants";
import { linksLogin } from "./loginItems";

import { LoginTypeSchema, loginFormSchema } from "@/schemas/auth";
import { themeStore, authStore } from "@/store";
import { themeMantine } from "@/config";

function Login() {
  const theme = themeStore((state) => state.theme) ? "dark" : "light";
  const { login, loading } = authStore();
  const {register, handleSubmit, formState: { errors }} = useForm<LoginTypeSchema>({
    resolver: zodResolver(loginFormSchema)
  });

  const onSubmit = handleSubmit(async (values: LoginTypeSchema) => {
    await login(values);
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 
      bg-white dark:bg-dark-700"
    >
      <LoginHeader theme={theme} />

      <LoginBody 
        loading={loading} 
        onSubmit={onSubmit} 
        register={register} 
        errors={errors} 
        theme={theme} 
      />

      <LoginFooter />
    </div>
  )
};

interface LoginHeaderProps {
  theme: string;
};

function LoginHeader({ theme }: LoginHeaderProps) {
  return (
    <motion.header 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Text  
        className="text-2xl font-semibold"
        variant="gradient"
        gradient={{ 
          from: theme === "dark" ? 'rgba(3, 255, 49, 1)' : '#16a34a', 
          to: theme === "dark" ? 'rgba(136, 252, 131, 1)' : '#16a34a', 
          deg: 90 
        }}
      >
        Productify
      </Text>

      <p className="text-gray-500 text-sm dark:text-gray-400">
        Organiza, gestiona y crece con facilidad
      </p>
    </motion.header>
  )
};

type LoginBodyProps = Pick<LoginHeaderProps, "theme"> & {
  loading: boolean;
  onSubmit: () => void;
  register: UseFormRegister<LoginTypeSchema>;
  errors: Partial<Record<keyof LoginTypeSchema, FieldError>>;
};

function LoginBody({ loading, onSubmit, register, errors, theme }: LoginBodyProps) {
  return (
    <main className="flex items-center duration-300 justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} 
        className="flex flex-col items-center content-stretch w-96 pt-4 shadow-sm 
          min-h-[18rem] rounded-2xl bg-gray-50 border border-white-200 
          dark:bg-dark-720 dark:border-dark-800
        "
      >
        <span className="mt-2 text-xl font-medium dark:text-white">
          Inicia sesión
        </span>

        <form 
          onSubmit={onSubmit} 
          className="flex flex-col items-center flex-grow gap-4 mt-4 w-72"
        >
          <TextInput 
            {...register("correo_Usuario")}
            label="Correo electrónico"
            placeholder="Ingrese su correo electrónico"
            error={errors.correo_Usuario?.message}
            key={`correo_Usuario-${theme}`}
            classNames={{
              input: twMerge(
                "bg-white",
                themeMantine.components?.Input?.classNames.input
              )
            }}
            leftSection={
              <HiOutlineMail 
                size={18} 
                className={errors.correo_Usuario?.message
                  ? `text-red-600 dark:text-red-500`
                  : `text-gray-600 dark:text-gray-400`
                }
              />
            }
          />

          <PasswordInput 
            {...register("contra_Usuario")}
            label="Contraseña"
            placeholder="Ingrese su contraseña"
            error={errors.contra_Usuario?.message}
            key={`contra_Usuario-${theme}`}
            classNames={{
              input: twMerge(
                "bg-white",
                themeMantine.components?.Input?.classNames.input
              )
            }}
            leftSection={
              <HiLockClosed 
                size={18} 
                className={errors.contra_Usuario?.message
                  ? `text-red-600 dark:text-red-500`
                  : `text-gray-600 dark:text-gray-400`
                }
              />
            }
          />

          <Button
            loading={loading}
            type="submit"
            className="mb-4 bg-green-600 hover:bg-green-700"
            radius="md"
          >
            Iniciar Sesion
          </Button>
        </form>
      </motion.div>
    </main>
  )
};

function LoginFooter() {
  return (
    <footer className="duration-300 dark:bg-dark-700">
      <motion.div
        className="container mx-auto flex justify-center items-center space-x-2"
        variants={footerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {linksLogin.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className="p-2 rounded-full hover:bg-gray-100 
              dark:hover:bg-dark-800 dark:text-white
            "
            variants={footerItemsVariants}
          >
            <item.icon className={item.color} size={24} />
          </motion.a>
        ))}
      </motion.div>

      <motion.p 
        className="mt-4 text-gray-500 text-sm text-center dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        © 2025 - {new Date().getFullYear()} Productify
        <br/> Todos los derechos reservados
      </motion.p>
    </footer>
  )
};

export default Login;