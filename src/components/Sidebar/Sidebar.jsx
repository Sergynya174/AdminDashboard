import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import logo from "../../image/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const link = useLocation();
  const role = useSelector((state) => state.user.user?.role);
  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <div
        className="sidebar__burger"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <MenuIcon />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="sidebar__container-logo">
          <img className="sidebar__img-logo" src={logo} alt="logo" />
          <h1 className="sidebar__text-logo">
            Co<span className="sidebar__span">ff</span>e
          </h1>
        </div>
        <div className="sidebar__container">
          <ul className="sidebar__ul">
            <Link
              to="/profile"
              style={{ textDecoration: "none" }}
              className={
                link.pathname === "/profile"
                  ? "sidebar__link sidebar__link_active"
                  : "sidebar__link"
              }
            >
              <li className="sidebar__li">
                <WorkOutlineIcon className="sidebar__icon" />
                <p className="sidebar__text">Мой профиль</p>
              </li>
            </Link>
            {role === "admin" ? (
              <Link
                to="/users"
                style={{ textDecoration: "none" }}
                className={
                  link.pathname === "/users"
                    ? "sidebar__link sidebar__link_active"
                    : "sidebar__link"
                }
              >
                <li className="sidebar__li">
                  <PersonIcon className="sidebar__icon" />
                  <p className="sidebar__text">Пользователи</p>
                </li>
              </Link>
            ) : (
              ""
            )}
            <Link
              to="/payments"
              style={{ textDecoration: "none" }}
              className={
                link.pathname === "/payments"
                  ? "sidebar__link sidebar__link_active"
                  : "sidebar__link"
              }
            >
              <li className="sidebar__li">
                <CurrencyExchangeIcon className="sidebar__icon" />
                <p className="sidebar__text">Покупки</p>
              </li>
            </Link>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className={
                link.pathname === "/"
                  ? "sidebar__link sidebar__link_active"
                  : "sidebar__link"
              }
            >
              <li className="sidebar__li">
                <LogoutIcon className="sidebar__icon" />
                <p className="sidebar__text">Выход</p>
              </li>
            </Link>
          </ul>
        </div>
      </motion.div>
    </>
  );
};
