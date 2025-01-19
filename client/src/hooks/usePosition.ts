import { RefObject, CSSProperties } from "react";

function usePosition<T extends HTMLElement>(iconRef: RefObject<T>): CSSProperties {
  if (iconRef.current) {
    const rect = iconRef.current.getBoundingClientRect();

    const newStyle: CSSProperties = {
      top: `${rect.bottom + window.scrollY + 15}px`, 
      right: `${window.innerWidth - rect.right - 10}px`, 
    };

    return newStyle;
  }

  return {};
};

export default usePosition;