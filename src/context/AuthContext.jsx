import { createContext, useState, useContext } from "react";
import { registerRequest } from "@services/auth";
import { loginRequest, logoutRequest, sessionRequest } from "../services/auth";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { upload } from "../pages/ResetPassword/upload";
import { updateUserRequest } from "../services/user";
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response.data.errors);
      setErrors(error.response.data.errors);
    }
  };

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
      console.log(res);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data.errors);
    }
  };

  const updateUser = async ({ file, password, fullName, user }) => {
    try {
      let url = user.img;
      if (file) {
        console.log("entra");
        const { data } = await upload({ file: file, userId: user.uid });
        url = data.url;
      }

      const newUser = {
        fullName,
        password,
        img: url,
        uid: user.uid,
      };

      const { data } = await updateUserRequest(newUser);
      setUser(data.userUpdate);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setErrors([]);
    }
  };

  const signOut = async () => {
    await logoutRequest();
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      try {
        const res = await sessionRequest();
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        user,
        isAuthenticated,
        errors,
        loading,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
