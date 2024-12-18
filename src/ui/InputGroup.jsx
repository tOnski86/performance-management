import styled from 'styled-components';

const StyledInputGroup = styled.div`
  display: grid;

  @media (min-width: 720px) {
    grid-template-columns: repeat(
      ${props => props.$columns},
      minmax(20rem, 1fr)
    );
    column-gap: 1rem;
  }
`;

function InputGroup({ columns, children }) {
  return <StyledInputGroup $columns={columns}>{children}</StyledInputGroup>;
}

export default InputGroup;
