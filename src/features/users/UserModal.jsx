import { HiOutlineUserPlus } from 'react-icons/hi2';

import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import UserForm from './UserForm';

function UserModal() {
  return (
    <Modal>
      <Modal.Control controlName='add-user'>
        <Button type='primary'>
          <HiOutlineUserPlus />
          <span>Add User</span>
        </Button>
      </Modal.Control>
      <Modal.Window windowName='add-user'>
        <UserForm />
      </Modal.Window>
    </Modal>
  );
}

export default UserModal;
