import styled from 'styled-components';

const StyledPill = styled.span`
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border-radius: 50rem;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`;

function Pill({ backgroundcolor, color, children }) {
  return (
    <StyledPill $backgroundcolor={backgroundcolor} color={color}>
      {children}
    </StyledPill>
  );
}

export default Pill;
