import { Restaurant } from '@components/Restaurant/Restaurant';
import { useRestaurants } from '@hooks/useRestaurants';
import { TabNavigation } from '@layout/TabNavigation/TabNavigation';
import styles from './HomePage.module.css';

export const HomePage = () => {
  const { restaurants, selectedRestaurant, setSelectedRestaurantId } =
    useRestaurants();

  return (
    <div className={styles.container}>
      <TabNavigation
        tabs={restaurants}
        selectedId={selectedRestaurant.id}
        setActiveId={setSelectedRestaurantId}
      />

      <Restaurant restaurant={selectedRestaurant} />
    </div>
  );
};
