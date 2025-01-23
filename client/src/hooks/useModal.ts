import { useCallback, useState } from "react";

function useModal(inialState: boolean = false) {
  const [open, setOpen] = useState<boolean>(inialState);

  const toggle = (): void => {
    setOpen(!open);
  };

  const close = useCallback((callback?: () => void) => {
    setOpen(false);
    if (callback) callback(); 
  }, []);

  return { open, toggle, close };
}

export default useModal;