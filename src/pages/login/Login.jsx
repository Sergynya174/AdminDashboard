import { useEffect, useState } from "react";
import "./Login.scss";
import { PoupLogin } from "../../components/PoupLogin/PoupLogin";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, loginUser } from "../../store/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = { email, password };
  const handleClick = (evt) => {
    evt.preventDefault();
    setIsOpenPopup(!isOpenPopup);
  };

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const handleChangePassword = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmitLoginAdmin = () => {
    dispatch(loginAdmin(data));
  };

  const handleSubmitLoginUser = () => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (isAuth === false) {
      navigate("/");
    } else {
      navigate("/profile");
    }
  }, [isAuth]);

  return (
    <div className="login">
      <div className="login__container">
        <h1>Добро пожаловать!</h1>
        <form className="login__form">
          <input
            className="login__input"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <input
            className="login__input"
            type="password"
            placeholder="Password"
            autoComplete="on"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          <button
            className="login__button"
            id="login-button"
            onClick={handleClick}
          >
            Login
          </button>
        </form>
      </div>
      {isOpenPopup && (
        <PoupLogin
          isOpenPopup={isOpenPopup}
          handleClick={handleClick}
          handleSubmitLoginUser={handleSubmitLoginUser}
          handleSubmitLoginAdmin={handleSubmitLoginAdmin}
        />
      )}
    </div>
  );
};
