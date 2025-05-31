import { useState } from 'react';
import { ThemeContext } from '.';

export const TheneContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext value={{
      theme, 
      setTheme, 
      switchTheme, 
      isDarkTheme: theme === 'dark'
    }}>
      {children}
    </ThemeContext> 
  );
};