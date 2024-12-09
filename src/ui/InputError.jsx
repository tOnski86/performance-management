import styled from 'styled-components';

const StyledInputError = styled.span`
  font-size: 1.2rem;
  color: var(--color-magenta-1);
`;

function InputError({ error }) {
  return <StyledInputError>{error}</StyledInputError>;
}

export default InputError;
