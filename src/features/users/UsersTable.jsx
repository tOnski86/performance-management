import { useGetUsers } from './useGetUsers';

import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import UsersRow from './UsersRow';

function UsersTable() {
  const { loadingUsers, users } = useGetUsers();
  console.log(users);

  if (loadingUsers) return <Spinner />;

  return (
    <Table columns='1.8fr 1.8fr .8fr 1fr 1fr .8fr .8fr'>
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
