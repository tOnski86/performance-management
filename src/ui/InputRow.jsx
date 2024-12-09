import styled from 'styled-components';
import InputError from './InputError';

const Container = styled.div`
  margin-bottom: 1rem;
`;

const StyledInputRow = styled.div`
  display: grid;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 1.3rem;
`;

function InputRow({ label, children, error }) {
  return (
    <Container>
      <StyledInputRow>
        {label && <Label htmlFor={children.props.id}>{label}</Label>}
        {children}
      </StyledInputRow>
      {error && <InputError error={error} />}
    </Container>
  );
}

export default InputRow;
