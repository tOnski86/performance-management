import Table from '../../ui/Table';
import { formatDate } from '../../utilitiles/helpers';

function UsersRow({ user }) {
  const { email, firstName, lastName, roleId, startDate, endDate } = user;
  return (
    <Table.Row>
      <div>{email}</div>
      <div>
        {firstName} {lastName}
      </div>
      <div>{roleId}</div>
      <div>{formatDate(startDate)}</div>
      <div>{!endDate ? '—' : endDate}</div>
      <div>{!endDate ? 'Active' : endDate}</div>
    </Table.Row>
  );
}

export default UsersRow;
