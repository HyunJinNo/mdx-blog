import { useRef } from "react";

export const useDebounce = <T extends unknown[]>(
  callback: (...params: T) => void,
  debounceTime = 1000,
) => {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...params: T) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      callback(...params);
      timeout.current = null;
    }, debounceTime);
  };
};
