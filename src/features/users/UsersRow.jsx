import {
  HiOutlineChatBubbleLeft,
  HiOutlineEye,
  HiOutlinePencilSquare,
} from 'react-icons/hi2';

import { formatDate } from '../../utilitiles/helpers';
import Table from '../../ui/Table';
import Pill from '../../ui/Pill';
import ButtonIcon from '../../ui/ButtonIcon';
import ButtonGroup from '../../ui/ButtonGroup';

function UsersRow({ user }) {
  const { photoUrl, email, firstName, lastName, roleId, startDate, endDate } =
    user;

  return (
    <Table.Row>
      <div>{email}</div>
      <div>{`${firstName} ${lastName}`}</div>
      <div>{roleId}</div>
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
            backgroundcolor='var(--color-magenta-2)'
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
          <HiOutlinePencilSquare />
        </ButtonIcon>
        <ButtonIcon>
          <HiOutlineChatBubbleLeft />
        </ButtonIcon>
      </ButtonGroup>
    </Table.Row>
  );
}

export default UsersRow;
