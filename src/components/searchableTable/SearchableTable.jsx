import React from "react";
import {
  useTable,
  useGlobalFilter,
  useRowSelect,
  usePagination
} from "react-table";

import "../../bootstrap.css";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">Search</span>
      <input
        className="form-control"
        value={globalFilter || ""}
        onChange={e => {
          setGlobalFilter(e.target.value || undefined);
        }}
      />
    </div>
  );
}

function selectedID(rowID){
  rowID = JSON.stringify(rowID);
  console.log(rowID);
}

function SearchableTable({ columns, data}) {
  const pageIndex = 1;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: {selectedRowIds}
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.flatColumns.push(columns => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox onClick={selectedID(row.getToggleRowSelectedProps())} {...row.getToggleRowSelectedProps()} />
            </div>
          )
        },
        ...columns
      ]);
    }
  );

  return (
    <>
      <div className="container">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <div className="container">
        <table className="table table-striped table-bordered" {...getTableProps()}>
          <thead className="thead-dark"> 
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="pagination container">
        <button className="btn btn-outline-dark" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button className="btn btn-outline-dark" onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button className="btn btn-outline-dark" onClick={() => nextPage()}  disabled={!canNextPage}>
          {">"}
        </button>
        <button className="btn btn-outline-dark" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
        <span>
          Page 
          <strong>
             {pageIndex} of {pageOptions.length} 
          </strong>
        </span>
      </div>
    </>
  );
}

export default SearchableTable;
