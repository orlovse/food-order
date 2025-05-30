import { NavigationButton } from './NavigationButton';
import styles from './TabNavigation.module.css';

export const TabNavigation = ({ tabs = [], selectedId, setActiveId }) => {
  return (
    <nav className={styles.container}>
      {tabs.map((tab) => (
        <NavigationButton
          key={tab.id}
          text={tab.name}
          selected={selectedId === tab.id}
          navigate={() => setActiveId(tab.id)} 
        />
      ))}
    </nav>
  );
};
