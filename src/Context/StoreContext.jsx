import { createContext, useEffect, useState } from "react";
import { authAPI } from "./authAPI";

export const StoreContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const StoreProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [logined,setlogined] = useState(false)

 // Check for existing session on initial load
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    const storedLogined = sessionStorage.getItem('logined');
    if (storedUser || storedLogined) {
      setlogined(true)
      setUser(JSON.parse(storedUser));
    }else{
      setLoading(false);
      setlogined(false); 
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const data = await authAPI.login(email, password);
      setlogined(true);
      setUser(data);
      sessionStorage.setItem('user', JSON.stringify(data));
      sessionStorage.setItem('logined', JSON.stringify(logined));
      // setError(null);
      // return data;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password, password_confirmation) => {
    setLoading(true);
    try {
      const data = await authAPI.register(name, email, password, password_confirmation);
      // setError(null);

      return data;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      // await authAPI.logout();
      setUser('');
      setlogined(false);
      sessionStorage.removeItem('user');
    } catch (error) {
      setError(error);
      throw error;
    }
  };

  return (
    <StoreContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        register,
        logout,
        setUser,
        logined
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};