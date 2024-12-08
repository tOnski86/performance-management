import { useGetUsers } from './useGetUsers';

import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import UsersRow from './UsersRow';

function UsersTable() {
  const { loadingUsers, users } = useGetUsers();
  console.log(users);

  if (loadingUsers) return <Spinner />;

  return (
    // <Table columns='1.8fr 1.8fr .8fr 1fr 1fr .8fr .8fr'>
    <Table>
      <Table.Header>
        <th>Email Address</th>
        <th>Full Name</th>
        <th>Role</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Status</th>
        <th>Actions</th>
      </Table.Header>

      <Table.Body
        data={users}
        render={user => <UsersRow user={user} key={user.id} />}
      />
    </Table>
  );
}

export default UsersTable;
