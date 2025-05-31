import { useContext } from 'react';
import { ThemeContext } from '../../context/Theme';

export const ThemeButton = () => {
  const { switchTheme, isDarkTheme } = useContext(ThemeContext);

  return(
    <button onClick={switchTheme}>
      { isDarkTheme ? 'Switch to light theme': 'Switch to dark theme' }
    </button>
  );
};