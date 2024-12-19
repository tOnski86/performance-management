import { createContext, useContext } from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
  font-size: 1.3rem;
  border: 0.1rem solid var(--color-grey-light-2);
  border-radius: 0.1rem;
`;

const BaseRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$columns};
  column-gap: 1rem;

  & > * {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    column-gap: 2rem;
  }
`;

const StyledHeader = styled(BaseRow)`
  padding: 1.6rem 2.4rem;
  border-radius: 0.2rem;
  color: var(--color-white);
  background-color: var(--color-green-3);
`;

const StyledSection = styled.section`
  & > * {
    align-items: center;
  }
`;

const StyledRow = styled(BaseRow)`
  padding: 1.2rem 2.4rem;

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
    <StyledHeader as='header' role='row' $columns={columns}>
      {children}
    </StyledHeader>
  );
}

function Body({ data, render }) {
  return <StyledSection>{data.map(render)}</StyledSection>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role='row' $columns={columns}>
      {children}
    </StyledRow>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
