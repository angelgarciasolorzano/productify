import { IconType } from "react-icons";
import { FieldError, FieldValues, UseFormRegister, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  icon: IconType;
  type: string
  placeholder: string;
  labelName: string;
  inputName: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldError;
};

function Input<T extends FieldValues>(props: Props<T>) {
  const { register, inputName, labelName, type, placeholder, icon: Icon, errors } = props;

  return (
    <div className="w-full">
      <label 
        htmlFor={inputName} 
        className="block font-semibold text-sm text-gray-800 dark:text-white"
      >
        {labelName}
      </label>

      <div className="relative">
        <input
          {...register(inputName)}
          type={type}
          name={inputName}
          placeholder={placeholder}
          className={
            `px-4 py-2 pl-8 pr-4 border w-full rounded-md shadow-sm text-sm 
           border-gray-400 dark:bg-gray-700 dark:placeholder:text-gray-200 ${
              errors
              ? 'border-red-500 focus:outline-red-500 focus:text-gray-800 dark:focus:outline-none dark:focus:border-red-600 dark:text-gray-200'
              : 'focus:outline-blue-400 focus:text-gray-800 dark:text-gray-200 dark:focus:outline-gray-200'
            }`
          }
        />
        <Icon className="absolute start-2 top-0 bottom-0 m-auto w-5 h-5 
          text-gray-800 dark:text-gray-200" 
        />
      </div>
      
      {errors && <p className="pt-1 text-red-500 text-sm">{errors.message}</p>}
    </div>
  )
}

export default Input;