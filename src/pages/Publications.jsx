import { NavLink } from "react-router-dom";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import publicationsData from "../data/publications-data.js";

function Publications() {
  const columns = [
    { accessorKey: "title", header: "Title" },
    { accessorKey: "author", header: "Author" },
    { accessorKey: "date", header: "Date" },
    { accessorKey: "link", header: "Link" },
  ];

  const table = useReactTable({
    data: publicationsData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
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
          <table>
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
