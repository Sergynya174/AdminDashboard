import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "../../pages/login/Login";
import { Payments } from "../../pages/payments/Payments";
import { Profile } from "../../pages/profile/Profile";
import { Users } from "../../pages/users/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;
