import Login from "@pages/Login";
import Register from "@pages/Register";
import RecoverPassword from "@pages/RecoverPassword";
import ResetPassword from "@pages/ResetPassword";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/recover-password" element={<RecoverPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
