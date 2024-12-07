import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../services/apiUsers';

export function useGetUsers() {
  const { isPending: loadingUsers, data: users } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  return { loadingUsers, users };
}
