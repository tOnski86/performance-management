import styled from 'styled-components';

import Logo from './Logo';
import Navigation from './Navigation';

const StyledSidebar = styled.aside`
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  user-select: none;
  border-right: 0.1rem solid var(--color-grey-light-2);
  color: var(--color-white);
  background-color: var(--color-green-1);

  @media (min-width: 1024px) {
    min-height: 100vh;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <Navigation />
    </StyledSidebar>
  );
}

export default Sidebar;
