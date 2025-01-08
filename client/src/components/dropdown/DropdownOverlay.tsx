import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

import { dropdownOverlayVariants } from "./dropdownVariants";

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
          variants={dropdownOverlayVariants}
          className={`${ className } absolute mt-2 right-0 origin-top-right z-50`}
        >
          <div className="relative">
            <motion.div className="relative mt-2 bg-white rounded-md shadow-lg border 
              border-white-200 overflow-hidden z-10 p-2 dark:bg-slate-800
              dark:border-dark-800"
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