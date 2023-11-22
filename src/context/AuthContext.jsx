import { createContext, useState, useContext } from 'react';
import { registerUserRequest } from '@services/user';
import { loginUserRequest, verifyUserTokenRequest } from '@services/auth';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [errors]);

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const { data: res } = await verifyUserTokenRequest(cookies.token);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  const signup = async (user) => {
    try {
      const { data: response } = await registerUserRequest(user);
      const { data: userResponse } = response;
      setUser(userResponse);
      setIsAuthenticated(true);
      setErrors(null);
    } catch (error) {
      console.log(error.response.data.msg);
      setErrors(error.response.data.msg);
    }
  };

  const signin = async (user) => {
    try {
      const { data: response } = await loginUserRequest(user);
      const { data: userResponse } = response;
      console.log(userResponse);
      setUser(userResponse);
      setIsAuthenticated(true);
      setErrors(null);
    } catch (error) {
      console.log(error.response.data.msg);
      setErrors({ msg: error.response.data.msg });
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ signup, signin, user, isAuthenticated, errors, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
