import { NavLink } from 'react-router';
import classNames from 'classnames';
import styles from './TabNavigation.module.css';

export const TabButton = ({ to, label }) => {
  const getLinkClass = ({ isActive }) => {
    return classNames(styles.link, { [styles.selected]: isActive });
  };

  return (
    <NavLink 
      end 
      to={to} 
      className={getLinkClass}
    >
      {label}
    </NavLink>
  );
};