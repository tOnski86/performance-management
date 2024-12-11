import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

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
      <RouterProvider router={router} />
      <Toaster
        position='top-center'
        gutter={8}
        containerStyle={{}}
        toastOptions={{
          style: {
            fontSize: '1.4rem',
            maxWidth: '50rem',
            padding: '1.6rem 2.4rem',
            backgroundColor: 'var(--color-grey-1)',
            color: 'var(--color-green-1)',
            borderRadius: '50rem',
            boxShadow: '0 .1rem 3rem rgba(0, 0, 0, 0.1)',
          },
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
      <GlobalStyles />
    </QueryClientProvider>
  );
}

export default App;
