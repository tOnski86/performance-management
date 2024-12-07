import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <div>Header</div>
      <div>Sidebar</div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
