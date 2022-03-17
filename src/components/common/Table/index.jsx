import { useMemo } from 'react';
import { useTable } from 'react-table';

const Table = ({ body, header }) => {
  const data = useMemo(() => body, [body]);
  const columns = useMemo(() => header, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table
      {...getTableProps()}
      className="table-auto w-full overflow-x-scroll block sm:table"
    >
      <thead className="bg-white rounded-md hidden sm:table-header-group">
        {headerGroups.map((headerGroup) => (
          <tr className="text-left" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="p-2">
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody
        {...getTableBodyProps()}
        className="block sm:table-row-group w-full"
      >
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className="odd:bg-primary-3 even:bg-white block sm:table-row w-full mb-0 sm:mb-[15px]"
            >
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  className="block py-2 sm:table-cell w-full 
                      sm:w-auto pl-[50%] sm:pl-2 text-right 
                      sm:text-left relative sm:before:content-[''] 
                      before:content-[attr(data-label)] before:absolute 
                      before:left-0 before:w-1/2 before:text-sm text-primary-1 
                      before:font-semibold before:text-left"
                  data-label={columns.Header}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
