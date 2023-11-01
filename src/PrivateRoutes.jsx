import { Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
const PrivateRoutes = () => {
  const { isAuthenticated, loading } = useAuth();

  console.log(loading, isAuthenticated);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading && !isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
