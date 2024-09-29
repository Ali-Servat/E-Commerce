import { ModalContent, StyledBackDrop, StyledModal } from "./Modal.Styled";
import { ReactNode } from "react";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) => {
  return isOpen ? (
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
  ) : null;
};

export default Modal;
