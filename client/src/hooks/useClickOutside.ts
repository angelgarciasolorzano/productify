import { RefObject, useEffect, useRef } from "react";

interface Props<T extends HTMLElement> {
  toggle: () => void;
  itemRef: RefObject<T>;
};

function useClickOutside<T extends HTMLElement>(props: Props<T>) {
  const { toggle, itemRef } = props;
  const domNodeRef = useRef<T | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        domNodeRef.current && !domNodeRef.current.contains(event.target as Node)
        && itemRef.current && !itemRef.current.contains(event.target as Node)
      ) {
        toggle();
      }
    };
    
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [toggle, itemRef]);

  return domNodeRef;
};

export default useClickOutside;