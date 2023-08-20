import React from "react";
import "./Users.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Header } from "../../components/Header/Header";
import { UsersTable } from "../../components/UsersTable/UsersTable";

export const Users = () => {
  return (
    <div className="users">
      <Sidebar />
      <div className="users__container">
        <Header />
        <UsersTable />
      </div>
    </div>
  );
};
