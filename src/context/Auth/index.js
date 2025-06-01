import { createContext } from 'react';


export const AuthContext = createContext({
  currentUser: null,
  isAuthorized: false,
  login: () => {},
  logout: () => {}
});