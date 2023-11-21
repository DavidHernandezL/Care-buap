import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const RoleGuard = () => {
  const { user } = useAuth();

  if (user.role !== 'ADMIN_ROLE') return <Navigate to='/' />;
  return <Outlet />;
};

export default RoleGuard;
