import { LuPencil } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";

import { Text, Button, Textarea, TextInput } from "@mantine/core";

import { FieldError, useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Table } from "@/components/table";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/modal";
import { categoriaFormSchema, CategoriaTypeSchema } from "@/schemas/productos";
import { useModal } from "@/hooks";
import { themeStore } from "@/store";

function Categoria() {
  const { open: openModal, close, toggle: toggleModal } = useModal();
  const theme = themeStore((state) => state.theme) ? "dark" : "light";
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CategoriaTypeSchema>({
    resolver: zodResolver(categoriaFormSchema)
  });

  const closeModal = (): void => close(() => reset());

  const onSubmit = handleSubmit(async (values: CategoriaTypeSchema): Promise<void> => {
    console.log(values);
  });

  return (
    <div className="w-full py-3">
      <div className="flex justify-between items-center mt-1">
        <div>
          <Text  
            className="text-2xl font-semibold"
            variant="gradient"
            gradient={{ 
              from: theme === "dark" ? 'rgba(3, 255, 49, 1)' : '#16a34a', 
              to: theme === "dark" ? 'rgba(136, 252, 131, 1)' : '#16a34a', 
              deg: 90 
            }}
          >
            Gestion de categorias
          </Text>

          <p className="text-xs mt-1 mb-3 text-gray-500 dark:text-gray-400">
            Administre y organice sus categorias de productos
          </p>
        </div>

        <Button 
          radius="md"
          onClick={toggleModal}
          leftSection={<MdAdd size={20} />}
        >
          Agregar categoria
        </Button>
      </div>

      <CategoriaModal 
        openModal={openModal} 
        closeModal={closeModal} 
        onSubmit={onSubmit} 
        register={register}
        errors={errors}
        theme={theme} 
      />

      <Table />
    </div>
  )
};

interface CategoriaModalProps {
  openModal: boolean;
  closeModal: () => void;
  onSubmit: () => void;
  register: UseFormRegister<CategoriaTypeSchema>;
  errors: Partial<Record<keyof CategoriaTypeSchema, FieldError>>;
  theme: string;
};

function CategoriaModal(props: CategoriaModalProps) {
  const { openModal, closeModal, register, errors, theme, onSubmit } = props;

  return (
    <Modal 
      isOpen={openModal} 
      onClose={closeModal}
      className="w-5/12 py-1 rounded-lg dark:border dark:border-dark-800 max-md:w-10/12"
    >
      <ModalHeader onClose={closeModal}>
        <div className="flex justify-center items-center gap-2">
          <TbCategoryPlus size={20} className="text-gray-600 dark:text-gray-400" />

          <Text  
            className="text-xl font-semibold"
            variant="gradient"
            gradient={{ 
              from: theme === "dark" ?'rgba(0, 140, 255, 1)' : '#1345ff', 
              to: theme === "dark" ? 'rgba(5, 238, 255, 1)' : '#1345ff', 
              deg: 10 
            }}
          >
            Registrar categoria
          </Text>
        </div>
      </ModalHeader>

      <ModalBody>
        <p className="text-xs mt-1 text-gray-500 mb-3 dark:text-gray-400">
          Favor de completar todos los campos marcados con un asterisco
          <b className="text-red-600 dark:text-red-500"> (*)</b>
        </p>

        <CategoriaForm 
          theme={theme}
          onSubmit={onSubmit} 
          register={register} 
          errors={errors}
        />
      </ModalBody>

      <ModalFooter>
        <div className="flex items-center justify-end gap-4 mb-2 mt-2">
          <Button
            radius="md"
            onClick={closeModal}
            classNames={{
              label: "text-black dark:text-white",
              root: `bg-transparent border border-gray-400 hover:bg-gray-50 
                dark:bg-gray-800 dark:border-dark-800 dark:hover:bg-dark-800
              `, 
            }}
          >
            Cancelar
          </Button>

          <Button radius="md" type="submit" form="categoria-form">
            Guardar
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  )
};

type CategoriaFormProps = Omit<CategoriaModalProps, "openModal" | "closeModal">;

function CategoriaForm({ onSubmit, register, errors, theme }: CategoriaFormProps) {
  return (
    <form 
      id="categoria-form"
      onSubmit={onSubmit} 
      className="flex flex-col items-center justify-center gap-4 my-3"
    >
      <TextInput 
        {...register("nombre_categoria")}
        label="Nombre"
        description="Favor de ingresar el nombre de la categoria"
        placeholder="Ingrese el nombre de la categoria"
        error={errors.nombre_categoria?.message}
        key={`nombre_categoria-${theme}`}
        required
        leftSection={
          <LuPencil
            size={18} 
            className={`${errors.nombre_categoria?.message
              ? `text-red-600 dark:text-red-500`
              : `text-gray-600 dark:text-gray-400`
            }`}
          />
        }
      />

      <Textarea 
        {...register("descripcion_categoria")}
        label="Descripcion"
        description="Favor de ingresar una descripcion detallada de la categoria"
        placeholder="Ingrese la descripcion de la categoria"
        error={errors.descripcion_categoria?.message}
        key={`descripcion_categoria-${theme}`}
        autosize
        minRows={4}
        maxRows={6}
      />
    </form>
  )
};

export default Categoria;