import styled from 'styled-components';

const StyledSidebar = styled.aside`
  grid-row: 1/-1;
  border-right: 0.1rem solid var(--color-grey-light-1);
`;

function Sidebar() {
  return <StyledSidebar>Sidebar</StyledSidebar>;
}

export default Sidebar;
