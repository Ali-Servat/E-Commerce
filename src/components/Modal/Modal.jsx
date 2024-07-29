import PropTypes from "prop-types";
import { ModalContent, StyledBackDrop, StyledModal } from "./Modal.Styled";

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    isOpen && (
      <StyledModal
        open={isOpen}
        onClose={onClose}
        slots={{ backdrop: StyledBackDrop }}
      >
        <ModalContent>
          <h3>{title}</h3>
          <hr />
          <p>{children}</p>
        </ModalContent>
      </StyledModal>
    )
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.string,
};

export default Modal;
