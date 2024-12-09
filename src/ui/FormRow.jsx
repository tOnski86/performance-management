import styled from 'styled-components';

const StyledFormRow = styled.div``;

const Label = styled.label``;

const Error = styled.span``;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error />}
    </StyledFormRow>
  );
}

export default FormRow;
