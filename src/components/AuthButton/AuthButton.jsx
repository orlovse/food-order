import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';

export const AuthButton = () => {
  const { 
    currentUser, 
    login,
    logout,
    isAuthorized 
  } = useContext(AuthContext);

  const handleAuth = isAuthorized ? logout : login;

  return (
    <button onClick={handleAuth}>
      { isAuthorized ? `${currentUser.name}: Logout` : 'Login'}
    </button>
  );
};