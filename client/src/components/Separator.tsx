import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

function Separator({ className }: Props) {
  return (
    <hr className={twMerge(
      "border-t my-2 border-white-200 dark:border-dark-800",
      className
    )} />
  )
}

export default Separator;