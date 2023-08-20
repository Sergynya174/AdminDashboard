import React from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  return (
    <div className="header">
      <MenuIcon className="header__burger" />
      <div className="header__container">
        <div className="header_container-search">
          <input className="header__input" type="text" placeholder="Поиск..." />
          <SearchIcon className="header__icon" />
        </div>
        <div className="header__container-info">
          <p className="header__text">Добро пожаловать, Василий!</p>
          <button className="header__avatar"></button>
        </div>
      </div>
    </div>
  );
};
