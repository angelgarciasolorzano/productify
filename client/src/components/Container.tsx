import { ReactNode } from "react";
import themeStore from "../store/themeStore";

interface Props {
  children: ReactNode;
};

function Container({ children }: Props) {
  const theme = themeStore((state) => state.theme);

  return (
    <div className={`${theme && "dark"}`}>
      <div className="flex flex-col h-screen duration-300 bg-bgPrimary dark:bg-bgPrimary-dark">
        {children}
      </div>
    </div>
  )
}

export default Container;