import { useContext, useRef } from 'react';
import { Footer } from '@layout/Footer/Footer';
import { Header } from '@layout/Header/Header';
import { ProgressBar } from '@layout/ProgressBar/ProgressBar';
import styles from './Layout.module.css';
import { ThemeContext } from '../../context/Theme';
import classNames from 'classnames';

export const Layout = ({ children }) => {
  const mainRef = useRef(null);
  const { isDarkTheme } = useContext(ThemeContext);
  const layoutStyles = classNames(styles.layout, { [styles.layoutDark]: isDarkTheme });

  return (
    <div className={layoutStyles}>
      <Header/>
      <ProgressBar target={mainRef}/>

      <main ref={mainRef} className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  );
};
