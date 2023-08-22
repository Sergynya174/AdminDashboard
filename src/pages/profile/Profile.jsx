import React, { useEffect } from "react";
import "./Profile.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { user } from "../../store/user";

export const Profile = () => {
  const item = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(user(1));
  }, []);

  return (
    <div className="profile">
      <Sidebar />
      <div className="profile__container">
        <div className="profile__container-info">
          <div className="profile__info">
            <button className="profile__button">Редактировать</button>
            <h1 className="profile__title">Информация</h1>
            <div className="profile__item">
              <img
                className="profile__img"
                src="https://coolsen.ru/wp-content/uploads/2021/06/1-3.jpg"
                alt=""
              />
              <div className="profile__details">
                <h3 className="profile__name">
                  {`${item?.first_name} ${item?.last_name}`}
                </h3>
                <div className="profile__details-item">
                  <span className="profile__subtitle">Ник:</span>
                  <span className="profile__text">{item?.username}</span>
                </div>
                <div className="profile__details-item">
                  <span className="profile__subtitle">Почта:</span>
                  <span className="profile__text">{item?.email} </span>
                </div>
                <div className="profile__details-item">
                  <span className="profile__subtitle">Роль:</span>
                  <span className="profile__text">{item?.role} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
