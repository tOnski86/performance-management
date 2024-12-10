import { useQueryClient, useMutation } from '@tanstack/react-query';
import { deleteUser as deleteUserApi } from '../../services/apiUsers';

export function useDeleteUser() {
  const queryClient = useQueryClient();

  const { isPending: isDeletingUser, mutate: deleteUser } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      console.log('Success');
    },
    onError: error => {
      console.log(error.message);
    },
  });

  return { isDeletingUser, deleteUser };
}
