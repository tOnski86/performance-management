import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Spinner = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border: 0.5rem solid var(--color-grey-light-3);
  border-bottom-color: var(--color-green-4);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite;
`;

export default Spinner;
