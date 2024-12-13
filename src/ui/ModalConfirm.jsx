import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi2';
import { capitalize } from '../utilitiles/helpers';

import Button from './Button';
import Heading from './Heading';
import styled from 'styled-components';

const StyledModalConfirm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & p {
    margin-bottom: 1rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 0.8rem;
  }
`;

function ModalConfirm({
  resource,
  operation,
  disabled,
  onConfirm,
  onCloseModal,
}) {
  return (
    <StyledModalConfirm>
      <Heading as='h2'>{`${capitalize(operation)} ${capitalize(
        resource
      )}`}</Heading>
      <p>
        Are you sure you want to {operation} this {resource}?
      </p>

      <div>
        <Button onClick={onCloseModal} type='neutral'>
          <HiOutlineXCircle />
          <span>Cancel</span>
        </Button>
        <Button onClick={onConfirm} disabled={disabled} type='secondary'>
          <HiOutlineCheckCircle />
          <span>{capitalize(operation)}</span>
        </Button>
      </div>
    </StyledModalConfirm>
  );
}

export default ModalConfirm;
