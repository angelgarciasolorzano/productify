import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, RefObject } from "react";
import { createPortal } from "react-dom";

import { dropdownOverlayVariants } from "./dropdownVariants";
import { useClickOutside, usePosition } from "../../hooks";

interface Props<T extends HTMLElement> {
  children: ReactNode;
  isOpen: boolean;
  className: string;
  itemRef: RefObject<T>;
  toggle: () => void;
};

function DropdownOverlay<T extends HTMLElement>(props: Props<T>) {
  const { children, isOpen, className, itemRef, toggle } = props;
  
  const dropdownRef = useClickOutside<T>({toggle, itemRef});
  const style = usePosition(itemRef);
  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot || !itemRef.current) {
    return null;
  };
  
  return createPortal (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef as RefObject<HTMLDivElement>}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownOverlayVariants}
          style={style}
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