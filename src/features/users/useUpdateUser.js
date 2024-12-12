import { useQueryClient, useMutation } from '@tanstack/react-query';
import { updateUser as updateUserApi } from '../../services/apiUsers';
import toast from 'react-hot-toast';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { isPending: isUpdatingUser, mutate: updateUser } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      toast.success('User successfully updated');
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  return { isUpdatingUser, updateUser };
}
