import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container-logo">
        <h1 className="sidebar__logo">Coffe</h1>
      </div>
      <div className="sidebar__container">
        <ul className="sidebar__ul">
          <p className="sidebar__title">Главное</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li className="sidebar__li">
              <WorkOutlineIcon className="sidebar__icon" />
              <p className="sidebar__text">Мой профиль</p>
            </li>
          </Link>
          <p className="sidebar__title">Пользователи</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li className="sidebar__li">
              <PersonIcon className="sidebar__icon" />
              <p className="sidebar__text">Пользователи</p>
            </li>
          </Link>
          <Link to="/payments" style={{ textDecoration: "none" }}>
            <li className="sidebar__li">
              <CurrencyExchangeIcon className="sidebar__icon" />
              <p className="sidebar__text">Покупки</p>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="sidebar__li">
              <LogoutIcon className="sidebar__icon" />
              <p className="sidebar__text">Выход</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
