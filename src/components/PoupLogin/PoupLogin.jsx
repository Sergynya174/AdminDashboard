import React from "react";
import "./PoupLogin.scss";

export const PoupLogin = ({
  isOpenPopup,
  handleClick,
  handleSubmitLoginAdmin,
  handleSubmitLoginUser,
}) => {
  return (
    <div
      className={`popup ${isOpenPopup && "popup_opened"}`}
      onClick={handleClick}
    >
      <div className="popup__container">
        <h2 className="popup__title">Выбери роль:</h2>
        <button className="popup__save-btn" onClick={handleSubmitLoginAdmin}>
          Войти как администратор
        </button>
        <button className="popup__save-btn" onClick={handleSubmitLoginUser}>
          Войти как пользователь
        </button>
      </div>
    </div>
  );
};
