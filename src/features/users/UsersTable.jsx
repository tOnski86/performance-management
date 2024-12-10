import { useGetUsers } from './useReadUsers';

import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import UsersRow from './UsersRow';

function UsersTable() {
  const { isReadingUsers, users } = useGetUsers();

  if (isReadingUsers) return <Spinner />;

  return (
    <Table columns='minmax(4rem, 0.2fr) minmax(10rem, 1fr) minmax(10rem, 1fr) minmax(10rem, 1.2fr) repeat(4, minmax(8rem, 0.4fr))'>
      <Table.Header>
        <div></div>
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
