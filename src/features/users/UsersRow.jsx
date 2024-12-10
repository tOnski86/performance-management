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
import Image from '../../ui/Image';

function UsersRow({ user }) {
  const {
    photoUrl,
    emailAddress,
    firstName,
    lastName,
    startDate,
    endDate,
    // roles: { title },
  } = user;

  console.log(user);

  return (
    <Table.Row>
      <Image src={photoUrl} alt={`Photo of ${firstName} ${lastName}`} />
      <div>{emailAddress}</div>
      <div>{`${firstName} ${lastName}`}</div>
      {/* <div>{title}</div> */}
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
