import React from "react";
import "./UsersTable.scss";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "Ник", width: 130 },
  { field: "first_name", headerName: "Имя", width: 130 },
  { field: "last_name", headerName: "Фамилия", width: 130 },
  { field: "email", headerName: "Почта", width: 90 },
  { field: "role", headerName: "Роль", width: 160 },
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

export const UsersTable = ({ data }) => {
  return (
    <div className="user-table">
      <DataGrid
        rows={data === null ? rows : data?.results}
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
