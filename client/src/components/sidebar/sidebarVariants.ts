import { Variants } from "framer-motion";

export const sidebarContainerVariants: Variants = {
  hidden: { opacity: 0 }, 
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.3,
      when: "beforeChildren"
    } 
  },
};

export const sidebarItemVariants: Variants = {
  hidden: { opacity: 0, y: -20 }, 
  visible: { 
    opacity: 1, y: 0, 
    transition: { 
      duration: 0.3 
    } 
  },
};