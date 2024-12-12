import { useState, createContext, useContext, cloneElement } from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60rem;
  padding: 4rem;
  border-radius: 1rem;
  box-shadow: var(--box-shadow-sm);
  background-color: var(--color-grey-light-1);
  transition: all 0.2s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-backdrop);
  backdrop-filter: blur(0.1rem);
  z-index: 9999;
  transition: all 0.2s;
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [modalName, setModalName] = useState('');

  const closeModal = () => setModalName('');
  const openModal = setModalName;

  return (
    <ModalContext.Provider value={{ modalName, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function Control({ children, controlName }) {
  const { openModal } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => openModal(controlName) });
}

function Window({ children, windowName }) {
  const { modalName, closeModal } = useContext(ModalContext);

  if (windowName !== modalName) return null;

  return (
    <Overlay>
      <StyledModal>{children}</StyledModal>;
    </Overlay>
  );
}

Modal.Control = Control;
Modal.Window = Window;

export default Modal;
