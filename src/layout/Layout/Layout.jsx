import { useRef } from 'react';
import { Footer } from '@layout/Footer/Footer';
import { Header } from '@layout/Header/Header';
import { ProgressBar } from '@layout/ProgressBar/ProgressBar';
import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  const mainRef = useRef(null);
  

  return (
    <div className={styles.layout}>
      <Header />
      <ProgressBar target={mainRef}/>

      <main ref={mainRef}>{children}</main>

      <Footer />
    </div>
  );
};
