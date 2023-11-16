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
import { JournalsProvider } from './context/JournalsContext';
import Journal from './pages/Journal';
import NavBar from './components/NavBar/NavBar';
import Journals from './pages/Journals/Journals';

function App() {
  return (
    <AuthProvider>
      <JournalsProvider>
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
              <Route path='/journals/:id' element={<Journals />} />
              <Route path='/exercises' element={<Exercises />} />
              <Route path='/Diary' element={<Diary />} />
              <Route path='/Diary/:id' element={<Journal />} />
              <Route path='/Journals' element={<Journal />} />
              <Route path='/Professionals' element={<Professionals />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </JournalsProvider>
    </AuthProvider>
  );
}

export default App;
