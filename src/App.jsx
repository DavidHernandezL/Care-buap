import { Routes } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import PrivateRoutes from './PrivateRoutes';
import {
  Login,
  Register,
  RecoverPassword,
  ResetPassword,
  Profile,
  Exercises,
  Diary,
  Professionals,
  EditProfile,
  ErrorPage,
} from '@pages';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/forgot-password' element={<RecoverPassword />} />
          <Route path='/reset-password/:id' element={<ResetPassword />} />
          <Route path='*' element={<ErrorPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/:id' element={<EditProfile />} />
            <Route path='/exercises' element={<Exercises />} />
            <Route path='/Diary' element={<Diary />} />
            <Route path='/Professionals' element={<Professionals />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
