import { createContext } from 'react';

export const ThemeContext = createContext({ 
  theme: 'light',
  isDarkTheme: false,
  setTheme: () => {},
  switchTheme: () => {}
});