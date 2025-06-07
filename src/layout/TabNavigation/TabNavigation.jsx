import { TabButton } from './TabButton';
import styles from './TabNavigation.module.css';

export const TabNavigation = ({ tabs = [] }) => {
  return (
    <nav className={styles.container}>
      {tabs.map(({ id, path, label }) => (
        <TabButton 
          key={id} 
          id={id} 
          to={path} 
          label={label}
        />
      ))}
    </nav>
  );
};
