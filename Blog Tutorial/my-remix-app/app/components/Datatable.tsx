import React, { useMemo, useState } from 'react';
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGlobalFilter,
} from 'react-table';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import * as XLSX from 'xlsx';


const customcss = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '5px 10px',
  border: 'none',
  cursor: 'pointer',
};

function DataTable() {
  const [rowData, setRowData] = useState([
    {'Request Name': "BGV", 
      'Internal Ref No': 4123947, 
      'User': 'Pavan', 
      'Request Time': '40min ago', 
      'Status': 'Finalising', 
      'Action': 'Available Shortly',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company", 
      'Internal Ref No': 2734933, 
      'User': 'Nikhita', 
      'Request Time': '12hrs ago', 
      'Status': 'Ongoing', 
      'Action': 'Cancel',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company Bulk", 
      'Internal Ref No': 4983934, 
      'User': 'Vineet', 
      'Request Time': '1hr ago', 
      'Status': 'Ongoing', 
      'Action': 'Cancel',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "BGV", 
      'Internal Ref No': 4123947, 
      'User': 'Pavan', 
      'Request Time': '40min ago', 
      'Status': 'Finalising', 
      'Action': 'Available Shortly',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company", 
      'Internal Ref No': 2734933, 
      'User': 'Nikhita', 
      'Request Time': '12hrs ago', 
      'Status': 'Ongoing', 
      'Action': 'Cancle',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company Bulk", 
      'Internal Ref No': 4983934, 
      'User': 'Vineet', 
      'Request Time': '1hrs ago', 
      'Status': 'Ongoing', 
      'Action': 'Cancle',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "BGV", 
      'Internal Ref No': 3454544, 
      'User': 'Anurag', 
      'Request Time': '3hrs ago', 
      'Status': 'Completed', 
      'Action': 'Download',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company Bulk", 
      'Internal Ref No': 3545665, 
      'User': 'Lokesh', 
      'Request Time': '5hrs ago', 
      'Status': 'Finalising', 
      'Action': 'Available Shortly',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "BGV", 
      'Internal Ref No': 4384534, 
      'User': 'Sarin', 
      'Request Time': '20min ago', 
      'Status': 'Finalising', 
      'Action': 'Cancle',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company", 
      'Internal Ref No': 3432443, 
      'User': 'Tarun', 
      'Request Time': '9hrs ago', 
      'Status': 'Completed', 
      'Action': 'Download',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "BGV", 
      'Internal Ref No': 4123947, 
      'User': 'Pavan', 
      'Request Time': '40min ago', 
      'Status': 'Finalising', 
      'Action': 'Available Shortly',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company", 
      'Internal Ref No': 2734933, 
      'User': 'Nikhita', 
      'Request Time': '12hrs ago', 
      'Status': 'Ongoing', 
      'Action': 'Cancle',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company Bulk", 
      'Internal Ref No': 4983934, 
      'User': 'Vineet', 
      'Request Time': '1hrs ago', 
      'Status': 'Ongoing', 
      'Action': 'Cancle',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "BGV", 
      'Internal Ref No': 3454544, 
      'User': 'Anurag', 
      'Request Time': '3hrs ago', 
      'Status': 'Completed', 
      'Action': 'Download',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company Bulk", 
      'Internal Ref No': 3545665, 
      'User': 'Lokesh', 
      'Request Time': '5hrs ago', 
      'Status': 'Finalising', 
      'Action': 'Available Shortly',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "BGV", 
      'Internal Ref No': 4384534, 
      'User': 'Sarin', 
      'Request Time': '20min ago', 
      'Status': 'Finalising', 
      'Action': 'Cancle',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company", 
      'Internal Ref No': 3432443, 
      'User': 'Tarun', 
      'Request Time': '9hrs ago', 
      'Status': 'Completed', 
      'Action': 'Download',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "BGV", 
      'Internal Ref No': 4123947, 
      'User': 'Pavan', 
      'Request Time': '40min ago', 
      'Status': 'Finalising', 
      'Action': 'Available Shortly',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company", 
      'Internal Ref No': 2734933, 
      'User': 'Nikhita', 
      'Request Time': '12hrs ago', 
      'Status': 'Ongoing', 
      'Action': 'Cancle',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company Bulk", 
      'Internal Ref No': 4983934, 
      'User': 'Vineet', 
      'Request Time': '1hrs ago', 
      'Status': 'Ongoing', 
      'Action': 'Cancle',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "BGV", 
      'Internal Ref No': 3454544, 
      'User': 'Anurag', 
      'Request Time': '3hrs ago', 
      'Status': 'Completed', 
      'Action': 'Download',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company Bulk", 
      'Internal Ref No': 3545665, 
      'User': 'Lokesh', 
      'Request Time': '5hrs ago', 
      'Status': 'Finalising', 
      'Action': 'Available Shortly',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "BGV", 
      'Internal Ref No': 4384534, 
      'User': 'Sarin', 
      'Request Time': '20min ago', 
      'Status': 'Finalising', 
      'Action': 'Cancle',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company", 
      'Internal Ref No': 3432443, 
      'User': 'Tarun', 
      'Request Time': '9hrs ago', 
      'Status': 'Completed', 
      'Action': 'Download',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "BGV", 
      'Internal Ref No': 4123947, 
      'User': 'Pavan', 
      'Request Time': '40min ago', 
      'Status': 'Finalising', 
      'Action': 'Available Shortly',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company", 
      'Internal Ref No': 2734933, 
      'User': 'Nikhita', 
      'Request Time': '12hrs ago', 
      'Status': 'Ongoing', 
      'Action': 'Cancle',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company Bulk", 
      'Internal Ref No': 4983934, 
      'User': 'Vineet', 
      'Request Time': '1hrs ago', 
      'Status': 'Ongoing', 
      'Action': 'Cancle',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "BGV", 
      'Internal Ref No': 3454544, 
      'User': 'Anurag', 
      'Request Time': '3hrs ago', 
      'Status': 'Completed', 
      'Action': 'Download',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company Bulk", 
      'Internal Ref No': 3545665, 
      'User': 'Lokesh', 
      'Request Time': '5hrs ago', 
      'Status': 'Finalising', 
      'Action': 'Available Shortly',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "BGV", 
      'Internal Ref No': 4384534, 
      'User': 'Sarin', 
      'Request Time': '20min ago', 
      'Status': 'Finalising', 
      'Action': 'Cancle',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    },
    {'Request Name': "Company", 
      'Internal Ref No': 3432443, 
      'User': 'Tarun', 
      'Request Time': '9hrs ago', 
      'Status': 'Completed', 
      'Action': 'Download',
      'Type': 'Individual',     // Add 'Type' column
      'Priority': 'High'       // Add 'Priority' column
    }
    // Add more data here...
  ]);

  const [columnDefs, setColumnDefs] = useState([
    {
      Header: 'Request Name',
      accessor: 'Request Name',
    },
    { 
      Header: 'Internal Ref No',
      accessor: 'Internal Ref No',
    },
    { 
      Header: 'User',
      accessor: 'User',
    },
    { 
      Header: 'Request Time',
      accessor: 'Request Time',
    },
    { 
      Header: 'Status',
      accessor: 'Status',
    },
    { 
      Header: 'Action',
      accessor: 'Action',
    },
  ]);

  const data = useMemo(() => rowData, [rowData]);
  const columns = useMemo(() => columnDefs, [columnDefs]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex, pageSize, filters, globalFilter },
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const exportToExcel = () => {
    const filteredData = page.map((row) =>
      row.cells.map((cell) => cell.value)
    );

    const ws = XLSX.utils.aoa_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');
    XLSX.writeFile(wb, 'table-data.xlsx');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
        <div>

            {/* Export Button */}
            <button
            onClick={exportToExcel}
            className="p-2 rounded-md bg-green-500 hover:bg-green-600 text-white"
            >
            Export to Excel
            </button>
        </div>
      <div className="table-container" style={{ height: '400px', overflowY: 'scroll' }}>
        <table {...getTableProps()} className="table-auto w-full border-collapse border">
            <thead className='sticky top-0 bg-white'>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className="p-3 text-left font-semibold bg-gray-200 border-b"
                        >
                        {column.render('Header')}
                        <span>
                            {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                        </span>
                        </th>
                    ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row);
                    return (
                    <tr {...row.getRowProps()} className="hover:bg-gray-100">
                        {row.cells.map(cell => {
                        return (
                            <td
                            {...cell.getCellProps()}
                            className="p-3 border-t"
                            >
                            {cell.render('Cell')}
                            </td>
                        );
                        })}
                    </tr>
                    );
                })}
            </tbody>                   
        </table>
      </div>
      <div className="mt-4 flex justify-between">
         <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={`p-2 rounded-md ${
            canPreviousPage ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Previous
        </button>
        <div className="flex items-center">
          <span className="mr-2">Page</span>
          <input
            type="number"
            min={1}
            max={page.length}
            value={pageIndex + 1}
            onChange={(e) => {
              const newPage = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(newPage);
            }}
            className="p-2 rounded-md bg-white border"
          />
          <span className="ml-2">of {page.length}</span>
        </div>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className={`p-2 rounded-md ${
            canNextPage ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Next
        </button>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="p-2 rounded-md bg-white border"
        >
          {[5, 10, 20].map((pageSizeOption) => (
            <option key={pageSizeOption} value={pageSizeOption}>
              Show {pageSizeOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DataTable;
