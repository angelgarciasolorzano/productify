import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import Loader from "../Loader";

interface Props extends ComponentProps<"button"> {
  loading?: boolean;
  children: ReactNode;
  className?: string;
};

function Button(props: Props) {
  const { loading, children, className, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={twMerge(
        `flex items-center justify-center bg-green-600 text-white
        px-2 text-sm py-2 rounded-xl transition duration-200 ease-in-out
        ${loading ? "bg-black" : "hover:bg-green-700"}`,
        className
      )}
    >
      {loading ? <Loader /> : children}
    </button>
  )
}

export default Button;