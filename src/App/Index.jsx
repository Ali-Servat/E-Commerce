import { Fragment } from 'react';
import Router from './Router';
import BaseStyles from './BaseStyles';
import Modal from '../components/Modal/Modal';
import { ModalProvider } from '../Shared/context/modal-context';

function App() {
     return (
          <Fragment>
               <ModalProvider>
                    <BaseStyles />
                    <Router />
                    <Modal />
               </ModalProvider>
          </Fragment>
     );
}

export default App;
