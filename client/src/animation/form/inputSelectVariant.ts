import { Variants } from "framer-motion";

export const inputSelectVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      duration: 0.2,
      staggerChildren: 0.1,
    },
  },
};