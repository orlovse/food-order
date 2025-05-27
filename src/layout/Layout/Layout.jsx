import { Footer } from '@layout/Footer/Footer';
import { Header } from '@layout/Header/Header';
import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
