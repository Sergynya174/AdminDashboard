import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.scss";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f799a354",
    color: "#475569",
    fontSize: 16,
    fontWeight: 600,
  },
}));

const columns = [
  { field: "user", headerName: "Пользователь", width: 130 },
  { field: "product", headerName: "Кофе", width: 130 },
  { field: "price", headerName: "Цена", width: 130 },
  { field: "pay_date", headerName: "Дата покупки", width: 130 },
];

const rows = [
  {
    id: 1,
    userName: "userName",
    firstName: "Jon",
    lastName: "Snow",
    email: "email",
    role: "Роль",
  },
  {
    id: 2,
    userName: "userName",
    firstName: "Cersei",
    lastName: "Lannister",
    email: "email",
    role: "Роль",
  },
  {
    id: 3,
    userName: "userName",
    firstName: "Jaime",
    lastName: "Lannister",
    email: "email",
    role: "Роль",
  },
  {
    id: 4,
    userName: "userName",
    firstName: "Arya",
    lastName: "Stark",
    email: "email",
    role: "Роль",
  },
  {
    id: 5,
    userName: "userName",
    firstName: "Daenerys",
    lastName: "Targaryen",
    email: "email",
    role: "Роль",
  },
  {
    id: 6,
    userName: "userName",
    firstName: null,
    lastName: "Melisandre",
    email: "email",
    role: "Роль",
  },
  {
    id: 7,
    userName: "userName",
    firstName: "Ferrara",
    lastName: "Clifford",
    email: "email",
    role: "Роль",
  },
  {
    id: 8,
    userName: "userName",
    firstName: "Rossini",
    lastName: "Frances",
    email: "email",
    role: "Роль",
  },
  {
    id: 9,
    userName: "userName",
    first_Name: "Harvey",
    lastName: "Roxie",
    email: "email",
    role: "Роль",
  },
];

export default function BasicTable({ products }) {
  const data = products?.results.map((item) => {
    return {
      pay_date: item.pay_date.split("T")[0],
      user: item.user.first_name + " " + item.user.last_name,
      price: item.price,
      product: item.product,
      id: item.id,
    };
  });

  return (
    <div className="table">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data === undefined || null ? rows : data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
