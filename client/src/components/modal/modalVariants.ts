import { Variants } from "framer-motion";

// Animación para el overlay (fondo oscuro del modal)
export const modalFondoAnimation: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Animación para el modal (ventana emergente)
export const modalAnimation: Variants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 300, damping: 30 } 
  },
  exit: { 
    scale: 0.95, 
    opacity: 0, 
    transition: { duration: 0.2 } 
  },
};