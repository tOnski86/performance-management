import { useQueryClient, useMutation } from '@tanstack/react-query';
import { insertUser as insertUserApi } from '../../services/apiUsers';
import toast from 'react-hot-toast';

export function useInsertUser() {
  const queryClient = useQueryClient();

  const { isPending: isInsertingUser, mutate: insertUser } = useMutation({
    mutationFn: insertUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      toast.success('User successfully added');
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  return { isInsertingUser, insertUser };
}
