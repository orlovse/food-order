import { NavLink } from 'react-router';
import classNames from 'classnames';
import { AuthButton } from '@components/AuthButton/AuthButton';
import { ThemeButton } from '@components/ThemeButton/ThemeButton';
import styles from './Header.module.css';

export const Header = () => {
  const navLinks = [
    { id: 1, text: 'Home', link: '/'},
    { id: 2, text: 'Restaurants', link: '/restaurants'},
  ];

    const getLinkClass = ({ isActive }) => {
      return classNames(styles.link, { [styles.selected]: isActive });
    };

  return (
    <header className={styles.header}>
      <div className={styles.buttons}>
        {navLinks.map(({ id, text, link }) => (
          <NavLink
            key={id}
            to={link}
            className={getLinkClass}>
            {text}
          </NavLink>
        ))}
      </div>

      <div className={styles.buttons}>
        <ThemeButton/>
        <AuthButton/>
      </div>
    </header>
  );
};
