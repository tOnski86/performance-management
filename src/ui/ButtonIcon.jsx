import styled from 'styled-components';

const ButtonIcon = styled.button`
  border: none;
  background: none;
  color: var(--color-green-1);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--color-green-3);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export default ButtonIcon;
