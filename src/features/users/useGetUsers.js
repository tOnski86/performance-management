import { useQuery } from '@tanstack/react-query';
import { readUsers } from '../../services/apiUsers';

export function useGetUsers() {
  const { isPending: loadingUsers, data: users } = useQuery({
    queryKey: ['users'],
    queryFn: readUsers,
  });

  return { loadingUsers, users };
}
