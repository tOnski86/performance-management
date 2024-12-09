import { useGetUsers } from './useGetUsers';

import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import UsersRow from './UsersRow';

function UsersTable() {
  const { loadingUsers, users } = useGetUsers();

  if (loadingUsers) return <Spinner />;

  return (
    <Table columns='minmax(20rem, 1.8fr) minmax(20rem, 1.8fr) repeat(5, minmax(10rem, 0.8fr))'>
      <Table.Header>
        <div>Email Address</div>
        <div>Full Name</div>
        <div>Role</div>
        <div>Start Date</div>
        <div>End Date</div>
        <div>Status</div>
        <div>Actions</div>
      </Table.Header>

      <Table.Body
        data={users}
        render={user => <UsersRow user={user} key={user.id} />}
      />
    </Table>
  );
}

export default UsersTable;
