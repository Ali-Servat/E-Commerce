import React, { RefObject, useEffect } from "react";

const useOutsideClickDetector = (
  ref: RefObject<HTMLElement>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    const handleDOMClick = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current?.parentNode?.contains(e.target as HTMLElement)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleDOMClick);

    return () => {
      document.removeEventListener("click", handleDOMClick);
    };
  }, [ref]);
};

export default useOutsideClickDetector;
