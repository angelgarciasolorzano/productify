import { LoginTypeSchema, loginFormSchema } from "../../schemas/authSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiCheckboxCircleLine, RiCheckboxBlankCircleLine } from "react-icons/ri";
import { useState } from "react";
import { Md10K } from "react-icons/md";

import { Input } from "../../components/form";

import Button from "../../components/form/Button";
import TextArea from "../../components/form/TextArea";
import InputSelect from "../../components/form/InputSelect";

const options = [
  { 
    value: 'Activo', 
    label: 'Activo', 
    icon: RiCheckboxCircleLine, 
    iconColor: 'text-green-600 dark:text-green-500' 
  },
  { 
    value: 'Inactivo', 
    label: 'Inactivo', 
    icon: RiCheckboxBlankCircleLine,
    iconColor: 'text-red-600 dark:text-red-500'
  }
];

function Categoria() {
  const [openSelect, setOpenSelect] = useState<string | null>(null);
  const {register, handleSubmit, getValues, formState: { errors }} = useForm<LoginTypeSchema>({
    resolver: zodResolver(loginFormSchema)
  });

  const onSubmit = handleSubmit(async (values: LoginTypeSchema): Promise<void> => {
    console.log(values);
  });

  const handleToggle = (tipo: string): void => {
    setOpenSelect((text) => (text === tipo ? null : tipo));
  };

  console.log(getValues());

  return (
    <div className="flex justify-center min-h-full p-4">
      <div className="flex justify-center items-center bg-white rounded-2xl w-full
        dark:bg-dark-720"
      >
        <form 
          onSubmit={onSubmit} 
          className="flex flex-col m-2 shadow-md pl-4 pr-4 items-center min-w-[50%] gap-4
            border border-white-200 dark:border-dark-800 rounded-2xl
          "
        >
          <h1 className="mt-2 mb-2 text-2xl font-semibold
            text-green-600 dark:text-green-500"
          >
            Registrar categoria
          </h1>
        
          <div className="flex gap-4 w-full">
            <Input<LoginTypeSchema>
              register={register}
              labelName="Nombre"
              inputName="correo_Usuario"
              type="text"
              placeholder="Ingrese el nombre de la categoria"
              errors={errors.correo_Usuario}
              icon={Md10K}
            />

            <InputSelect<LoginTypeSchema>
              register={register}
              labelName="Estado"
              inputName="contra_Usuario"
              opciones={options} 
              open={openSelect === "estado"}
              setOpen={setOpenSelect}
              toggle={() => handleToggle("estado")}
              onChange={(value: string) => console.log(value)} 
              errors={errors.contra_Usuario}
            />
          </div>

          <TextArea<LoginTypeSchema>
            register={register}
            labelName="Descripcion"
            inputName="contra_Usuario"
            placeholder="Ingrese una descripcion para la categoria"
            errors={errors.contra_Usuario}
          />

          <Button loading={false}>Guardar</Button>
        </form>
      </div>
    </div>
  )
}

export default Categoria;