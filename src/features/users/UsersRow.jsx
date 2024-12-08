import Table from '../../ui/Table';
import { formatDate } from '../../utilitiles/helpers';

function UsersRow({ user }) {
  const { email, firstName, lastName, roleId, startDate, endDate } = user;
  return (
    <Table.Row>
      <td>{email}</td>
      <td>
        {firstName} {lastName}
      </td>
      <td>{roleId}</td>
      <td>{formatDate(startDate)}</td>
      <td>{!endDate ? '—' : endDate}</td>
      <td>{!endDate ? 'Active' : endDate}</td>
    </Table.Row>
  );
}

export default UsersRow;
