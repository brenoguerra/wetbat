import { Column, useTable } from 'react-table'

import { Container, Title, Data } from './styles'

interface TableProps {
  columns: Column<object>[]
  data: object[]
}

export const Table = ({ columns, data }: TableProps) => {
  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow 
  } = useTable({
    columns,
    data
  })

  return (
    <Container {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <Title {...column.getHeaderProps()}>{column.render('Header')}</Title>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <Data style={{ color: 'gray' }} {...cell.getCellProps()}>{cell.render('Cell')}</Data>
              })}
            </tr>
          )
        })}
      </tbody>
    </Container>
  )
}