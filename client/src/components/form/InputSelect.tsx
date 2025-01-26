import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { FieldError, FieldValues, UseFormRegister, Path } from "react-hook-form";

import { inputSelectVariants } from "../../animation/form/inputSelectVariant";

interface Opcion {
  value: string;
  label: string;
  icon: IconType;
  iconColor?: string;
};

interface SelectOpcionProps {
  opcion: Opcion;
  onSelect: (opcion: Opcion) => void;
};

interface Props<T extends FieldValues> {
  register: UseFormRegister<T>;
  labelName: string;
  inputName: Path<T>;
  isRequired?: boolean;
  opciones: Opcion[];
  onChange: (opcion: string) => void;
  toggle: () => void;
  open: boolean;
  setOpen: (id: string | null) => void;
  errors?: FieldError;
};

function InputSelect<T extends FieldValues>(props: Props<T>) {
  const { 
    opciones, onChange, toggle , open, setOpen, labelName, isRequired, 
    inputName, register, errors
  } = props;
  const [selectOpcion, setSelectOpcion] = useState<Opcion | null>(null);

  const handleClick = (opcion: Opcion): void => {
    setSelectOpcion(opcion);
    setOpen(null);
    onChange(opcion.value);
  };

  return (
    <div className="relative w-full">
      <div className="relative z-20">
        <label
          htmlFor={inputName}
          className="block text-sm font-semibold mb-2 text-gray-800 dark:text-white"
        >
          {labelName}

          {isRequired && (
            <span className="text-red-600 font-bold dark:text-red-500"> *</span>
          )}
        </label>
        
        <div 
          className={`flex items-center justify-between p-2 border border-gray-400 rounded-md 
            cursor-pointer bg-transparent dark:text-gray-200
            ${errors ? "border-red-500" : ""}
          `}
          onClick={toggle}
        >
          <div className="flex items-center">
            <IoSearchOutline className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />

            {
              selectOpcion ? (
                <span className="ml-2 text-sm text-gray-800 dark:text-gray-200">
                  {selectOpcion.label}
                </span>
              ) : (
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  Seleccionar
                </span>
              )
            }
          </div>

          <motion.div
            initial={false}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`text-gray-600 dark:text-gray-400`}
          >
            <HiOutlineChevronDown className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={inputSelectVariants}
            className={`absolute z-50 w-full border border-gray-400 rounded-md mt-1 
              mb-1 overflow-hidden shadow-sm ${errors ? "border-red-500" : ""}
            `}
          >
            {opciones.map((option) => (
              <SelectOpcion 
                key={option.value}
                opcion={option}
                onSelect={handleClick}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <input 
        {...register(inputName)}
        type="hidden" 
        value={selectOpcion?.value || ""} 
      />

      {errors && 
        <p className="pt-1 text-sm text-red-600 dark:text-red-500">
          {errors.message}
        </p>
      }
    </div>
  )
};

function SelectOpcion({ opcion, onSelect }: SelectOpcionProps) {
  return (
    <motion.div
      onClick={() => onSelect(opcion)}
      className={`flex items-center p-2 cursor-pointer bg-white hover:bg-gray-200
        dark:bg-dark-720 dark:hover:bg-dark-800
      `}
    >
      <opcion.icon className={`w-4 h-4 mr-3 
        ${opcion.iconColor ? opcion.iconColor : "text-gray-600 dark:text-gray-400"}`} 
      />

      <span className="ml-2 text-sm text-gray-800 dark:text-gray-200">
        {opcion.label}
      </span>
    </motion.div>
  )
};

export default InputSelect;