import React, { useEffect } from "react";
import "./Users.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { UsersTable } from "../../components/UsersTable/UsersTable";
import { useDispatch, useSelector } from "react-redux";
import { users, user } from "../../store/user";

export const Users = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(users());
    dispatch(user(1));
  }, []);

  return (
    <div className="users">
      <Sidebar />
      <div className="users__container">
        <h1 className="users__title">Пользователи</h1>
        <UsersTable data={data} />
      </div>
    </div>
  );
};
