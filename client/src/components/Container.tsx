import { ReactNode } from "react";

interface Props {
  children: ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen duration-300 bg-white-100 dark:bg-dark-700">
      {children}
    </div>
  )
}

export default Container;