//* Variantes para animar desplazamiento (desplazamiento desde la izquierda)
export const desIzquierdoVariants = {
  hidden: { opacity: 0, x: -50 }, //TODO Estado inicial: invisible y desplazado a la izquierda
  visible: { 
    opacity: 1, x: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeInOut" 
    } 
  }, //? Estado final: visible y en su posición original
};

//* Variantes para animar desplazamiento (desplazamiento desde la derecha)
export const desDerechoVariants = {
  hidden: { opacity: 0, x: 50 }, //TODO Estado inicial: invisible y desplazado a la derecha
  visible: { 
    opacity: 1, x: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeInOut" 
    } 
  }, //? Estado final: visible y en su posición original
};

//* Variantes para un contenedor que coordina animaciones escalonadas
export const containerVariants = {
  hidden: { opacity: 0 }, //TODO Estado inicial: el contenedor es invisible
  visible: {
    opacity: 1, //TODO El contenedor se hace visible
    transition: {
      staggerChildren: 0.2, //TODO Retraso entre las animaciones de los hijos
    },
  },
};

//* Variantes para animar elementos individuales (desplazamiento desde abajo)
export const itemVariants = {
  hidden: { opacity: 0, y: 20 }, //TODO Estado inicial: invisible y desplazado hacia abajo
  visible: { 
    opacity: 1, y: 0, 
    transition: { 
      duration: 0.5 
    } 
  }, //? Estado final: visible y en su posición original
};