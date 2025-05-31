import { createContext } from 'react';


export const AuthContext = createContext({
  currentUser: null,
  isAuthorized: false,
  setUser: () => {},
  logout: () => {}
});