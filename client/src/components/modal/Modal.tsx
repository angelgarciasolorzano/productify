import { AnimatePresence, motion } from "framer-motion";
import { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { useClickOutside } from "../../hooks";
import { modalAnimation, modalFondoAnimation } from "./modalVariants";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

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
              className={twMerge(
                `flex flex-col bg-white px-2 rounded-2xl shadow-xl max-w-[85%] max-h-[90vh] 
                pointer-events-auto overflow-hidden dark:bg-dark-720`,
                className
              )}
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

type ModalTitleProps = Pick<ModalProps, "onClose" | "className"> & { title: string };

export function ModalTitle({ onClose, title, className }: ModalTitleProps) {
  return (
    <div className="flex justify-between items-center mt-2 px-2 text-xl">
      <span className={
        twMerge(
          `text-green-600 font-semibold dark:text-green-500`,
          className
        )}
      >
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

type ModalBodyProps = Pick<ModalProps, "children" | "className">;

export function ModalBody({ children, className }: ModalBodyProps) {
  return (
    <div className={
      twMerge(
        `flex-1 overflow-auto px-2 max-h-[80vh] scrollbar-thin 
        dark:scrollbar-thumb-gray-500 dark:scrollbar-track-dark-720`,
        className
      )}
    > 
      {children}
    </div>
  )
};

type ModalFooterProps = Pick<ModalProps, "children" | "className">;

export function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <div className={
      twMerge(
        `px-2 pt-2`,
        className
      )}
    >
      {children}
    </div>
  )
};