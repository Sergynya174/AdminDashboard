import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "../../pages/login/Login";
import { Payments } from "../../pages/payments/Payments";
import { Profile } from "../../pages/profile/Profile";
import { Users } from "../../pages/users/Users";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
