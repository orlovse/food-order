import { AuthButton } from '../../components/AuthButton/AuthButton';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      Pick restaurant and order food

      <AuthButton/>
    </header>
  );
};
