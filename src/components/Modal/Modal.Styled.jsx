import { Modal as BaseModal } from "@mui/base";
import styled from "styled-components";
import Backdrop from "./Backdrop";

const StyledModal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled("div")`
  max-width: 600px;
  padding: 2em;
  margin: 0 1em;
  background-color: #fff;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
`;

const StyledBackDrop = styled(Backdrop)`
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
  z-index: -1;
`;

export { StyledModal, ModalContent, StyledBackDrop };
