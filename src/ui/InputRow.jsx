import styled from 'styled-components';

const StyledInputRow = styled.div`
  display: grid;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
`;

const Error = styled.span``;

function InputRow({ label, error, children }) {
  return (
    <StyledInputRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error />}
    </StyledInputRow>
  );
}

export default InputRow;
