import { useQueryClient, useMutation } from '@tanstack/react-query';
import { insertUser as insertUserApi } from '../../services/apiUsers';

export function useInsertUser() {
  const queryClient = useQueryClient();

  const { isPending: isInsertingUser, mutate: insertUser } = useMutation({
    mutationFn: insertUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      console.log('Success');
    },
    onError: error => {
      console.log(error.message);
    },
  });

  return { isInsertingUser, insertUser };
}
