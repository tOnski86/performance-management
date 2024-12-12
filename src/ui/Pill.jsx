import styled, { css } from 'styled-components';

const StyledPill = styled.span`
  padding: 0.8rem 1.2rem;
  font-size: 1.1rem;
  border-radius: 0.8rem;
  cursor: not-allowed;

  ${props =>
    props.$variant === 'active' &&
    css`
      background-color: var(--color-green-5);
    `}

  ${props =>
    props.$variant === 'inactive' &&
    css`
      background-color: var(--color-magenta-3);
    `}
`;

function Pill({ variant, children }) {
  return <StyledPill $variant={variant}>{children}</StyledPill>;
}

export default Pill;
