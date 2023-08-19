import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "../../pages/login/Login";
import { PaymentsAdmin } from "../../pages/payments_admin/PaymentsAdmin";
import { PaymentsUser } from "../../pages/payments_user/PaymentsUser";
import { ProfileAdmin } from "../../pages/profile_admin/ProfileAdmin";
import { ProfileUser } from "../../pages/profile_user/ProfileUser";
import { Users } from "../../pages/users/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/payments_admin" element={<PaymentsAdmin />} />
      <Route path="/payments_user" element={<PaymentsUser />} />
      <Route path="/profile_admin" element={<ProfileAdmin />} />
      <Route path="/profile_user" element={<ProfileUser />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;
