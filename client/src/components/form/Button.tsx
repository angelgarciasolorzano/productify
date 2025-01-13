import { ComponentProps, ReactNode } from "react";
import Loader from "../Loader";

interface Props extends ComponentProps<"button"> {
  loading: boolean;
  children: ReactNode;
};

function Button(props: Props) {
  const { loading, children, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={
        `flex items-center justify-center bg-green-600 text-white min-w-[30%] px-4 text-sm py-2 
        rounded-xl transition duration-200 ease-in-out hover:bg-green-700 
        active:bg-green-900 focus:outline-none mb-4`
      }
    >
      {loading ? <Loader /> : children}
    </button>
  )
}

export default Button;