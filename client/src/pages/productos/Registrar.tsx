import { useForm, UseFormRegister, FieldError } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineAttachMoney, MdOutlineInventory2, MdOutlineBalance } from "react-icons/md";
import { IoPricetagsOutline, IoCloseCircleOutline } from "react-icons/io5";
import { RiCheckboxCircleLine } from "react-icons/ri";

import { LoginTypeSchema, loginFormSchema } from "../../schemas/authSchema";
import { Input } from "../../components/form";

import TextArea from "../../components/form/TextArea";
import InputSelect from "../../components/form/InputSelect";
import useToggle from "../../hooks/useToggle";
import Button from "../../components/form/Button";

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
    icon: IoCloseCircleOutline,
    iconColor: 'text-red-600 dark:text-red-500'
  }
];

function Registrar() {
  const { state: openSelect, toggle: handleToggle, close: closeSelect } = useToggle();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginTypeSchema>({
    resolver: zodResolver(loginFormSchema)
  });

  const onSubmit = handleSubmit(async (values: LoginTypeSchema): Promise<void> => {
    console.log(values);
  });

  return (
    <div className="w-full px-4 bg-white rounded-2xl shadow-md dark:bg-dark-720">
      <div className="flex justify-between items-center mt-4">
        <span className="text-green-600 text-2xl font-semibold dark:text-green-500">
          Registrar producto
        </span>
      </div>

      <form 
        onSubmit={onSubmit} 
        id="producto-form" 
        className="flex mt-4 items-stretch justify-evenly gap-4 mb-4 max-md:flex-col"
      >
        <div className="flex flex-col flex-1 items-center gap-4 w-full">
          <RegistrarProducto register={register} errors={errors} />
          <RegistrarInventario register={register} errors={errors} />
        </div>

        <div className="flex flex-col flex-1 items-center gap-4 w-full">
          <RegistrarCategoria 
            register={register} 
            errors={errors}
            openSelect={openSelect} 
            closeSelect={closeSelect} 
            selectToggle={handleToggle}
          />

          <div className="w-full border border-white-200 rounded-2xl p-4 dark:border-dark-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-semibold dark:text-white">
                Datos adicionales
              </span>

              <span className="text-xs bg-blue-500 bg-opacity-10 p-2 rounded-full 
                text-blue-600 font-semibold dark:text-blue-500"
              >
                Opcional
              </span>
            </div>

            <p className="text-xs bg-blue-500 bg-opacity-10 p-2 rounded-lg mt-2 mb-2 
              text-blue-600 font-medium dark:text-blue-500"
            >
              Proporcione información extra sobre el producto, como la fecha de expiración 
              y una imagen representativa para identificarlo visualmente. Esta información
              puede ser llenada mas tarde si lo desea.
            </p>

            <Input 
              register={register}
              labelName="Unidad"
              inputName="correo_Usuario"
              placeholder="Ingrese el nombre del producto"
            />

            <Input 
              register={register}
              labelName="Unidad"
              inputName="correo_Usuario"
              placeholder="Ingrese el nombre del producto"
            />
          </div>

          <GuardarRegistro />
        </div>
      </form>
    </div>
  )
};

interface RegistrarProductoProps {
  register: UseFormRegister<LoginTypeSchema>;
  errors: Partial<Record<keyof LoginTypeSchema, FieldError>>;
};

function RegistrarProducto({ register, errors }: RegistrarProductoProps) {
  return (
    <div className="w-full border rounded-2xl p-4 border-white-200 dark:border-dark-800">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-semibold dark:text-white">
          Datos del producto
        </span>

        <span className="text-xs bg-orange-500 bg-opacity-10 p-2 rounded-full 
          text-yellow-600 font-semibold dark:text-yellow-500"
        >
          Obligatorio
        </span>
      </div>

      <p className="pb-4 text-xs text-gray-500 dark:text-gray-400">
        Complete los campos obligatorios marcados con un asterisco 
        <b className="text-red-600 dark:text-red-500"> (*)</b>
      </p>

      <div className="flex flex-col gap-4">
        <Input 
          register={register}
          labelName="Nombre"
          inputName="correo_Usuario"
          placeholder="Ingrese el nombre del producto"
          isRequired={true}
          errors={errors.correo_Usuario}
          icon={IoPricetagsOutline}
        />

        <TextArea 
          register={register}
          labelName="Descripción"
          inputName="contra_Usuario"
          placeholder="Ingrese la descripción del producto"
          errors={errors.correo_Usuario}
        />
      </div>
    </div>
  )
};

interface RegistrarInventarioProps {
  register: UseFormRegister<LoginTypeSchema>;
  errors: Partial<Record<keyof LoginTypeSchema, FieldError>>;
};

function RegistrarInventario({ register, errors }: RegistrarInventarioProps) {
  return (
    <div className="w-full border rounded-2xl p-4 border-white-200 dark:border-dark-800">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-semibold dark:text-white">
          Datos de inventario
        </span>

        <span className="text-xs bg-orange-500 bg-opacity-10 p-2 rounded-full 
          text-yellow-600 font-semibold dark:text-yellow-500"
        >
          Obligatorio
        </span>
      </div>

      <p className="pb-4 text-xs text-gray-500 dark:text-gray-400">
        Complete los campos obligatorios marcados con un asterisco
        <b className="text-red-600 dark:text-red-500"> (*)</b>
      </p>

      <div className="flex flex-col gap-4">
        <Input 
          register={register}
          labelName="Precio"
          inputName="correo_Usuario"
          placeholder="Ingrese el nombre del producto"
          isRequired={true}
          errors={errors.correo_Usuario}
          icon={MdOutlineAttachMoney}
        />

        <Input 
          register={register}
          labelName="Stock"
          inputName="correo_Usuario"
          placeholder="Ingrese el nombre del producto"
          isRequired={true}
          errors={errors.correo_Usuario}
          icon={MdOutlineInventory2}
        />

        <Input 
          register={register}
          labelName="Unidad"
          inputName="correo_Usuario"
          placeholder="Ingrese el nombre del producto"
          isRequired={true}
          errors={errors.correo_Usuario}
          icon={MdOutlineBalance}
        />
      </div>
    </div>
  )
};

interface RegistrarCategoriaProps {
  register: UseFormRegister<LoginTypeSchema>;
  errors: Partial<Record<keyof LoginTypeSchema, FieldError>>;
  openSelect: string | null;
  closeSelect: (text: string | null) => void;
  selectToggle: (text: string | null) => void;
};

function RegistrarCategoria(props: RegistrarCategoriaProps) {
  const { register, errors, openSelect, closeSelect, selectToggle } = props;

  return (
    <div className="w-full border border-white-200 rounded-2xl p-4 dark:border-dark-800">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-semibold dark:text-white">
          Categoria
        </span>

        <span className="text-xs bg-orange-500 bg-opacity-10 p-2 rounded-full 
          text-yellow-600 font-semibold dark:text-yellow-500"
        >
          Obligatorio
        </span>
      </div>

      <p className="pb-4 text-xs text-gray-500 dark:text-gray-400">
        Complete los campos obligatorios marcados con un asterisco 
        <b className="text-red-600 dark:text-red-500"> (*)</b>
      </p>

      <InputSelect 
        register={register}
        labelName="Categoria"
        inputName="correo_Usuario"
        isRequired={true}
        opciones={options}
        toggle={() => selectToggle("estado")}
        open={openSelect === "estado"}
        setOpen={closeSelect}
        onChange={(value: string) => console.log(value)} 
        errors={errors.contra_Usuario}
      />
    </div>
  )
};

function GuardarRegistro() {
  return (
    <div className="flex flex-col items-center border border-white-200 rounded-2xl p-4 
      gap-4 w-full dark:border-dark-800"
    >
      <p className="text-xs bg-orange-500 bg-opacity-10 rounded-lg p-2 text-yellow-600 
        font-medium dark:text-yellow-500"
      >
        Revise que todos los campos obligatorios esten completos antes de 
        guardar el producto.
      </p>
        
      <Button type="submit" form="producto-form" className="min-w-[30%]">
        Guardar
      </Button>
    </div>
  )
};

export default Registrar;