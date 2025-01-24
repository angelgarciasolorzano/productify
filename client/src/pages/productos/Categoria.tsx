import { LoginTypeSchema, loginFormSchema } from "../../schemas/authSchema";
import { FieldError, useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiCheckboxCircleLine, RiCheckboxBlankCircleLine } from "react-icons/ri";
import { Md10K, MdAdd } from "react-icons/md";

import { Input } from "../../components/form";

import Button from "../../components/form/Button";
import TextArea from "../../components/form/TextArea";
import InputSelect from "../../components/form/InputSelect";
import Table from "../../components/table/Table";
import { Modal, ModalTitle, ModalContent, ModalFooter } from "../../components/modal/Modal";
import useToggle from "../../hooks/useToggle";
import useModal from "../../hooks/useModal";

interface CategoriaFormProps {
  openSelect: string | null;
  closeSelect: (text: string | null) => void;
  selectToggle: (text: string | null) => void;
  onSubmit: () => void;
  register: UseFormRegister<LoginTypeSchema>;
  errors: Partial<Record<keyof LoginTypeSchema, FieldError>>;
};

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
  const { open: openModal, close: closeModal, toggle: toggleModal } = useModal();
  const { state: openSelect, toggle: handleToggle, close: closeSelect } = useToggle();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginTypeSchema>({
    resolver: zodResolver(loginFormSchema)
  });

  const onSubmit = handleSubmit(async (values: LoginTypeSchema): Promise<void> => {
    console.log(values);
  });

  return (
    <div className="w-full px-4 bg-white rounded-2xl shadow-md dark:bg-dark-720">
      <div className="flex justify-between items-center mt-4">
        <span className="text-green-600 text-2xl font-semibold dark:text-green-500">
          Gestion de categorias
        </span>

        <Button 
          onClick={toggleModal}
          className="shadow-md rounded-lg bg-blue-600 hover:bg-blue-800"
        >
          <MdAdd size={20} className="mr-1" />
          Agregar categoria
        </Button>
      </div>

      <Modal 
        isOpen={openModal} 
        onClose={() => closeModal(() => reset())}
        className="w-5/12"
      >
        <ModalTitle title="Registrar categoria" onClose={() => closeModal(() => reset())} />

        <ModalContent>
          <CategoriaForm 
            openSelect={openSelect} 
            closeSelect={closeSelect} 
            selectToggle={handleToggle} 
            onSubmit={onSubmit} 
            register={register} 
            errors={errors}
          />
        </ModalContent>

        <ModalFooter>
          <div className="flex items-center justify-end gap-4 mb-4 mt-2">
            <Button
              onClick={() => closeModal(() => reset())}
              className="bg-gray-500 hover:bg-gray-800 dark:bg-dark-800 
                dark:hover:bg-gray-800 min-w-[20%]
              " 
            >
              Cancelar
            </Button>

            <Button 
              type="submit" 
              form="categoria-form"
              className="min-w-[20%] bg-blue-600 hover:bg-blue-800" 
            >
              Guardar
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      <Table />
    </div>
  )
};

function CategoriaForm(props: CategoriaFormProps) {
  const { openSelect, closeSelect, selectToggle, onSubmit, register, errors } = props;

  return (
    <form 
      id="categoria-form"
      onSubmit={onSubmit} 
      className="flex flex-col mt-4 items-center gap-4"
    >
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
          toggle={() => selectToggle("estado")}
          open={openSelect === "estado"}
          setOpen={closeSelect}
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
    </form>
  )
};

export default Categoria;