import styled from 'styled-components';

const StyledInputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns}, minmax(auto, 1fr));
`;

function InputGroup({ columns, children }) {
  return <StyledInputGroup $columns={columns}>{children}</StyledInputGroup>;
}

export default InputGroup;
