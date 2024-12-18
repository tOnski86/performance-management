import UsersTable from '../features/users/UsersTable';
import UserModal from '../features/users/UserModal';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Users() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h2'>Manage Users</Heading>
        <Row type='horizontal'>
          <UserModal />
        </Row>
      </Row>

      <Row>
        <UsersTable />
      </Row>
    </>
  );
}

export default Users;
