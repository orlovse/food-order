import classNames from 'classnames';
import styles from './TabNavigation.module.css';

export const NavigationButton = ({ text, navigate, selected }) => {
  const buttonClass = classNames(styles.button, { [styles.selected]: selected });

  return (
    <button
      className={buttonClass}
      onClick={navigate}
    >
      {text}
    </button>
  );
};