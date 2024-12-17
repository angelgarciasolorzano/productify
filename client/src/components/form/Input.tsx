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
    <div className="w-full">
      <label
        htmlFor={inputName}
        className="block text-sm font-semibold mb-2 text-gray-800 dark:text-white"
      >
        {labelName}
      </label>

      <div className="relative">
        <input
          {...register(inputName)}
          {...inputProps}
          className={
            `${Icon ? 'pl-8' : 'pl-2'} pr-4 py-2 border w-full rounded-md shadow-sm text-sm 
              dark:text-gray-200 dark:bg-gray-700 dark:placeholder:text-gray-200 ${
              errors
              ? `border-red-500 focus:outline-red-500 focus:text-gray-800
                dark:border-red-500 dark:focus:outline`
              : `focus:outline-blue-400 border-gray-400 focus:text-gray-800
                dark:focus:outline-gray-200`
            }`
          }
        />

        {Icon &&
          <Icon className="absolute top-0 bottom-0 w-5 h-5 m-auto text-gray-800 start-2 
            dark:text-gray-200"
          />
        }
      </div>

      {errors && <p className="pt-1 text-sm text-red-500">{errors.message}</p>}
    </div>
  )
}

export default Input;