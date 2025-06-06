import { Restaurant } from '@components/Restaurant/Restaurant';
import { useRestaurants } from '@hooks/useRestaurants';
import { TabNavigation } from '@layout/TabNavigation/TabNavigation';
import styles from './HomePage.module.css';

export const HomePage = () => {
  const { restaurantsIds, selectedRestaurantId, setSelectedRestaurantId } =
    useRestaurants();

  return (
    <div className={styles.container}>
      <TabNavigation
        tabs={restaurantsIds}
        selectedId={selectedRestaurantId}
        setActiveId={setSelectedRestaurantId}
      />

      <Restaurant id={selectedRestaurantId} />
    </div>
  );
};
