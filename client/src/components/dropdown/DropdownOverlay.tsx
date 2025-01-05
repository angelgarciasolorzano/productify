import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

import { overlayVariants } from "./dropdownVariants";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  className: string;
};

function DropdownOverlay({ children, isOpen, className }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          className={`${ className } absolute mt-2 right-0 origin-top-right z-50`}
        >
          <div className="relative">
            <motion.div className="relative mt-2 bg-white rounded-md shadow-lg border 
              border-borderPrimary overflow-hidden z-10 p-2 dark:bg-slate-800
              dark:border-borderPrimary-dark"
            >
              <div className="relative z-20">
                {children}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DropdownOverlay;