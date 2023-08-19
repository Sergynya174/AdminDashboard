import React from "react";
import "./User.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Header } from "../../components/Header/Header";

export const Users = () => {
  return (
    <div className="user">
      <Sidebar />
      <div className="user__container">
        <Header />
      </div>
    </div>
  );
};
