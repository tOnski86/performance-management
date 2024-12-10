import { useQuery } from '@tanstack/react-query';
import { readUsers as readUsersApi } from '../../services/apiUsers';

export function useGetUsers() {
  const { isPending: isReadingUsers, data: users } = useQuery({
    queryKey: ['users'],
    queryFn: readUsersApi,
  });

  return { isReadingUsers, users };
}
