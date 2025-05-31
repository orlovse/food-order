import { AuthButton } from '../../components/AuthButton/AuthButton';
import { ThemeButton } from '../../components/ThemeButton/ThemeButton';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      Pick restaurant and order food
      
      <div className={styles.buttons}>
        <ThemeButton/>
        <AuthButton/>
      </div>
    </header>
  );
};
