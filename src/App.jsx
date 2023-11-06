import Login from "@pages/Login";
import Register from "@pages/Register";
import RecoverPassword from "@pages/RecoverPassword";
import ResetPassword from "@pages/ResetPassword";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";
import PrivateRoutes from "./PrivateRoutes";
import Exercises from "./pages/Exercises";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/recover-password" element={<RecoverPassword />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/exercises" element={<Exercises />} />
          </Route>
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
