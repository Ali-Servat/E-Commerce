import { createContext, useContext, useReducer } from "react";
import Proptypes from "prop-types";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const modalReducer = (_, action) => {
    switch (action.type) {
      case "open":
        return {
          isOpen: true,
          title: action.payload.title,
          text: action.payload.text,
        };
      case "close":
        return { isOpen: false, title: "", text: "" };

      default:
        throw new Error("Unrecognized action type for modal reducer");
    }
  };

  const [modalState, dispatch] = useReducer(modalReducer, {
    isOpen: false,
    title: "",
    text: "",
  });

  return (
    <ModalContext.Provider value={{ modalState, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: Proptypes.element,
};

export const useModal = () => useContext(ModalContext);
