import { useEffect } from 'react';
import { useModalValue } from '../../Shared/context/modal-context';
import DialogBox from '../DialogBox/DialogBox';
import { ModalContainer } from './styles';

const Modal = () => {
     const modalText = useModalValue()[0];

     return (
          modalText && (
               <ModalContainer>
                    <DialogBox />
               </ModalContainer>
          )
     );
};

export default Modal;
