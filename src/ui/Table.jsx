import { createContext, useContext } from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
  font-size: 1.4rem;
`;

const BaseRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  column-gap: 2rem;
`;

const StyledHeader = styled(BaseRow)`
  padding: 1.6rem 2.4rem;
  border-radius: 0.2rem;
  color: var(--color-white);
  background-color: var(--color-green-3);
`;

const StyledRow = styled(BaseRow)`
  padding: 1.6rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 0.1rem solid var(--color-grey-light-2);
  }
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role='table'>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader as='header' role='row' columns={columns}>
      {children}
    </StyledHeader>
  );
}

function Body({ data, render }) {
  return <section>{data.map(render)}</section>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role='row' columns={columns}>
      {children}
    </StyledRow>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
