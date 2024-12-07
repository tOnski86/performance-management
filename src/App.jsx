import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import AppLayout from './ui/AppLayout';
import Team from './pages/Team';
import Users from './pages/Users';
import Targets from './pages/Targets';
import Issues from './pages/Issues';
import PageNotFound from './pages/PageNotFound';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Navigate replace to='team' /> },
      { path: '/team', element: <Team /> },
      { path: '/users', element: <Users /> },
      { path: '/targets', element: <Targets /> },
      { path: '/issues', element: <Issues /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
