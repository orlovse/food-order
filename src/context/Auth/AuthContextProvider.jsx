import { useState } from 'react';
import { AuthContext } from '.';

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setUser] = useState(null);

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext value={{
      currentUser, 
      isAuthorized: Boolean(currentUser),
      setUser,
      logout
    }}>
      {children}
    </AuthContext>
  );
};