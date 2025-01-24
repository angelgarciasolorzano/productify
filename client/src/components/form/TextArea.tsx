import { FieldError, FieldValues, UseFormRegister, Path } from "react-hook-form";
import { ComponentProps } from "react";

interface Props<T extends FieldValues> extends ComponentProps<"textarea"> {
  labelName: string;
  inputName: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldError;
};

function TextArea<T extends FieldValues>(props: Props<T>) {
  const { register, inputName, labelName, errors, ...inputProps } = props;

  return (
    <div className="w-full">
      <label 
        htmlFor={inputName} 
        className="text-sm font-semibold text-gray-800 dark:text-white"
      >
        {labelName}
      </label>

      <textarea
        {...register(inputName)}
        {...inputProps}
        className={`w-full p-2 h-32 resize-none mt-2 bg-transparent border border-gray-400
          rounded-md shadow-sm text-sm dark:text-gray-200 placeholder:text-gray-500
          dark:placeholder:text-gray-400
          ${errors
            ? `border-red-500 focus:outline-red-500 focus:text-gray-800
              dark:border-red-500 dark:focus:outline`
            : `focus:outline-blue-600 border-gray-400 focus:text-gray-800
              dark:focus:outline-gray-200`
          }
        `}
      />

      {errors && 
        <p className="text-sm text-red-600 dark:text-red-500">
          {errors.message}
        </p>
      }
    </div>
  )
}

export default TextArea;