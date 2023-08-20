import React from "react";
import "./UsersTable.scss";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "userName", headerName: "Ник", width: 130 },
  { field: "firstName", headerName: "Имя", width: 130 },
  { field: "lastName", headerName: "Фамилия", width: 130 },
  { field: "email", headerName: "Почта", width: 90 },
  { field: "role", headerName: "Роль", width: 160 },
];

const rows = [
  {
    id: 1,
    userName: "userName",
    lastName: "Snow",
    firstName: "Jon",
    email: "email",
    role: "Роль",
  },
  {
    id: 2,
    userName: "userName",
    lastName: "Lannister",
    firstName: "Cersei",
    email: "email",
    role: "Роль",
  },
  {
    id: 3,
    userName: "userName",
    lastName: "Lannister",
    firstName: "Jaime",
    email: "email",
    role: "Роль",
  },
  {
    id: 4,
    userName: "userName",
    lastName: "Stark",
    firstName: "Arya",
    email: "email",
    role: "Роль",
  },
  {
    id: 5,
    userName: "userName",
    lastName: "Targaryen",
    firstName: "Daenerys",
    email: "email",
    role: "Роль",
  },
  {
    id: 6,
    userName: "userName",
    lastName: "Melisandre",
    firstName: null,
    email: "email",
    role: "Роль",
  },
  {
    id: 7,
    userName: "userName",
    lastName: "Clifford",
    firstName: "Ferrara",
    email: "email",
    role: "Роль",
  },
  {
    id: 8,
    userName: "userName",
    lastName: "Frances",
    firstName: "Rossini",
    email: "email",
    role: "Роль",
  },
  {
    id: 9,
    userName: "userName",
    lastName: "Roxie",
    firstName: "Harvey",
    email: "email",
    role: "Роль",
  },
];

export const UsersTable = () => {
  return (
    <div className="user-table">
      <DataGrid
        rows={rows}
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
  );
};
