import { useState } from 'react';
import { AuthContext } from '.';

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setUser] = useState(null);

  const logout = () => {
    setUser(null);
  };

  const login = () => {
    setUser({name: 'Sergei'});
  };

  return (
    <AuthContext value={{
      currentUser, 
      isAuthorized: Boolean(currentUser),
      login,
      logout
    }}>
      {children}
    </AuthContext>
  );
};