import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Sidebar from './Sidebar';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 25rem 1fr;
    grid-template-rows: 10rem 1fr;
  }
`;

const Main = styled.main`
  padding: 1.2rem 4.8rem;
  overflow-y: scroll;
  scrollbar-width: thin;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
