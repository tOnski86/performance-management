import styled from 'styled-components';

const Input = styled.input`
  padding: 0.6rem 1rem;
  font-size: 1.4rem;
  border: 0.1rem solid var(--color-green-2);
  border-radius: 0.2rem;
  transition: all 0.2s;

  &:focus {
    outline: 0.1rem solid var(--color-green-4);
  }
`;

export default Input;
