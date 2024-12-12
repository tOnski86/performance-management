import { HiOutlineUserPlus } from 'react-icons/hi2';
import { useState } from 'react';

import UsersTable from '../features/users/UsersTable';
import UserForm from '../features/users/UserForm';
import UserModal from '../features/users/UserModal';

import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Users() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h2'>Manage Users</Heading>
        <Row type='horizontal'>
          <UserModal />
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
