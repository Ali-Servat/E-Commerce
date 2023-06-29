import { useModalValue } from '../../Shared/context/modal-context';
import { DialogBoxContainer } from './styles';

const DialogBox = () => {
     const [message, setMessage] = useModalValue();

     return (
          <DialogBoxContainer>
               {message}
               <button onClick={() => setMessage('')}>x</button>
          </DialogBoxContainer>
     );
};

export default DialogBox;
