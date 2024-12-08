import { createContext, useContext } from 'react';

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <table>{children}</table>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  return <thead>{children}</thead>;
}

function Body({ data, render }) {
  return <tbody>{data.map(render)}</tbody>;
}

function Row({ children }) {
  return <tr>{children}</tr>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
