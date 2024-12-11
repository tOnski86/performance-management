import { HiOutlineUserPlus } from 'react-icons/hi2';
import UsersTable from '../features/users/UsersTable';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { useState } from 'react';
import UserForm from '../features/users/UserForm';

function Users() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h2'>Manage Users</Heading>
        <Row type='horizontal'>
          <Button type='primary' onClick={() => setIsOpen(isOpen => !isOpen)}>
            <HiOutlineUserPlus />
            <span>Add User</span>
          </Button>
          <p>filter / sort</p>
        </Row>
      </Row>

      <Row>
        <UsersTable />
        {isOpen && <UserForm />}
      </Row>
    </>
  );
}

export default Users;
