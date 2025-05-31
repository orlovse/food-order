import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';

export const AuthButton = () => {
  const { 
    currentUser, 
    setUser,
    logout,
    isAuthorized 
  } = useContext(AuthContext);

  const handleAuth = () => {
    if (isAuthorized) {
      logout();
    } else {
      setUser({name: 'Sergei'});
    }
  };

  return (
    <button onClick={handleAuth}>
      { isAuthorized ? `${currentUser.name}: Logout` : 'Login'}
    </button>
  );
};