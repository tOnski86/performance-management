import { useQueryClient, useMutation } from '@tanstack/react-query';
import { deleteUser as deleteUserApi } from '../../services/apiUsers';
import toast from 'react-hot-toast';

export function useDeleteUser() {
  const queryClient = useQueryClient();

  const { isPending: isDeletingUser, mutate: deleteUser } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      toast.success('User successfully deleted');
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  return { isDeletingUser, deleteUser };
}
