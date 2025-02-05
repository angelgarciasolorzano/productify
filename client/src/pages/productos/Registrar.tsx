import { useForm, UseFormRegister, FieldError, UseFormSetValue, UseFormGetValues, Controller, Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoPricetagsOutline } from "react-icons/io5";
import { 
  MdOutlineAttachMoney, MdOutlineInventory2, 
  MdOutlineBalance
} from "react-icons/md";
import { DateInput } from "@mantine/dates";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { productoFormSchema, ProductoTypeSchema } from "../../schemas/productoSchema";

import Button from "../../components/form/Button";
import ImageSelect from "../../components/form/ImageSelect";

import { ComboboxItem, NumberInput, OptionsFilter, Select, Textarea, TextInput } from "@mantine/core";

function Registrar() {
  const { register, handleSubmit, setValue, getValues, control, formState: { errors } } = useForm<ProductoTypeSchema>({
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
          setValue={setValue}
          getValues={getValues}
          errors={errors} 
          control={control}
        />

        <RegistrarInventario
          register={register} 
          errors={errors} 
          setValue={setValue}
          getValues={getValues}
          control={control}
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
  control: Control<ProductoTypeSchema>;
};

function RegistrarProducto(props: RegistrarProductoProps) {
  const { register, errors, setValue } = props;

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
          <ImageSelect />
        </div>

        <TextInput 
          {...register("nombre_producto")}
          label="Nombre" 
          placeholder="Ingrese el nombre del producto"
          description="Favor de ingresar un nombre corto y descriptivo"
          withAsterisk
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
          allowDeselect
          required
          maxDropdownHeight={200}
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
          className="lg:col-span-2"
          autosize
          minRows={4}
          maxRows={6}
        />
      </div>
    </div>
  )
};

type RegistrarInventarioProps = RegistrarProductoProps;

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function RegistrarInventario(props: RegistrarInventarioProps) {
  const { register, errors, setValue, control } = props;
  const proveedores = [
    { id: "1", nombre: 'Great Britain' },
    { id: "2", nombre: 'Russian Federation' },
    { id: "3", nombre: 'United States' },
  ];

  dayjs.extend(customParseFormat);
  
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
          filter={optionsFilter}
          data={proveedores.map((proveedor) => ({
            value: proveedor.id,
            label: proveedor.nombre,
          }))}
          nothingFoundMessage="No se encontraron proveedores"
          error={errors.id_proveedor?.message}
          onChange={(value) => {
            setValue("id_proveedor", Number(value), { shouldValidate: true })}
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
              decimalScale={4}
              allowNegative={false}
              error={errors.precio_compra?.message}
              onChange={(value) => {field.onChange(value === "" ? undefined : value)}}
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
              required
              decimalScale={4}
              allowNegative={false}
              error={errors.precio_venta?.message}
              onChange={(value) => {field.onChange(value === "" ? undefined : value)}}
              leftSection={
                <MdOutlineInventory2 
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
              required
              decimalScale={0}
              allowNegative={false}
              error={errors.stock_producto?.message}
              onChange={(value) => {field.onChange(value === "" ? undefined : value)}}
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
          minDate={new Date()}
          label="Fecha de vencimiento"
          className="lg:col-span-2"
          description="Seleccione la fecha de vencimiento del producto"
          placeholder="Seleccione una fecha"
          valueFormat="DD/MM/YYYY"
        />
      </div>
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