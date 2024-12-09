import { HiOutlineUserPlus } from 'react-icons/hi2';
import UsersTable from '../features/users/UsersTable';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Users() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h2'>Manage Users</Heading>
        <Row type='horizontal'>
          <Button type='primary'>
            <HiOutlineUserPlus />
            <span>Add User</span>
          </Button>
          <p>filter / sort</p>
        </Row>
      </Row>
      <Row>
        <UsersTable />
      </Row>
    </>
  );
}

export default Users;
