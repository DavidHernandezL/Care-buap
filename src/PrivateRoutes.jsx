import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Loader from './components/Loader';

const PrivateRoutes = () => {
  const { isAuthenticated, loading } = useAuth();
  console.log('isAuthenticated', isAuthenticated);
  console.log('loading', loading);
  if (loading) return <Loader />;
  if (!loading && !isAuthenticated) return <Navigate to='/' />;

  return <Outlet />;
};

export default PrivateRoutes;
