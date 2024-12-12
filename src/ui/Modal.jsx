import { useState, createContext, useContext, cloneElement } from 'react';
import { HiXMark } from 'react-icons/hi2';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60rem;
  padding: 6rem;
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

const Button = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem;
  padding: 0.6rem;
  background: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-magenta-2);
    color: var(--color-grey-light-1);
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }
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
      <StyledModal>
        <Button onClick={closeModal}>
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onCloseModal: closeModal })}</div>
      </StyledModal>
    </Overlay>
  );
}

Modal.Control = Control;
Modal.Window = Window;

export default Modal;
