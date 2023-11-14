import { Outlet } from 'react-router-dom';

import { Navigate } from 'react-router-dom';
const PrivateRoutes = () => {
  return <Navigate to='/auth/login' replace />;

  return <Outlet />;
};

export default PrivateRoutes;
