import { useForm, UseFormRegister, FieldError } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoPricetagsOutline, IoCloseCircleOutline } from "react-icons/io5";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { 
  MdOutlineAttachMoney, MdOutlineInventory2, 
  MdOutlineBalance, MdOutlineCalendarToday 
} from "react-icons/md";

import { Input } from "../../components/form";
import { productoFormSchema, ProductoTypeSchema } from "../../schemas/productoSchema";

import TextArea from "../../components/form/TextArea";
import InputSelect from "../../components/form/InputSelect";
import useToggle from "../../hooks/useToggle";
import Button from "../../components/form/Button";
import ImageSelect from "../../components/form/ImageSelect";

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
  const { register, handleSubmit, formState: { errors } } = useForm<ProductoTypeSchema>({
    defaultValues: {
      precio_compra: 0,
      precio_venta: 0
    },
    resolver: zodResolver(productoFormSchema)
  });

  const onSubmite = handleSubmit(async (values: ProductoTypeSchema) => {
    console.log("Datos válidos:", values);
  });

  return (
    <div className="w-full px-4 bg-white rounded-2xl shadow-md dark:bg-dark-720">
      <div className="flex justify-between items-center mt-4 mb-4">
        <span className="text-green-600 text-2xl font-semibold dark:text-green-500">
          Registrar producto
        </span>
      </div>

      <form 
        onSubmit={onSubmite} 
        id="producto-form" 
        className="flex flex-col mt-4 gap-4 mb-4"
      >
        <RegistrarProducto 
          register={register} 
          errors={errors} 
          openSelect={openSelect} 
          closeSelect={closeSelect} 
          selectToggle={handleToggle} 
        />

        <RegistrarInventario
          register={register} 
          errors={errors} 
          openSelect={openSelect} 
          closeSelect={closeSelect} 
          selectToggle={handleToggle}
        />

        <GuardarRegistro />
      </form>
    </div>
  )
};

interface RegistrarProductoProps {
  register: UseFormRegister<ProductoTypeSchema>;
  errors: Partial<Record<keyof ProductoTypeSchema, FieldError>>;
  openSelect: string | null;
  closeSelect: (text: string | null) => void;
  selectToggle: (text: string | null) => void;
};

function RegistrarProducto(props: RegistrarProductoProps) {
  const { register, errors, openSelect, closeSelect, selectToggle } = props;

  return (
    <div className="flex flex-col w-full border rounded-2xl p-4 border-white-200 
      dark:border-dark-800"
    >
      <span className="text-xl font-semibold dark:text-white">
        Datos del producto
      </span>

      <p className="pb-4 text-xs text-gray-500 dark:text-gray-400">
        Complete los campos obligatorios marcados con un asterisco
        <b className="text-red-600 dark:text-red-500"> (*)</b>
      </p>

      <div className="flex gap-4 mb-4 w-full max-lg:flex-col-reverse">
        <div className="flex items-center justify-center border border-dashed rounded-2xl 
          p-4 w-5/12 border-gray-400 max-lg:w-full"
        >
          <ImageSelect />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-4 max-md:flex-col">
            <Input 
              register={register}
              labelName="Nombre"
              inputName="nombre_producto"
              placeholder="Ingrese el nombre del producto"
              isRequired={true}
              errors={errors.nombre_producto}
              icon={IoPricetagsOutline}
            />

            <InputSelect 
              register={register}
              labelName="Categoria"
              inputName="id_categoria"
              isRequired={true}
              opciones={options}
              toggle={() => selectToggle("estado")}
              open={openSelect === "estado"}
              setOpen={closeSelect}
              onChange={(value: string) => console.log(value)} 
              errors={errors.id_categoria}
            />
          </div>

          <TextArea
            register={register}
            labelName="Descripción"
            inputName="descripcion_producto"
            placeholder="Ingrese la descripción del producto"
            errors={errors.descripcion_producto}
          />
        </div>
      </div>
    </div>
  )
};

type RegistrarInventarioProps = RegistrarProductoProps;

function RegistrarInventario(props: RegistrarInventarioProps) {
  const { register, errors, openSelect, closeSelect, selectToggle } = props;

  return (
    <div className="flex flex-col w-full border rounded-2xl p-4 border-white-200 
      dark:border-dark-800"
    >
      <span className="text-xl font-semibold dark:text-white">
        Datos de inventario
      </span>

      <p className="pb-4 text-xs text-gray-500 dark:text-gray-400">
        Complete los campos obligatorios marcados con un asterisco
        <b className="text-red-600 dark:text-red-500"> (*)</b>
      </p>

      <div className="flex w-full gap-4 mb-6 max-md:flex-col">
        <InputSelect 
          register={register}
          labelName="Proveedor"
          inputName="id_proveedor"
          isRequired={true}
          opciones={options}
          toggle={() => selectToggle("estado")}
          open={openSelect === "estado"}
          setOpen={closeSelect}
          onChange={(value: string) => console.log(value)} 
          errors={errors.id_proveedor}
        />

        <Input 
          register={register}
          registerOpction={{ valueAsNumber: true }}
          labelName="Precio de compra"
          inputName="precio_compra"
          placeholder="Ingrese el precio de compra del producto"
          type="number"
          errors={errors.precio_compra}
          icon={MdOutlineAttachMoney}
        />
      </div>

      <div className="w-full flex gap-4 mb-6 max-md:flex-col">
        <Input
          register={register}
          registerOpction={{ valueAsNumber: true }}
          labelName="Precio de venta"
          inputName="precio_venta"
          type="number"
          placeholder="Ingrese el precio de venta del producto"
          isRequired={true}
          errors={errors.precio_venta}
          icon={MdOutlineInventory2}
        />

        <Input
          register={register}
          registerOpction={{ valueAsNumber: true }}
          labelName="Stock"
          inputName="stock_producto"
          type="number"
          placeholder="Ingrese el stock del producto"
          isRequired={true}
          errors={errors.stock_producto}
          icon={MdOutlineBalance}
        />
      </div>

      <Input 
        register={register}
        registerOpction={{ valueAsDate: true }}
        labelName="Fecha de vencimiento"
        inputName="fecha_vencimiento"
        placeholder="Ingrese el nombre del producto"
        type="date"
        defaultValue={new Date().toISOString().split("T")[0]}
        icon={MdOutlineCalendarToday}
        errors={errors.fecha_vencimiento}
      />
    </div>
  )
};

function GuardarRegistro() {
  return (
    <div className="w-full flex justify-center">
      <Button form="producto-form" className="px-6 bg-blue-600 min-w-32">
        Guardar
      </Button>
    </div>
  )
};

export default Registrar;