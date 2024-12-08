import { createContext, useContext } from 'react';
import styled from 'styled-components';

const BaseRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
`;

const StyledHeader = styled(BaseRow)``;

const StyledRow = styled(BaseRow)``;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={columns}>
      <div role='table'>{children}</div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader role='row' columns={columns}>
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
