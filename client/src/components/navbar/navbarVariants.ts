import { Variants } from "framer-motion";

export const navbarVariants = (direccion: "Izquierda" | "Derecha"): Variants => {
  return {
    hidden: { opacity: 0, x: direccion === "Izquierda" ? -50 : 50 },
    visible: { 
      opacity: 1, x: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeInOut" 
      } 
    }, 
  };
};

export const navbarContainerVariants: Variants = {
  hidden: { opacity: 0 }, 
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.3
    } 
  },
};

export const navbarItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 }, 
  visible: { 
    opacity: 1, y: 0, 
    transition: { 
      duration: 0.3 
    } 
  },
};