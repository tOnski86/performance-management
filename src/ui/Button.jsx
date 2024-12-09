import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.4rem;
  border: none;
  border-radius: 50rem;
  font-size: 1.3rem;
  cursor: pointer;
  transition: color 0.2s;

  ${props =>
    props.type &&
    css`
      background-color: var(--color-green-4);
      color: var(--color-white);

      &:hover {
        background-color: var(--color-green-3);
      }
    `}

  & svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export default Button;
