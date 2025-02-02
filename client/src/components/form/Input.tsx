import { IconType } from "react-icons";
import { FieldError, FieldValues, UseFormRegister, Path } from "react-hook-form";
import { ComponentProps } from "react";

interface Props<T extends FieldValues> extends ComponentProps<"input"> {
  icon?: IconType;
  labelName: string;
  inputName: Path<T>;
  isRequired?: boolean;
  register: UseFormRegister<T>;
  registerOpction?: Parameters<UseFormRegister<T>>[1];
  errors?: FieldError;
};

function Input<T extends FieldValues>(props: Props<T>) {
  const { 
    register, registerOpction, inputName, labelName, isRequired, icon: Icon, errors, 
    type,...inputProps 
  } = props;

  const handleIconClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (type === "date") {
      const inputElement = e.currentTarget.nextSibling as HTMLInputElement | null;
      inputElement?.showPicker();
    }
  };

  return (
    <div className="block w-full">
      <label
        htmlFor={inputName}
        className="block text-sm font-semibold mb-2 text-gray-800 dark:text-white"
      >
        {labelName}

        {isRequired && (
          <span className="text-red-600 font-bold dark:text-red-500"> *</span>
        )}
      </label>

      <div className={`flex items-center w-full border border-gray-400 
        rounded-md shadow-sm text-sm overflow-hidden dark:text-gray-200
        ${errors
          ? `border-red-500 focus-within:ring-1 focus-within:ring-red-500`
          : `focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600
            dark:focus-within:border-gray-200 dark:focus-within:ring-gray-200`
        }`}
      >
        {
          Icon && (
            <div 
              onClick={handleIconClick}
              className={`flex items-center justify-center px-2 text-gray-800 
                dark:text-gray-200 ${
                  type === "date" || type === "time" ? "cursor-pointer" : ""
                }`
              }
            >
              <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </div>
          )
        }

        <input
          id={inputName}
          type={type}
          {...register(inputName, registerOpction)}
          {...inputProps}
          className={`w-full ${Icon ? "pr-3" : "px-2"} py-2 border-0 focus:outline-none text-gray-800 
            bg-transparent dark:text-gray-200 placeholder:text-gray-500
            dark:placeholder:text-gray-400
          `}
        />
      </div>

      {errors && 
        <p className="pt-1 text-sm text-red-600 dark:text-red-500">
          {errors.message}
        </p>
      }
    </div>
  );
}

export default Input;