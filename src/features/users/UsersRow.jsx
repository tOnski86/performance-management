import styled, { css } from 'styled-components';
import Table from '../../ui/Table';
import { formatDate } from '../../utilitiles/helpers';
import Pill from '../../ui/Pill';

const StyledSpan = styled.span`
  ${props =>
    props.status === 'active' &&
    css`
      background-color: var(--color-green-4);
      color: var(--color-green-1);
    `}

  ${props =>
    props.status === 'inactive' &&
    css`
      background-color: var(--color-magenta-1);
      color: var(--color-white);
    `}

  padding: .8rem 1.2rem;
  font-size: 1rem;
  border-radius: 50rem;
`;

function UsersRow({ user }) {
  const { email, firstName, lastName, roleId, startDate, endDate } = user;
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
      <div>
        <button>Edit</button>
      </div>
    </Table.Row>
  );
}

export default UsersRow;
