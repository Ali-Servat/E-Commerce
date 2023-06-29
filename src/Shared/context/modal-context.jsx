import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
     const [modalText, setModalText] = useState('');
     return (
          <ModalContext.Provider value={[modalText, setModalText]}>
               {children}
          </ModalContext.Provider>
     );
};

export const useModalValue = () => useContext(ModalContext);
