import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const PrivateRoutes = () => {
  const { isAuthenticated, loading } = useAuth();

  if (!loading && !isAuthenticated) return <Navigate to='/' />;

  return <Outlet />;
};

export default PrivateRoutes;
