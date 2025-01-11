import { IconType } from "react-icons";
import { FieldError, FieldValues, UseFormRegister, Path } from "react-hook-form";
import { ComponentProps } from "react";

interface Props<T extends FieldValues> extends ComponentProps<"input"> {
  icon?: IconType;
  labelName: string;
  inputName: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldError;
};

function Input<T extends FieldValues>(props: Props<T>) {
  const { register, inputName, labelName, icon: Icon, errors, ...inputProps } = props;

  return (
    <div className="block w-full">
      <label
        htmlFor={inputName}
        className="block text-sm font-semibold mb-2 text-gray-800 dark:text-white"
      >
        {labelName}
      </label>

      <div className={`flex items-center w-full text-gray-700 border border-gray-400 
        rounded-md shadow-sm overflow-hidden dark:text-gray-200
        ${errors
          ? `border-red-500 focus-within:ring-1 focus-within:ring-red-500`
          : `focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400
            dark:focus-within:border-gray-200 dark:focus-within:ring-gray-200`
        }`}
      >
        <div className="flex items-center justify-center px-2 text-gray-800 
          dark:text-gray-200"
        >
          {Icon && <Icon className="w-5 h-5" />}
        </div>

        <input
          {...register(inputName)}
          {...inputProps}
          className="w-full py-2 pr-2 border-0 focus:outline-none text-gray-800 
          bg-transparent dark:text-gray-200"
        />
      </div>

      {errors && <p className="pt-1 text-sm text-red-500">{errors.message}</p>}
    </div>
  );
}

export default Input;