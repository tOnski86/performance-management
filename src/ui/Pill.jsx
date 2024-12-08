import styled from 'styled-components';

const StyledPill = styled.span`
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border-radius: 50rem;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`;

function Pill({ backgroundColor, color, children }) {
  return (
    <StyledPill backgroundColor={backgroundColor} color={color}>
      {children}
    </StyledPill>
  );
}

export default Pill;
