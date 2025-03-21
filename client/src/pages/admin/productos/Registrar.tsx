import { IoPricetagsOutline } from "react-icons/io5";
import { FaBuildingUser, FaMoneyBill1Wave } from "react-icons/fa6";
import { TiFolderOpen } from "react-icons/ti";
import { PiFolderPlusFill } from "react-icons/pi";
import { MdOutlineAttachMoney, MdOutlineBalance,MdOutlineCalendarMonth } from "react-icons/md";

import { zodResolver } from "@hookform/resolvers/zod";
import { 
  useForm, UseFormRegister, FieldError, UseFormSetValue, 
  Controller, Control, 
  UseFormGetValues
} from "react-hook-form";

import { DateInput } from "@mantine/dates";
import { 
  ComboboxItem, NumberInput, OptionsFilter, 
  Select, Textarea, TextInput, Button, Text,
} from "@mantine/core";

import { productoFormSchema, ProductoTypeSchema } from "@/schemas/productos";
import { FileInput } from "@/components/form";
import { themeStore } from "@/store";

import dayjs from "dayjs";

function Registrar() {
  const theme = themeStore((state) => state.theme) ? "dark" : "light";
  const { 
    register, handleSubmit, setValue, getValues, control, formState: { errors } 
  } = useForm<ProductoTypeSchema>({
    defaultValues: { fecha_vencimiento: null },
    resolver: zodResolver(productoFormSchema)
  });

  const onSubmite = handleSubmit(async (values: ProductoTypeSchema) => {
    const formData = new FormData();
    if (values.imagen_producto) {
    formData.append("image", values.imagen_producto);
    };

    const datos = {
      ...values,
      fecha_vencimiento: values.fecha_vencimiento 
        ? dayjs(values.fecha_vencimiento).format('DD/MM/YYYY') 
        : null
      ,
      descripcion_producto: values.descripcion_producto === "" 
        ? null 
        : values.descripcion_producto
    };
    console.log(datos);
  });

  return (
    <div className="w-full py-3">
      <Text  
        className="text-2xl font-semibold mb-1"
        variant="gradient"
        gradient={{ 
          from: theme === "dark" ? 'rgba(3, 255, 49, 1)' : '#16a34a', 
          to: theme === "dark" ? 'rgba(136, 252, 131, 1)' : '#16a34a', 
          deg: 90 
        }}
      >
        Registrar producto
      </Text>

      <p className="text-xs text-gray-500 mb-3 dark:text-gray-400">
        Completa los campos esenciales para una gestión eficiente y organizada
      </p>

      <form 
        onSubmit={onSubmite} 
        id="producto-form" 
        className="flex flex-col gap-4"
      >
        <RegistrarProducto 
          register={register} 
          setValue={setValue}
          getValues={getValues}
          errors={errors} 
          theme={theme}
        />

        <RegistrarInventario
          register={register} 
          errors={errors} 
          setValue={setValue}
          control={control}
          theme={theme}
        />
        
        <GuardarRegistro />
      </form>
    </div>
  )
};

interface RegistrarProductoProps {
  register: UseFormRegister<ProductoTypeSchema>;
  errors: Partial<Record<keyof ProductoTypeSchema, FieldError>>;
  setValue: UseFormSetValue<ProductoTypeSchema>;
  getValues: UseFormGetValues<ProductoTypeSchema>;
  theme: string;
};

function RegistrarProducto(props: RegistrarProductoProps) {
  const { register, errors, setValue,getValues, theme } = props;

  return (
    <div className="w-full border rounded-2xl p-4 border-white-200 
      dark:border-dark-800"
    >
      <span className="text-xl font-semibold dark:text-white">
        Datos del producto
      </span>

      <p className="pb-4 text-xs text-gray-500 dark:text-gray-400">
        Complete los campos obligatorios marcados con un asterisco
        <b className="text-red-600 dark:text-red-500"> (*)</b>
      </p>

      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
        <div className="flex items-center justify-center row-span-2 p-4 border 
          border-dashed rounded-2xl border-gray-400 max-lg:order-last"
        >
          <FileInput<ProductoTypeSchema> 
            setValue={setValue} 
            getValue={getValues}
            name="imagen_producto"
            error={errors.imagen_producto} 
          />
        </div>

        <TextInput 
          {...register("nombre_producto")}
          label="Nombre" 
          placeholder="Ingrese el nombre del producto"
          description="Favor de ingresar un nombre corto y descriptivo"
          key={`nombre_producto-${theme}`}
          required
          error={errors.nombre_producto?.message}
          leftSection={
            <IoPricetagsOutline 
              size={18} 
              className={`${errors.nombre_producto?.message
                ? `text-red-600 dark:text-red-500`
                : `text-gray-600 dark:text-gray-400`
              }`}
            />
          }
        />

        <Select
          {...register("id_categoria")}
          label="Categoria"
          description="Seleccione una opción de la lista"
          placeholder="Seleccione una opción"
          data={[{ value: "1", label: "Activo" }, { value: "2", label: "Inactivo" }]}
          leftSectionPointerEvents="none"
          leftSection={
            <TiFolderOpen 
              size={18}
              className={`${errors.id_categoria?.message
                ? `text-red-600 dark:text-red-500`
                : `text-gray-600 dark:text-gray-400`
              }`}
            />
          }
          required
          clearable
          allowDeselect
          error={errors.id_categoria?.message}
          onChange={(value) => {
            setValue("id_categoria", Number(value), { shouldValidate: true })}
          }
        />

        <Textarea
          {...register("descripcion_producto")}
          label="Descripcion"
          description="Favor de ingresar una descripcion detallada del producto"
          placeholder="Ingrese la descripción del producto"
          error={errors.descripcion_producto?.message}
          key={`descripcion_producto-${theme}`}
          className="lg:col-span-2"
          autosize
          minRows={4}
          maxRows={6}
        />
      </div>
    </div>
  )
};

type RegistrarInventarioProps = Omit<RegistrarProductoProps, "getValues"> & {
  control: Control<ProductoTypeSchema>;
};

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function RegistrarInventario(props: RegistrarInventarioProps) {
  const { register, errors, setValue, control, theme } = props;
  const proveedores = [
    { id: "1", nombre: 'Great Britain' },
    { id: "2", nombre: 'Russian Federation' },
    { id: "3", nombre: 'United States' },
  ];
  
  return (
    <div className="w-full border rounded-2xl p-4 border-white-200 
      dark:border-dark-800"
    >
      <span className="text-xl font-semibold dark:text-white">
        Datos de inventario
      </span>

      <p className="pb-4 text-xs text-gray-500 dark:text-gray-400">
        Complete los campos obligatorios marcados con un asterisco
        <b className="text-red-600 dark:text-red-500"> (*)</b>
      </p>

      <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
        <Select
          {...register("id_proveedor")}
          label="Proveedor"
          description="Seleccione un proveedor de la lista"
          placeholder="Seleccione un proveedor"
          required
          searchable
          clearable
          filter={optionsFilter}
          nothingFoundMessage="No se encontraron proveedores"
          error={errors.id_proveedor?.message}
          onChange={(value) => {
            setValue("id_proveedor", Number(value), { shouldValidate: true })}
          }
          data={proveedores.map((proveedor) => ({
            value: proveedor.id,
            label: proveedor.nombre,
          }))}
          leftSectionPointerEvents="none"
          leftSection={
            <FaBuildingUser 
              size={18}
              className={`${errors.id_proveedor?.message
                ? `text-red-600 dark:text-red-500`
                : `text-gray-600 dark:text-gray-400`
              }`}
            />
          }
        />

        <Controller 
          name="precio_compra"
          control={control}
          render={({field}) => (
            <NumberInput 
              {...field}
              label="Precio de compra"
              description="Favor de ingresar el precio de compra del producto"
              placeholder="Ingrese el precio de compra del producto"
              key={`precio_compra-${theme}`}
              decimalScale={4}
              allowNegative={false}
              error={errors.precio_compra?.message}
              onChange={value => field.onChange(value === "" ? undefined : value)}
              leftSection={
                <MdOutlineAttachMoney 
                  size={18} 
                  className={`${errors.precio_compra?.message
                    ? `text-red-600 dark:text-red-500`
                    : `text-gray-600 dark:text-gray-400`
                  }`}
                />
              }
            />
          )}
        />

        <Controller
          name="precio_venta"
          control={control}
          render={({ field }) => (
            <NumberInput 
              {...field}
              label="Precio de venta"
              description="Favor de ingresar el precio de venta del producto"
              placeholder="Ingrese el precio de venta del producto"
              key={`precio_venta-${theme}`}
              required
              decimalScale={4}
              allowNegative={false}
              error={errors.precio_venta?.message}
              onChange={value => field.onChange(value === "" ? undefined : value)}
              leftSection={
                <FaMoneyBill1Wave 
                  size={18} 
                  className={`${errors.precio_venta?.message
                    ? `text-red-600 dark:text-red-500`
                    : `text-gray-600 dark:text-gray-400`
                  }`}
                />
              }
            />
          )}
        />

        <Controller 
          name="stock_producto"
          control={control}
          render={({field}) => (
            <NumberInput 
              {...field}
              label="Stock"
              description="Favor de ingresar el stock del producto"
              placeholder="Ingrese el stock del producto"
              key={`stock_producto-${theme}`}
              required
              decimalScale={0}
              allowNegative={false}
              error={errors.stock_producto?.message}
              onChange={value => field.onChange(value === "" ? undefined : value)}
              leftSection={
                <MdOutlineBalance 
                  size={18} 
                  className={`${errors.stock_producto?.message
                    ? `text-red-600 dark:text-red-500`
                    : `text-gray-600 dark:text-gray-400`
                  }`}
                />
              }
            />
          )}
        />

        <DateInput
          {...register("fecha_vencimiento")}
          minDate={new Date()}
          label="Fecha de vencimiento"
          className="lg:col-span-2"
          description="Seleccione la fecha de vencimiento del producto"
          placeholder="Seleccione una fecha"
          valueFormat="DD/MM/YYYY"
          error={errors.fecha_vencimiento?.message}
          clearable
          onChange={value => setValue("fecha_vencimiento", value || null)}
          leftSectionPointerEvents="none"
          leftSection={
            <MdOutlineCalendarMonth 
              size={18}
              className={`${errors.fecha_vencimiento?.message
                ? `text-red-600 dark:text-red-500`
                : `text-gray-600 dark:text-gray-400`
              }`}
            />
          }
        />
      </div>
    </div>
  )
};

function GuardarRegistro() {
  return (
    <div className="w-full flex justify-center">
      <Button 
        form="producto-form" 
        type="submit" 
        radius="md"
        classNames={{ root: "px-10"}}
        leftSection={<PiFolderPlusFill size={18} />} 
      >
        Guardar
      </Button>
    </div>
  )
};

export default Registrar;