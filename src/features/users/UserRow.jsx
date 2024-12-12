import {
  HiOutlineChatBubbleLeft,
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from 'react-icons/hi2';
import { useDeleteUser } from './useDeleteUser';

import { formatDate } from '../../utilitiles/helpers';
import Table from '../../ui/Table';
import Pill from '../../ui/Pill';
import ButtonIcon from '../../ui/ButtonIcon';
import ButtonGroup from '../../ui/ButtonGroup';
import Image from '../../ui/Image';
import { useState } from 'react';
import UserForm from './UserForm';

function UsersRow({ user }) {
  const { isDeletingUser, deleteUser } = useDeleteUser();

  const [isOpen, setIsOpen] = useState(false);

  const {
    id,
    photoUrl,
    emailAddress,
    firstName,
    lastName,
    startDate,
    endDate,
  } = user;

  return (
    <>
      <Table.Row>
        <Image src={photoUrl} alt={`Photo of ${firstName} ${lastName}`} />
        <div>{emailAddress}</div>
        <div>{`${firstName} ${lastName}`}</div>
        <div>{formatDate(startDate)}</div>
        <div>{!endDate ? '—' : formatDate(endDate)}</div>
        <div>
          {!endDate ? (
            <Pill
              backgroundcolor='var(--color-green-5)'
              color='var(--color-black)'
            >
              Active
            </Pill>
          ) : (
            <Pill
              backgroundcolor='var(--color-magenta-3)'
              color='var(--color-black)'
            >
              Inactive
            </Pill>
          )}
        </div>
        <ButtonGroup>
          <ButtonIcon>
            <HiOutlineEye />
          </ButtonIcon>
          <ButtonIcon>
            <HiOutlineChatBubbleLeft />
          </ButtonIcon>
          <ButtonIcon onClick={() => setIsOpen(isOpen => !isOpen)}>
            <HiOutlinePencilSquare />
          </ButtonIcon>
          <ButtonIcon onClick={() => deleteUser(id)} disabled={isDeletingUser}>
            <HiOutlineTrash />
          </ButtonIcon>
        </ButtonGroup>
      </Table.Row>

      {isOpen && <UserForm editUser={user} />}
    </>
  );
}

export default UsersRow;
