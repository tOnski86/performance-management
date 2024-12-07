import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
