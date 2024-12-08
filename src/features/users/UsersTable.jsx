import Table from '../../ui/Table';
import { useGetUsers } from './useGetUsers';

function UsersTable() {
  const { loadingUsers, users } = useGetUsers();
  console.log(users);

  return (
    <Table columns='repeat(6, 1fr)'>
      <Table.Header>
        <div>Email Address</div>
        <div>Full Name</div>
        <div>Role</div>
        <div>Start Date</div>
        <div>End Date</div>
        <div>Status</div>
      </Table.Header>

      {/* <Table.Body data={users} /> */}
    </Table>
  );
}

export default UsersTable;
