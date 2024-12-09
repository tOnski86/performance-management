import styled from 'styled-components';
import InputError from './InputError';

const StyledInputRow = styled.div`
  display: grid;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 1.3rem;
`;

function InputRow({ label, children, error }) {
  return (
    <div>
      <StyledInputRow>
        {label && <Label htmlFor={children.props.id}>{label}</Label>}
        {children}
      </StyledInputRow>
      {error && <InputError error={error} />}
    </div>
  );
}

export default InputRow;
