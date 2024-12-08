import {
  HiOutlineChatBubbleLeft,
  HiOutlineEye,
  HiOutlinePencilSquare,
} from 'react-icons/hi2';

import { formatDate } from '../../utilitiles/helpers';
import Table from '../../ui/Table';
import Pill from '../../ui/Pill';
import Button from '../../ui/ButtonIcon';
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
            backgroundColor='var(--color-green-4)'
            color='var(--color-black)'
          >
            Active
          </Pill>
        ) : (
          <Pill
            backgroundColor='var(--color-magenta-2)'
            color='var(--color-black)'
          >
            Inactive
          </Pill>
        )}
      </div>
      <ButtonGroup>
        <Button>
          <HiOutlineEye />
        </Button>
        <Button>
          <HiOutlinePencilSquare />
        </Button>
        <Button>
          <HiOutlineChatBubbleLeft />
        </Button>
      </ButtonGroup>
    </Table.Row>
  );
}

export default UsersRow;
