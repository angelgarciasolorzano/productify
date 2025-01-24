import { AnimatePresence, motion } from "framer-motion";
import { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { useClickOutside } from "../../hooks";
import { modalAnimation, modalFondoAnimation } from "./modalVariants";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

type ModalTitleProps = Pick<ModalProps, "onClose"> & { title: string };
type ModalContentProps = Pick<ModalProps, "children" | "className">;
type ModalFooterProps = Pick<ModalProps, "children" | "className">;

export function Modal({ isOpen, onClose, children, className }: ModalProps) {
  const modalRoot = document.getElementById("modal-root");
  const modalRef = useClickOutside<HTMLDivElement>({ toggle: onClose });

  useEffect(() => {
    if (modalRoot) {
      modalRoot.classList.toggle("pointer-events-none", !isOpen);
    }
  }, [isOpen, modalRoot]);

  if (!modalRoot) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={modalFondoAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-black/50 z-50"
          />

          <motion.div
            variants={modalAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
          >
            <div
              ref={modalRef}
              className={`bg-white px-2 rounded-xl shadow-xl max-w-[85%] max-h-[90vh] 
                pointer-events-auto overflow-hidden dark:bg-dark-720 ${className}`
              }
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    modalRoot
  )
};

export function ModalTitle({ onClose, title }: ModalTitleProps) {
  return (
    <div className="flex justify-between items-center mt-2 px-2 text-xl">
      <span className="text-green-600 font-semibold dark:text-green-500">
        {title}
      </span>

      <MdOutlineClose 
        size={24} 
        onClick={onClose} 
        className="cursor-pointer text-gray-600 hover:text-black 
        dark:text-gray-400 dark:hover:text-white" 
      />
    </div> 
  )
};

export function ModalContent({ children }: ModalContentProps) {
  return (
    <div className="overflow-auto px-2 max-h-[80vh] scrollbar-thin 
      dark:scrollbar-thumb-gray-500 dark:scrollbar-track-dark-720"
    > 
      {children}
    </div>
  )
};

export function ModalFooter({ children }: ModalFooterProps) {
  return (
    <div className="px-4 pt-4">
      {children}
    </div>
  )
};