import { Routes } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/recover-password' element={<RecoverPassword />} />
        <Route path='/reset-password/:id' element={<ResetPassword />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/:id' element={<EditProfile />} />
          <Route path='/exercises' element={<Exercises />} />
          <Route path='/Diary' element={<Diary />} />
          <Route path='/Professionals' element={<Professionals />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
