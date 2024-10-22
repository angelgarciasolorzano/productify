import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  type: string
  placeholder: string;
  labelName: string;
  inputName: string;
};

function Input({icon: Icon, type, placeholder, labelName, inputName}: Props) {
  return (
    <div className="w-full">
      <label htmlFor={inputName} className="block font-semibold text-sm text-gray-800">
        {labelName}
      </label>

      <div className="relative">
        <input
          type={type}
          name={inputName}
          placeholder={placeholder}
          className={
            `px-4 py-2 pl-8 pr-4 border w-full rounded-md shadow-sm text-sm border-gray-400
            focus:outline-blue-400 focus:text-gray-800`
          }
        />
        <Icon className="absolute start-2 top-0 bottom-0 m-auto w-5 h-5 text-gray-800" />
      </div>
    </div>
  )
}

export default Input;