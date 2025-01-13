import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, RefObject, CSSProperties } from "react";
import { createPortal } from "react-dom";

import { dropdownOverlayVariants } from "./dropdownVariants";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  className: string;
  itemRef: RefObject<HTMLButtonElement>;
};

function DropdownOverlay({ children, isOpen, className, itemRef }: Props) {
  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot || !itemRef.current) {
    return null;
  };

  const { bottom, left, width } = itemRef.current.getBoundingClientRect();

  const styles: CSSProperties = {
    top: `${bottom + window.scrollY + 15}px`,
    right: `${window.innerWidth - (left + width + window.scrollX)}px`
  };
  
  return createPortal (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownOverlayVariants}
          style={styles}
          className={`absolute bg-white shadow-md pointer-events-auto border border-white-200 
            rounded-md p-2 z-50 ${className} dark:bg-dark-700 dark:border-dark-800
          `}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    portalRoot
  );
}

export default DropdownOverlay;