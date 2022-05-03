import React, { createContext, useState, useEffect, useContext } from 'react';

import { appstorage, _AUTH } from '~/storage';

interface AuthContextData {
  logged: boolean;
  logIn(): Promise<void>;
  logOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    try {
      const isLogged = appstorage.getBoolean(_AUTH) ?? false;
      setLogged(isLogged);
    } catch (err) {
      setLogged(false);
    }
  }, []);

  const logIn = async () => {
    try {
      appstorage.set(_AUTH, true);
      setLogged(true);
    } catch (error) {
      Promise.reject(error);
    }
  };

  const logOut = () => {
    try {
      appstorage.set(_AUTH, false);
      setLogged(false);
    } catch (error) {
      Promise.reject(error);
    }
  };

  return (
    <AuthContext.Provider value={{ logged: logged, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;
