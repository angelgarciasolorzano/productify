import { Transition, Variants } from "framer-motion";

export const desplazamientoVariantes = (direccion: "Izquierda" | "Derecha"): Variants => {
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

export const createContainerVariantes = (transitionConfig: Transition): Variants => {
  return {
    hidden: { opacity: 0 }, 
    visible: {
      opacity: 1,
      transition: transitionConfig
    },
  };
};

export const createItemVariantes = (direccion: "arriba" | "abajo", duracion: number = 0.3): Variants => {
  return {
    hidden: { opacity: 0, y: direccion === "arriba" ? -20 : 20 }, 
    visible: { 
      opacity: 1, y: 0, 
      transition: { 
        duration: duracion 
      } 
    },
  };
};