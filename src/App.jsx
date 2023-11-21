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
import MedicalProfile from './pages/MedicalProfile';
import Exercise from './pages/Exercise/Exercise';
import RoleGuard from './guards/RoleGuard';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';

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
              <Route path='/exercises/:id' element={<Exercise />} />
              <Route path='/Diary' element={<Diary />} />
              <Route path='/Diary/:id' element={<Journal />} />
              <Route path='/Journals' element={<Journal />} />
              <Route path='/Professionals' element={<Professionals />} />
              <Route path='/Professionals/:type/:id' element={<MedicalProfile />} />
              <Route element={<RoleGuard />}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/dashboard/users' element={<Users />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </JournalsProvider>
    </AuthProvider>
  );
}

export default App;
