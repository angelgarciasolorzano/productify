import { AnimatePresence, motion } from "framer-motion";
import { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { useClickOutside } from "../hooks";
import Separator from "./Separator";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({isOpen, onClose, children}: Props) {
  const modalRoot = document.getElementById("modal-root");
  const modalRef = useClickOutside<HTMLDivElement>({toggle: onClose});

  useEffect(() => {
    if (modalRoot) {
      modalRoot.classList.toggle("pointer-events-none", !isOpen); 
    }
  }, [isOpen, modalRoot]);

  if (!modalRoot) return null;

  return createPortal (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
          />

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
          >
            <div ref={modalRef} className="bg-white px-2 rounded-xl shadow-xl max-w-[85%] 
              max-h-[90vh] pointer-events-auto overflow-hidden dark:bg-dark-720"
            >
              <div className="flex justify-between items-center mt-2 px-2 text-lg">
                <span className="text-green-600 font-semibold dark:text-green-500">
                  Categorias
                </span>

                <MdOutlineClose 
                  size={24} 
                  onClick={onClose} 
                  className="cursor-pointer text-gray-600 hover:text-black 
                  dark:text-gray-400 dark:hover:text-white" 
                />
              </div> 

              <Separator />

              <div className="overflow-auto px-2 max-h-[80vh] scrollbar-thin 
                dark:scrollbar-thumb-gray-500 dark:scrollbar-track-dark-720"
              > 
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    modalRoot
  )
}

export default Modal;