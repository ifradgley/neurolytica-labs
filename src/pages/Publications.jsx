import searchIcon from "../assets/images/search-teal.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  useLegacyTable as useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table/legacy";
import { flexRender } from "@tanstack/react-table/flex-render";

import publicationsData from "../data/publications-data.js";

function Publications() {
  const [userInput, setSearchVariable] = useState("");

  const columns = [
    { accessorKey: "title", header: "Title" },
    { accessorKey: "author", header: "Author" },
    { accessorKey: "date", header: "Date" },
    {
      accessorKey: "link",
      header: "Link",
      cell: (info) => (
        <a href={info.getValue()} target="_blank" rel="noopener noreferrer">
          {info.getValue()}
        </a>
      ),
    },
  ];

  const table = useReactTable({
    data: publicationsData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: userInput,
    },
    onGlobalFilterChange: setSearchVariable,
  });

  return (
    <div className="publications">
      <div className="publications-page">
        <div className="hero">
          <h1>PUBLICATIONS</h1>
          <br></br>
          <p>
            The following publications are referenced for illustrative purposes
            only. Neurolytica Labs is a fictional organisation created as a web
            development portfolio project. All papers are the work of their
            respective authors.
          </p>
          <br></br>
        </div>
        <div className="content">
          <div className="search-container">
            <input
              value={userInput}
              onChange={(e) => setSearchVariable(e.target.value)}
              placeholder="Search by title, author or keyword..."
              id="publications-search"
            />
            <img src={searchIcon} alt="search" className="search-icon" />
          </div>
          <table className="publications-table">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br></br>
        <div className="publications-contact">
          <NavLink to="/contact">
            <button id="collaborate">Collaborate with us</button>
          </NavLink>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Publications;
