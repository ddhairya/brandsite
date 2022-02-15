import React from 'react'
import { useTable, usePagination, useRowSelect, useSortBy, useAsyncDebounce, useGlobalFilter } from 'react-table'
import { Redirect } from "react-router-dom";
import styled from 'styled-components'

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #ced4da;
      border-right: 1px solid #ced4da;

      :last-child {
        border-right: 0;
      }
    }
  }
  thead {
    color: #42b549;
  }
  .pagination {
    padding: 0.5rem;
  }`;


function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter, }) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search / Filter :{' '}
      <input value={value || ""} onChange={e => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
        placeholder={`Type to look into ${count} records...`}
        style={{ fontSize: '1.1rem', border: '0', width: '230px', }}
      />
    </span>
  )
}

const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef()
  const resolvedRef = ref || defaultRef

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...rest} />
    </>
  )
}
)

function TableCols({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
    selectedFlatRows,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              {/* <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} /> */}
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  // Render the UI for your table

  //console.log(data)
  //console.log(selectedFlatRows)
  return (
    // apply the table props
    <>
      <table {...getTableProps()}>
        <thead>
          {// Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {// Loop over the headers in each row
                  headerGroup.headers.map(column => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {// Render the header
                        column.render('Header')}
                    </th>
                  ))}
              </tr>
            ))
          }
          <tr>
            <th colSpan={visibleColumns.length} style={{ textAlign: 'left', }}>
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {// Loop over the table rows
            page.map(row => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {// Loop over the rows cells
                    row.cells.map(cell => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {// Render the cell contents
                            cell.render('Cell')}
                        </td>
                      )
                    })}
                </tr>
              )
            })}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        {selectedFlatRows.map((d, key) => <Redirect key={key} to={`/ticketdetail?id=${d.original[0]}`} />)}
      </div>
    </>
  )
}

function TBData(props) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 't_id', // accessor is the "key" in the data
      },
      {
        Header: 'Locatoin',
        accessor: 't_l_name', // accessor is the "key" in the data
      },
      {
        Header: 'Equipment',
        accessor: 't_equipment', // accessor is the "key" in the data
      },
      {
        Header: 'Date',
        accessor: 't_reg_date', // accessor is the "key" in the data
      },
      {
        Header: 'Priority',
        accessor: 't_priority', // accessor is the "key" in the data
      },
      {
        Header: 'Status',
        accessor: 't_status', // accessor is the "key" in the data
      },
    ],
    []
  )

  //const data = props.data
  //console.log(data)
  const data = React.useMemo(() => props.data, [props.data])
  //console.log(data)

  return (
    <Styles>
      <TableCols columns={columns} data={data} />
    </Styles>
  )
}
export { TBData }

