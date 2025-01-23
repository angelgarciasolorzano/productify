import { useState } from "react";

function useToggle(inialState: string | null = null) {
  const [state, setState] = useState<string | null>(inialState);

  const toggle = (value: string | null): void => {
    setState((prev) => (prev === value ? null : value));
  };

  const close = (): void => {
    setState(null);
  };

  return { state, toggle, close };
};

export default useToggle;