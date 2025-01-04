import { Variants } from "framer-motion";

export const expandableVariants: Variants = {
  open: {
    height: "auto", 
    opacity: 1, 
    transition: { duration: 0.3 }, 
  },
  closed: {
    height: 0, 
    opacity: 0, 
    transition: { duration: 0.3 }, 
  },
};

export const overlayVariants: Variants = {
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