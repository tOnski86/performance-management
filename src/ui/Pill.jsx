import styled from 'styled-components';

const StyledPill = styled.span`
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border-radius: 0.8rem;
  background-color: ${props => props.$backgroundcolor};
  color: ${props => props.$color};
  cursor: not-allowed;
`;

function Pill({ backgroundcolor, color, children }) {
  return (
    <StyledPill $backgroundcolor={backgroundcolor} $color={color}>
      {children}
    </StyledPill>
  );
}

export default Pill;
