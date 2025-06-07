import { RestaurantTabButton } from './RestaurantTabButton';
import styles from './TabNavigation.module.css';

export const TabNavigation = ({ tabs = [], selectedId, setActiveId }) => {
  return (
    <nav className={styles.container}>
      {tabs.map((id) => (
        <RestaurantTabButton
          key={id}
          id={id}
          selected={selectedId === id}
          navigate={() => setActiveId(id)} 
        />
      ))}
    </nav>
  );
};
